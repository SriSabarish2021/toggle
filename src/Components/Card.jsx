import React, { useContext } from 'react'
import Image from './Image'
import Cont from './Cont'
import '../Styles/Card.css'
import Togglecont from '../Context/Createcontext'
const Card = () => {
    const {white}=useContext(Togglecont)
  return (
    <div className='card' style={{backgroundColor:white?`rgb(255, 255, 255)`:`rgba(109, 109, 109, 0.58)`,boxShadow:white?` rgba(0, 0, 0, 0.24) 0px 3px 8px`:`rgb(255, 0, 0) 0px 3px 8px`}}>
      <Image/>
      <Cont/>
    </div>
  )
}

export default Card
