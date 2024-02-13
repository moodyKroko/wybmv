// import { Environment, OrbitControls } from '@react-three/drei'
// import { Canvas, useLoader } from '@react-three/fiber'
// import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import { useState } from 'react'
import Hero from './components/Hero'
// import { Suspense } from 'react'
// import { TextureLoader } from 'three'

// const Model = () => {
//   const obj = useLoader(OBJLoader, './love_heart.obj')
//   return <primitive object={obj} />
// }

function App() {
  // const colorMap = useLoader(TextureLoader, './red_texture.jpg')
  const [isClicked, setClick] = useState(false)

  const handleClick = () => {
    setClick(true)
  }

  return (
    <div
      className={` box ${
        isClicked ? 'bg-petals' : ''
      } bg-primary w-screen h-screen `}
    >
      <div className="bg-center overflow-hidden flex w-screen h-screen justify-center items-center ">
        <Hero onClickHandler={handleClick} isClicked={isClicked} />
      </div>
    </div>
  )
}

export default App
