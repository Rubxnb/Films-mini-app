import React, { useState } from 'react'
import { useList } from '../hooks/useList'
import ModalRating from './ModalRating'
import Movie from './Movie'

import '../styles/movieList.scss'

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
    <section className='movies'>
        <ul className='movies-list'>
        {
        movies.map((movie) => <Movie key={movie.id} movie={movie} handleOpenModal={handleOpen} />)
        }
        
    {selectedMovie &&<ModalRating movie={selectedMovie} handleClose={handleClose} open={open}/>}
    </ul>
    </section>
    )
}