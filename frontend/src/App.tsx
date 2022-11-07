import './App.scss'
import RegisterComponent from './pages/register/register'
import LoginComponent from './pages/login/login'
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
