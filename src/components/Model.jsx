import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/love_low_poly.glb')
  return (
    <group
      ref={group}
      {...props}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0, 33.415]}>
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.Material_30}
            position={[0, 0, -33.415]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/love_low_poly.glb')
