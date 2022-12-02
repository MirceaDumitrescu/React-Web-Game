import './SpinnerComponent.scss'
import messages from './messages'
import { errorToast } from '../toasts/toasts'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const SpinnerComponent = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  const navigate = useNavigate()

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      navigate('/login')
      errorToast('Something went wrong')
    }, 10000)
    return () => {
      clearTimeout(loadingTimer)
    }
  }, [])

  return (
    <div className='loading__container'>
      <div className='loading__spinner'></div>
      <p className='loading__message'>{randomMessage}</p>
    </div>
  )
}
