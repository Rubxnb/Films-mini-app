import { useContext } from "react"
import { MyListContext } from "../context/myList"

export const useList = () => {
    const context = useContext(MyListContext)

    if(context === undefined) {
        throw new Error('useList must be used within a MyListProvider')
    }
    
    return context
}