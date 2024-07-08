import React from 'react'
import { useContext } from 'react'
import { counterContext } from '../context/context'
const Comp = () => {
  const count = useContext(counterContext)
  return (
    <div>
    {count.count}    
    </div>
  )
}

export default Comp
