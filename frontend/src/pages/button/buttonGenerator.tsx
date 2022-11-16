import '../register/register.scss'
import { Link } from 'react-router-dom'

interface BtnProps {
  btnConfigs: any
  logout?: () => void
}

const BtnGenerator = (props: BtnProps) => {
  return (
    <div className='form__group'>
      {props.btnConfigs.map((config: any) => (
        <button key={config.className} className={config.className}>
          <Link className={config.link.className} to={config.link.to}>
            {config.link.value}
          </Link>
        </button>
      ))}
    </div>
  )
}

export default BtnGenerator
