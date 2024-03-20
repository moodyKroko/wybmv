import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  const [isClicked, setClick] = useState(false)

  const handleClick = () => {
    setClick(true)
  }

  return (
    <>
      <div className="bg-hero-pattern bg-hero-color w-screen h-screen">
        <Hero onClickHandler={handleClick} isClicked={isClicked} />
      </div>
    </>
  )
}

export default App
