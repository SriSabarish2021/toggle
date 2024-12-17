import React, { useContext } from 'react'
import '../Styles/Card.css'
import Togglecont from '../Context/Createcontext'
const Toggle = () => {
  const {changeback}=useContext(Togglecont)
  return (
    <div className='toggle'>
     <button onClick={changeback}>Tog</button> 
    </div>
  )
}

export default Toggle
