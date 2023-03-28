import { BASE_IMG_URL } from "../constants"
import '../styles/movie.scss'

export default function Movie({ movie, handleOpenModal }) {

  return (
    <li className='movie'>
        <h3 className="movie-title">{movie.title}</h3>
        <img className="movie-imagen" src={`${BASE_IMG_URL}${movie.poster}`} alt={movie.title} onClick={() => handleOpenModal(movie)} />
    </li>
    
  )
}
