
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Register from './Pages/Register'
import './index.css'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Landing from './Pages/Landing'
import TrainResults from './Pages/TrainResults'
import Passengers from './Pages/Passengers'
import PaymentOk from './Pages/PaymentOk'
function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/trains' element={<TrainResults />} />
        <Route path="/passengers/:trainName" element={<Passengers />} />
        <Route path='/payment' element={<PaymentOk />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
