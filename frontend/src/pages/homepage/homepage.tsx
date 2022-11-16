import { Link } from 'react-router-dom'
import configBtnHome from './config_btn_home'
import BtnGenerator from '../button/buttonGenerator'

const Homepage = () => {
  return (
    <div className='card'>
      <h3 className='form__title'>Homepage</h3>
      <div className='form__group'>
        <BtnGenerator btnConfigs={configBtnHome}></BtnGenerator>
      </div>
    </div>
  )
}

export default Homepage
