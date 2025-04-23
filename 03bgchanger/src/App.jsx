import { useState } from 'react'

import './App.css'

function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-200% h-screen duration-200" style={{backgroundColor:color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-22">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
        <button onClick={() => setcolor("red")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "red"}} >Red</button>

        <button onClick={() => setcolor("green")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "green"}} >green</button>

        <button onClick={() => setcolor("orange")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "orange"}} >orange</button>

        <button onClick={() => setcolor("maroon")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "maroon"}} >maroon</button>

        <button onClick={() => setcolor("yellow")}className='outline-none px-4 py-1 rounded-full' style={{backgroundColor: "yellow"}} >yellow</button>
        
      </div>
    </div>
     
    </div>
  )
}

export default App
