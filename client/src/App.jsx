import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Moviedetails from './pages/Moviedetails'
import Seatlayout from './pages/Seatlayout'
import Mybooking from './pages/Mybooking'
import Movie from './pages/Movie'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'

const App = () => {
  const isAdminRoute= useLocation().pathname.startsWith('/admin')
  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Favorites' element={<Favorites/>} />
        <Route path='/Moviedetails' element={<Moviedetails/>} />
        <Route path='/SeatLayout' element={<Seatlayout/>} />
        <Route path='/SeatLayout' element={<Mybooking/>} />
        <Route path='/SeatLayout' element={<Movie/>} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  )
}

export default App