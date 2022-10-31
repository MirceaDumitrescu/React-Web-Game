import ReactDOM from 'react-dom'
import App from './App'

describe('App renders correctly', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
})
