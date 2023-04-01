import { createContext, useReducer } from "react"
import { myListActionsReducer, initialState } from "../reducer/useListReducer"

export const MyListContext = createContext()


export function MyListProvider({children}) {
    
    const [state, dispatch ] = useReducer(myListActionsReducer, initialState)

    const addRating = (movie, rating, description) => dispatch({
        type: 'ADD_RATING',
        payload: {movie: movie, rating: rating, description:description}
    })

    const clearList = () => dispatch({
        type: 'CLEAR_LIST'
    })

    
    const getRating = movie => {
        const filmInListIndex = state.findIndex(item => item.id === movie.id)

        return filmInListIndex >= 0 
        ? state[filmInListIndex] 
        : {
            ...movie,
            rating: 0,
            description: ''
        }
      }
      
    return(
        <MyListContext.Provider value={{
            list: state,
            addRating, 
            getRating,
            clearList
        }} >
            {children}
        </MyListContext.Provider>
    )
}