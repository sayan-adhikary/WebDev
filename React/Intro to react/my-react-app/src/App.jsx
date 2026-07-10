import './App.css'
import Navbar from './component/Navbar.jsx'
import { useState } from 'react'

function App() {
  const [text, setText] = useState("Hey My name Is Sayan")

  const btn1 = () => {
    setText('Hey I am PAPU');
  }

  const btn2 = () => {
    setText('Hey I am PAGLA');
  }

  return (
    <>
      <Navbar logoText='Sayan Adhikary' color='blue' />
      <div>{text}</div>
      <div>
        <button onClick={btn1}>Button 1</button>
        <button onClick={btn2}>Button 2</button>
      </div>
    </>
  )
}

export default App