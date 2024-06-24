import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({})
  const handelclick = () =>{ 
    alert("hery i am clicked")
  }
  const handelChange =(e) =>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  return (
    <>
     <button onClick={handelclick}> click here</button>

     <input type="text" name='username' value={form.username?form.username:" "} onChange={handelChange}/>
     <input type="text" name='email' value={form.email?form.email:" "} onChange={handelChange}/>
    </>
  )
}

export default App
