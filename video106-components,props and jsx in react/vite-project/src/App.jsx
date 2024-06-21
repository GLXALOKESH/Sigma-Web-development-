import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className="cardcont" style={{display:'flex',flexWrap: 'wrap', width:"100%"}}>
    <Card title="This is Title 1" desc ="This is a sample description 1"/>
    <Card title="This is Title 2" desc ="This is a sample description 2"/>
    <Card title="This is Title 3" desc ="This is a sample description 3"/>
    <Card title="This is Title 4" desc ="This is a sample description 4"/>
    <Card title="This is Title 5" desc ="This is a sample description 5"/>
    <Card title="This is Title 6" desc ="This is a sample description 6"/>
    <Card title="This is Title 7" desc ="This is a sample description 7"/>
    <Card title="This is Title 8" desc ="This is a sample description 8"/>
    <Card title="This is Title 9" desc ="This is a sample description 9"/>
    <Card title="This is Title 10" desc ="This is a sample description 10"/>
    </div>
    
    <Footer name="Alokesh" />
    </>
  )
}

export default App
