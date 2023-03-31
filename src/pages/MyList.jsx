import React, { useState } from 'react'
import ModalRating from '../components/ModalRating'
import Movie from '../components/Movie'
import { useList } from '../hooks/useList'
import '../styles/pages/mylist.scss'
import '../styles/components/movieList.scss'
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
    <div className="myListPage">
      <header className="myListPage-header">
        <h1>Mi Lista</h1>
        <button onClick={clearList}> Limpiar Lista</button>
        
      </header>
      <main>
        <section className='movies'>
          <ul className='movies-list'>
            {
              list.map((movie) => <Movie key={movie.id} movie={movie} handleOpenModal={handleOpenModal}/>)
            }
          </ul>
          {selectedMovie &&<ModalRating movie={selectedMovie} handleClose={handleClose} open={open}/>}

        </section>
      </main>
     
    </div>
  )
}
