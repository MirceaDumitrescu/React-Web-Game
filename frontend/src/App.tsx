import React from 'react'
import './App.scss'
import RegisterComponent from './pages/register/register'
import LoginComponent from './pages/login/login'

function App() {
  return (
    <div className='App'>
      <RegisterComponent></RegisterComponent>
      <LoginComponent></LoginComponent>
    </div>
  )
}

export default App
