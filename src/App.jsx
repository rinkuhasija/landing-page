import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import LeftSection from './components/LeftSection'
import RightSection from './components/RightSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />

      <div className='App'>
        <LeftSection />
        <RightSection />
      </div>


    </>
  )
}

export default App
