import { useEffect, useState } from 'react';

const API_KEY =  '9022ade996a34ba4279e69bdec7174b0'
const API_BASE_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=es&query=`

export function useMovies() {
    const [query, setQuery] = useState('spiderman')
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(`${API_BASE_URL}${query}`)
        .then(response => response.json())
        .then(res => {
            setMovies(res.results)
        })
        .catch(() => {
            console.log('Ha ocurrido un error al cargar las películas')
            setMovies([])
        })
    }, [query])

    const mappedFilms = movies.map(film => {
        return {
        id: film.id,
        title: film.title,
        poster: film.poster_path,
        overview: film.overview
    }})

    return{ movies: mappedFilms, setQuery}
}