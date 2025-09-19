import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './component/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
   
    <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
