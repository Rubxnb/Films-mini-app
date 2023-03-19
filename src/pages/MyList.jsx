import React, { useState } from 'react'
import { Link } from '../components/Link'
import ModalRating from '../components/ModalRating'
import { useList } from '../hooks/useList'
const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'

export function MyList() {

  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState()

  const handleOpen = (movie) => {
    setSelectedMovie(movie)
    setOpen(true)
  }
  
  const handleClose = () => setOpen(false)

  const  {list, clearList} =  useList()

  return (
    <div className="App">
    <header className="App-header">
      <h1>Mi Lista</h1>
      <Link to='/search'>Búsqueda</Link>
      <button onClick={clearList}> Limpiar Lista</button>
      
    </header>
    <main>
      
    <ul className='movies'>
   {
    list.map((movie, index) => {
        return (
          <li className='movie' key={index} >
            <p>{movie.title}</p>
            <img src={`${BASE_IMG_URL}${movie.poster}`} 
            alt={movie.title} onClick={() => handleOpen(movie)}/>
          </li>
        )
      })
    }
    </ul>
    {selectedMovie &&<ModalRating movie={selectedMovie} handleClose={handleClose} open={open}/>}
    </main>
     
    </div>
  )
}
