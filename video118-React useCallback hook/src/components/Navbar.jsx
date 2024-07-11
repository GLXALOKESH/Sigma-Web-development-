import React from 'react'
import { memo } from 'react'

const Navbar = (props) => {
  return (
    <div>
      <button>{props.numbers}</button>
    </div>
  )
}

export default memo(Navbar)
