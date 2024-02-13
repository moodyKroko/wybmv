import { Canvas, useLoader } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

function Heart() {
  const glb = useLoader(GLTFLoader, '/love_low_poly.glb')
  return <primitive object={glb.scene} scale={1} position={[0, 0, 0]} />
}

useGLTF.preload('/scene.gltf')

function HeartModel() {
  return (
    <Canvas camera={{ position: [0, 0, 180] }}>
      {/* <Canvas camera={{ position: [0, 0, 80], zoom: 0.5, near: 1, far: 1000 }}> */}
      <Suspense>
        <Heart />
        <OrbitControls reverseOrbit={true} />
        <Environment preset={'sunset'} background={false} />
      </Suspense>
      {/* <directionalLight color={'red'} position={[5, 5, 5]} /> */}
    </Canvas>
  )
}
export default HeartModel
