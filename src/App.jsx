import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Countries from './components/Countries'

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
     
      <button onClick={() =>setShow(!show)}>Mostrar/Ocultar</button>
      {show  && < Countries />}
    </div>
  )
}

export default App
