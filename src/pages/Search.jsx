import React, { useRef } from 'react'
import Movies from '../components/Movies'
import { useMovies } from '../hooks/useMovies';
import {gsap} from "gsap";
import '../styles/pages/search.scss'

export function Search() {
  
    const {movies, setQuery} = useMovies('Query')
    const refInput = useRef()
    
    function submit(event) {
      event.preventDefault()
      setQuery(refInput.current.value)

      gsap.to(".button-gsap", {
        duration: 1,
        rotate: "+=360"
      })
    }

  return (
    <div className="searchPage">
      <header className="searchPage-header">
        <h1>Buscador de películas</h1>

          <form className='form' onSubmit={submit}>
              <input className='form-text' placeholder='Spider-man, Harry Potter, ...' ref={refInput}/>
              <button className="button-gsap" >Buscar</button>
          </form>
      </header>
      <main>
        
          <Movies movies={movies}/>
          
      </main>
  </div>
  )
}
