import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/createAccount/Login'
import Register from './components/createAccount/Register'
import { Dashboard } from './components/Admin/Dashboard'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/create-account' element={<Register/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  )
}

