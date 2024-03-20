import Hero from './components/Hero'
import { useState } from 'react'

function App() {
  const [isClicked, setClick] = useState(false)
  const [yes, setYes] = useState(false)

  const handleYesClick = () => {
    setYes(true)
  }

  const handleClick = () => {
    setClick(true)
  }

  return (
    <>
      <div className="bg-hero-pattern bg-hero-color w-screen h-screen">
        <div
          className={`${
            yes
              ? 'bg-[url(https://media.tenor.com/FV8Tn_aeadUAAAAi/petals.gif)]'
              : ''
          }`}
        >
          <Hero
            onClickHandler={handleClick}
            isClicked={isClicked}
            isYesClicked={handleYesClick}
          />
        </div>
      </div>
    </>
  )
}

export default App
