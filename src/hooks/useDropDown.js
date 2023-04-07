import { useEffect, useState } from "react"

export default function useDropDown() {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [dropdownStyle, setDropdownStyle] = useState({height: '0px'})
    
    const dropdownChangeState = ()  => setDropdownOpen(!dropdownOpen)
    

    useEffect(() => {
      
      if(dropdownOpen)
        setDropdownStyle({height: '120px'}) 
      else
        setDropdownStyle({height: '0px'}) 
  
    }, [dropdownOpen])

    return {dropdownOpen, dropdownChangeState, dropdownStyle}

}