import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import ModelGLB from '../assets/model.glb'

export default function Model({ ...props }) {
  // const modelURL =
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://storage.googleapis.com/heart_model_storage/model.glb'
  //     : ''
  const group = useRef()
  const { nodes, materials } = useGLTF(ModelGLB)

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

useGLTF.preload(ModelGLB)
