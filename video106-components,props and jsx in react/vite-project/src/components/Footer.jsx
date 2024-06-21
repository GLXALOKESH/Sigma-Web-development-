import React from 'react'

const footer = (props) => {
  return (
    <div style={{position:'fixed',bottom:"5px",left: "2px"}}>
      Copyright By {props.name} . All rights reserved
    </div>
  )
}

export default footer
