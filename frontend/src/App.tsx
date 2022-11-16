import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './App.scss'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from './features/reducers/loginStatusReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <RouterProvider router={router} />
        <ToastContainer
          position='top-center'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme='dark'
        />
      </Provider>
    </div>
  )
}

export default App
