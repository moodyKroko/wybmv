import { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
// import { GLTFLoader } from 'three/examples/jsm/Addons.js'

// function Heart() {
//   // const glb = useLoader(GLTFLoader, '/love_low_poly.glb')
//   const glb = useLoader(GLTFLoader, '/love_low_poly.glb')
//   return (
//     <>
//       <primitive
//         object={glb.scene}
//         scale={1.5}
//         position={[0, -20, 0]}
//       />
//     </>
//   )
// }

function HeartCanvas() {
  return (
    <div className="">
      <Canvas
        shadows
        camera={{
          position: [0, 0, 200], //position: [0, 0, 200],
          fov: 60 //fov: 60
        }}
        style={{
          width: '100vw',
          height: '100vh'
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}></Suspense>
        <OrbitControls reverseOrbit={true} />
      </Canvas>
    </div>
  )
}
export default HeartCanvas
