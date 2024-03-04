import { useState } from 'react'
import Hero from './components/Hero'

function App() {
  const [isClicked, setClick] = useState(false)

  const handleClick = () => {
    setClick(true)
  }

  return (
    <>
      {/* bg-gradient-to-r from-pink-600 via-pink-700 to-rose-800  */}
      <div
        className={`bg-gradient-to-r from-pink-500 via-pink-700 to-rose-800 ${
          isClicked ? 'bg-hero-pattern' : ''
        }  w-screen h-screen`}
      >
        <Hero
          onClickHandler={handleClick}
          isClicked={isClicked}
        />
      </div>
    </>
  )
}

export default App
