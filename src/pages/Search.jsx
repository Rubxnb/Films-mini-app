import React, { useRef } from 'react'
import { Link } from '../components/Link'
import Movies from '../components/Movies'
import { useMovies } from '../hooks/useMovies';
import {gsap} from "gsap";

export function Search() {
  
    const {movies, setQuery} = useMovies()
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
    <div className="App">
    <header className="App-header">
      <h1>Buscador de películas</h1>

      <Link to='/mylist'>Mi lista</Link>
        <form className='form' onSubmit={submit}>
            <input placeholder='Spider-man, Harry Potter, ...' ref={refInput}/>
            <button className="button-gsap" >Buscar</button>
        </form>
    </header>
    <main>
      
        <Movies movies={movies}/>
        
    </main>

  </div>
  )
}
