import { Suspense, useEffect, useState } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Model from './Model.jsx'
import Spinner from './Spinner.tsx'

export default function HeartCanvas() {
  const [speed, setSpeed] = useState(100)

  // gradually slowdown the rotation of model after loading
  const rotateSpeeds = [305, 505, 305, 155, 55, 5]
  const delayTimes = [1, 2, 3, 4, 5, 6]
  useEffect(() => {

    for (let i = rotateSpeeds.length - 1; i >= 0; i--) {
      setTimeout(() => {
        setSpeed(rotateSpeeds[i])
      }, 110 * delayTimes[i])
    }
  }, [])

  return (
    <Canvas
      camera={{ position: [0, 60, 200], fov: 60 }}
    >
      <ambientLight color={0x404040} intensity={1.25} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={3.6} castShadow={true} />
      <Suspense fallback={<Spinner />}>
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={speed}
        enableZoom={false}
        minPolarAngle={1.3}
        maxPolarAngle={0}
      />
    </Canvas>
  )
}
