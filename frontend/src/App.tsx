import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './App.scss'
import 'react-toastify/dist/ReactToastify.css'
import DataLayerComponent from './features/utils/DataLayer'

function App() {
  return (
    <div className='App'>
      <DataLayerComponent>
        <RouterProvider router={router} />
      </DataLayerComponent>
    </div>
  )
}

export default App
