import React from 'react'
import Movies from '../components/Movies'
import { useMovies } from '../hooks/useMovies'

export function Inicio() {
    const {movies} = useMovies('NowPlaying')

  return (
    <div className="searchPage">
      <header className="searchPage-header">
        <h1>Estrenos</h1>
      </header>
      <main>
        
          <Movies movies={movies}/>
          
      </main>
  </div>
  )
}
