import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Login from './components/Login.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import User from './components/User.jsx'

function App() {

  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar /> <Home /> </>
    },
    {
      path:"/login",
      element:<><Navbar /> <Login /> </>
    },
    {
      path:"/about",
      element:<><Navbar /> <About /> </>
    },
    {
      path:"/user",
      element:<><Navbar /> <User /> </>
    }
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
