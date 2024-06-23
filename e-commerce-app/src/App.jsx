import './App.css'
import Cart from './Components/Cart'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/cart' element={<Cart />}>Cart</Route>
      </Routes>
    </>
  )
}

export default App
