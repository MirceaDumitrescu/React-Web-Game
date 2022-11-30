import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import userReducer from '../../features/reducers/loginStatusReducer'
import { FC } from 'react'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

type Props = {
  children: React.ReactNode
}

const DataLayerComponent: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>
}

export default DataLayerComponent
