/* eslint-disable default-case */
import { createContext, useReducer } from "react"
export const MyListContext = createContext()

export const initialState = JSON.parse(window.localStorage.getItem('list')) || []

function updateLocalStorage(list) {
    window.localStorage.setItem('list', JSON.stringify(list))
}

export const reducer = (state, action) => {
    const {type: actionType, payload: actionPayload } = action

    switch(actionType) {
        case 'ADD_RATING': {
            
            const {movie, rating, description} = actionPayload

            const filmInListIndex = state.findIndex(item => item.id === movie.id)

            if(filmInListIndex >= 0) {

                const newList = structuredClone(state)
                newList[filmInListIndex].rating = rating 
                newList[filmInListIndex].description = description 
                updateLocalStorage(newList)
                return newList

            } else {

                const newList = [
                    ...state,
                    {
                        ...movie, 
                        rating: rating,
                        description: description
                    }
                ]
                
                updateLocalStorage(newList)
                return newList
            }
        }

        case 'CLEAR_LIST': {
            updateLocalStorage([])
            return []
        }
    }

    return state
}

export function MyListProvider({children}) {
    
    const [state, dispatch ] = useReducer(reducer, initialState)

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