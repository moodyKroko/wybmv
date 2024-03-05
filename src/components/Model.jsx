import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Model({ ...props }) {
  const group = useRef()
  const posRef = useRef()
  const { nodes, materials } = useGLTF('/model.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group>
          {/* // position={[0, 0, 33.415]} */}
          <mesh
            ref={posRef}
            geometry={nodes.Object_3.geometry}
            material={materials.Material_30}
            // position={[0, 0, -33.415]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
