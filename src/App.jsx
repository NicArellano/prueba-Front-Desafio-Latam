import { Route, Routes } from 'react-router-dom'
import './App.css'
import Foot from './components/footer/Foot'
import Navbar from './components/navbar/Navbar'
import Home from './components/views/Home'
import Carrito from './components/views/Carrito'

function App() {
  
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes>
      <Foot/>
    </>
  )
}

export default App
