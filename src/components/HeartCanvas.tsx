import { Suspense } from 'react'

import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import Model from './Model.jsx'

export default function HeartCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 60, 200], fov: 60 }}
      style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2.6} castShadow={true} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls
        autoRotate={true}
        autoRotateSpeed={3}
        enableZoom={false}
        minPolarAngle={1.3}
        maxPolarAngle={0}
      />
    </Canvas>
  )
}
