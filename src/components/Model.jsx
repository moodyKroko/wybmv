import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/model.glb')

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group>
          <mesh
            castShadow={true}
            geometry={nodes.Object_3.geometry}
            material={materials.Material_30}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model.glb')
