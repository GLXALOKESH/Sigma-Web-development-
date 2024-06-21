import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div className="pic"></div>
      <div className="title">{props.title}</div>
      <div className="desc"> {props.desc}</div>
    </div>
  )
}

export default Card
