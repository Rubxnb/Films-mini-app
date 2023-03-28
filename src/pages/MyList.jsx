import React, { useState } from 'react'
import { Link } from '../components/Link'
import ModalRating from '../components/ModalRating'
import Movie from '../components/Movie'
import { useList } from '../hooks/useList'

export function MyList() {

  const [open, setOpen] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState()

  const handleOpenModal = (movie) => {
    setSelectedMovie(movie)
    setOpen(true)
  }
  
  const handleClose = () => setOpen(false)

  const  {list, clearList} =  useList()

  return (
    <div className="App">
    <header className="App-header">
      <h1>Mi Lista</h1>
      <button onClick={clearList}> Limpiar Lista</button>
      
    </header>
    <main>
      
    <ul className='movies'>
      {
        list.map((movie) => <Movie key={movie.id} movie={movie} handleOpenModal={handleOpenModal}/>)
      }
    </ul>
    {selectedMovie &&<ModalRating movie={selectedMovie} handleClose={handleClose} open={open}/>}
    </main>
     
    </div>
  )
}
