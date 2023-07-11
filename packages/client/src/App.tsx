import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ColorShower from './components/ColorShower'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ColorShower/>
    </div>
  )
}

export default App
