import './App.css'
import Card from './Components/Card'
import Toggle from './Components/Toggle'
import ContextProvider from './Context/ContextProvider'

function App() {

  return (
    <div className='app'>
      <ContextProvider>
        <div>
          <Toggle />
        </div>
        <Card />
      </ContextProvider>
    </div>
  )
}

export default App
