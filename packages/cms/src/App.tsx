import './App.css'
import ColorShower from './components/ColorShower'

function App() {

  return (
    <div className="App">
      <p className='hintNote'>
        Please click on a color to see it in the client.
      </p>
      <ColorShower />
    </div>
  )
}

export default App
