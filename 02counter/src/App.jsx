import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [counter,setCounter ] = useState(5);

  const addvalue = () => {
    
   setCounter(counter +1 );
   
  }
  const removevalue = () => {
    setCounter(counter - 1 );
  }
  return (
    <>
    <h1>Aman Gupta</h1>

    <h2>Counter value : {counter} </h2>

    <button onClick={addvalue}>AddValue</button>
    <br/>
    <button onClick={ removevalue }>Removevalue</button>
   </>
  )
}

export default App
