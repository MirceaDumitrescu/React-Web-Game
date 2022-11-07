import React from 'react'
import './App.scss'
import router from './routes'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
