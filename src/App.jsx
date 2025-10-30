import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './user/pages/Home'
import About from './user/pages/About'
import Services from './user/pages/Services'
import Contact from './user/pages/Contact'
import Auth from './pages/Auth'
import Pnf from './pages/Pnf'
import Profile from './user/pages/Profile'
import AdminDashboard from './admin/pages/AdminDashboard'


function App() {

  return (
    <>
      <Routes>
        {/* user */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Auth/>}/>
        <Route path='/register' element={<Auth register/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/*' element={<Pnf/>}/>

        {/* admin */}
        <Route path='/admin-dashboard' element={<AdminDashboard/>}/>


      </Routes>
    </>
  )
}

export default App
