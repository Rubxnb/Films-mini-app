import React, { useState } from 'react'
import { useList } from '../hooks/useList'
import ModalRating from './ModalRating'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'

export default function Movies({movies}) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies 
    ? <MoviesList movies={movies}/> 
    : <p>No hay películas para mostrar</p>
  )
}

function MoviesList( {movies}) {  
  
  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState()

  const {getRating} = useList()
  const handleOpen = (movie) => {
    setSelectedMovie(getRating(movie))
    setOpen(true)
  }
  
  const handleClose = () => setOpen(false)
  return (
  <ul className='movies'>
  {
      movies.map((movie, index) => {
        return (
          <li className='movie' key={index} >
            <p>{movie.title}</p>
            <img src={`${BASE_IMG_URL}${movie.poster}`} alt={movie.title} onClick={() => handleOpen(movie)} />
          </li>
        )
      })
    }
    
  {selectedMovie &&<ModalRating movie={selectedMovie} handleClose={handleClose} open={open}/>}
  </ul>)
}