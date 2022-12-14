import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './App.scss'
import 'react-toastify/dist/ReactToastify.css'
import DataLayerComponent from './features/utils/DataLayer'
import { ToastContainer } from 'react-toastify'
import FooterComponent from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import NavItem from './components/navbar/navbarItem/navbarItem'
import DropdownMenu from './components/navbar/navbarDropdown/navbarDropdown'
import { ReactComponent as NavIcon } from './assets/nav_icon.svg'

function App() {
  return (
    <div className='App'>
      <DataLayerComponent>
        <Navbar>
          <NavItem icon={<NavIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
        <RouterProvider router={router} />
        <FooterComponent />
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
