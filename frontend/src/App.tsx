import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './App.scss'
import 'react-toastify/dist/ReactToastify.css'
import DataLayerComponent from './features/utils/DataLayer'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div className='App'>
      <DataLayerComponent>
        <RouterProvider router={router} />
      </DataLayerComponent>
      <ToastContainer
        position='bottom-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='dark'
      />
    </div>
  )
}

export default App
