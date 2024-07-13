import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment , decrement, double ,incrementByAmount} from './redux/count/countSlice'
function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value )
  return (
    <>

      <button onClick={()=> dispatch(increment())}>+</button>
      <div>{count}</div>
      <button onClick={()=> dispatch(decrement())} >-</button>
      <button onClick={()=> dispatch(double())} >*</button>
    </>
  )
}

export default App
