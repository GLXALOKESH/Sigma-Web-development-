import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [flag,setFlag] = useState(true)
  const [todo , setTodo] = useState([
    {
      title : "hey 1",
      desc : "this is description 1"
    },
    {
      title : "hey 2",
      desc : "this is description 2"
    },
    {
      title : "hey 3",
      desc : "this is description 3"
    },
    {
      title : "hey 4",
      desc : "this is description 4"
    }
  ])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      {/* {flag?<button>its true</button>:" "} */}
      {flag && <button>its true</button>}
      <h1>Vite + React</h1>
      {
        todo.map((todo) =>{
          return(
            <div className='todo cont' key={todo.title}>
            <div className='text'>{todo.title}</div>
            <div className='text'>{todo.desc}</div>
          </div>
          )
        })
      }

      <div className="card">
        <button onClick={() => {setCount((count) => count + 1); setFlag((flag) => (!flag))}}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
