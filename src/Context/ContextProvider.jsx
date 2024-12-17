import React from 'react'
import Togglecont from './Createcontext'
import { useState } from 'react'

const ContextProvider = ({children}) => {
    const [white,setwhite]=useState(true)

    let changeback=()=>{
      setwhite(white=>!white)
    }
  return (
    <Togglecont.Provider value={{white,setwhite,changeback}}>
        {children}
    </Togglecont.Provider>
  )
}

export default ContextProvider
