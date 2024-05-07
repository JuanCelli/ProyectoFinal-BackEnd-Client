import Navigation from './components/NavbarHamburguer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Cart from './pages/Cart.jsx'
import Users from './pages/Users.jsx'



function App() {

  return (
    <>
      <BrowserRouter>
          <Navigation/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/users' element={<Users/>}/>
          </Routes>
      </BrowserRouter>

    </>
  )
}

export default App