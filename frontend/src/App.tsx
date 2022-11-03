import React from 'react'
import './App.scss'
import RegisterComponent from './pages/register/register'
import LoginComponent from './pages/login/login'
import FormGenerator from './pages/formGenerator/formGeneratorRegister'

function App() {
  return (
    <div className='App'>
      {/* <RegisterComponent></RegisterComponent> */}
      <LoginComponent></LoginComponent>
      {/* <FormGenerator></FormGenerator> */}
    </div>
  )
}

export default App
