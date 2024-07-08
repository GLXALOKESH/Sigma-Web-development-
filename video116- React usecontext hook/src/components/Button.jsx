import React from 'react'
import Comp from './Comp'
import { useContext } from 'react'
import { counterContext } from '../context/context'
const Button = () => {
  const value = useContext(counterContext)

  return (
    <div>
      <button onClick={() => value.setCount((value.count = value.count + 1))}><Comp />
      click here</button>
    </div>
  )
}

export default Button
