import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Index from "./pages/index";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Index/> } />
        </Routes>
    </div>
  )
}

export default App
