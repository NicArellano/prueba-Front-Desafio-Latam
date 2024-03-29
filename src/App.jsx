import { Route, Routes } from 'react-router-dom'
import './App.css'
import Foot from './components/footer/Foot'
import Navbar from './components/navbar/Navbar'
import Home from './components/views/Home'
import Carrito from './components/views/Carrito'
import Pizza from './components/views/Pizza'

function App() {
  
  return (
    <>
      
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/pizza/:id' element={ <Pizza />} />
      </Routes>
      <Foot/>
    </>
  )
}

export default App
