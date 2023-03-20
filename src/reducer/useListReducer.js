/* eslint-disable default-case */
export const initialState = JSON.parse(window.localStorage.getItem('list')) || []

function updateLocalStorage(list) {
    window.localStorage.setItem('list', JSON.stringify(list))
}

export const myListActionsReducer = (state, action) => {
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
