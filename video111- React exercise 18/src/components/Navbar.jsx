import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div style={{height:"50px",width:"100%",backgroundColor:"grey" ,display:'flex',alignItems:"center" , paddingLeft:"10px"}}> 
      
        <ul style={{display:'flex',gap:"20px" ,alignItems:"center",fontFamily:"sans-serif"}}>
            <li style={{listStyle:"none", cursor:"pointer"}} >Home</li>
            <li style={{listStyle:"none", cursor:"pointer"}} >About Us</li>
            <li style={{listStyle:"none", cursor:"pointer"}} >Contact Us</li>
            <li style={{listStyle:"none", cursor:"pointer"}} >Menu</li>
        </ul>
      
    </div>
  )
}

export default Navbar
