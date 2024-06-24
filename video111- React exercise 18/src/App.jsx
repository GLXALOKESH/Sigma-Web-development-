import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        setData(json)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div className="cont">
      {data ? (
        data.map((data) => (
          <div className="card" key={data.id}>
            <div className="userid">{data.userId}</div>
            <div className="title">{data.title}</div>
            <div className="bodyjson">{data.body}</div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </>
  )
}

export default App
