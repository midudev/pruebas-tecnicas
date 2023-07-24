import { useGLTF } from "@react-three/drei";

export function Model({ props, img }: any) {
  const { nodes, materials }: any = useGLTF("/assets/models/book.gltf");
  return (
    <group {...props} dispose={null} rotation={[0.45, 0.65, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.book1.geometry}
        material={materials[img]}
        scale={267.214}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/book.gltf");
