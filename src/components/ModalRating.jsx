import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import React, { useRef, useState, useEffect } from 'react'
import { Rating } from '@mui/material'
import { useList } from '../hooks/useList'
import confetti from 'canvas-confetti';

import '../styles/components/modal.scss'

const BASE_IMG_URL = 'https://image.tmdb.org/t/p/original/'

const style = {
    height: '700px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Utiliza un porcentaje en lugar de píxeles
    maxWidth: '600px',
    bgcolor: '#262837',
    boxShadow:  '1px 0px 10px #21AF7F',
    p: 4,
    fontFamily: 'monserrat',
    borderRadius: '10px'
  }

  const modalStyle = {
    // Establece un tamaño máximo para la imagen en la modal
    maxHeight: '50%',
    maxWidth: '50%'
  }
  
  // Utiliza media queries para aplicar diferentes estilos en función del tamaño de la pantalla
  const mediaQueries = {
    '@media (max-width: 768px)': {
      // Establece un tamaño de fuente más pequeño en pantallas más pequeñas
      fontSize: '14px'
    }
  }

  
export default function ModalRating(props) { 
  const {movie, open, handleClose} = props
  const { addRating } = useList()
  const description = useRef()
  const [ratingValue, setRatingValue] = useState()

  useEffect(() => {
    setRatingValue(movie.rating)
  }, [movie])

  const handleClick = () => {
    addRating(movie, ratingValue, description.current.value)
    handleClose()
  }
  return (
    <Modal 
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <div className='modal'>
              <h2>{movie.title}</h2>
              <div className='modal-info'>
                <img src={`${BASE_IMG_URL}${movie.poster}`} alt={movie.title} style={modalStyle}/>
                <p>{movie.overview}</p>
              </div>
            <Rating
              name="simple-controlled"
              size='large'
              value={ratingValue}
              onChange={(event, newValue) => {
                if(newValue === 5){
                 
                  confetti({
                    particleCount: 450,
                    spread: 200,
                    origin: { y: 0.68 },
                    gravity: 0.8,
                    zIndex: 2000
                  })
                
                }
                setRatingValue(newValue)
                }}
              />
              <textarea ref={description} className='textarea' name="Text1" cols="40" rows="5" defaultValue={movie?.description} style={mediaQueries}></textarea>
              <button onClick={handleClick}>Guardar</button>
          </div>
        </Box>
      </Fade>
    </Modal>
  )
}
