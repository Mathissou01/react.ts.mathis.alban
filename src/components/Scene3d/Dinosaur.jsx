import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Dinosaur(props) {
  const { nodes } = useGLTF("../public/models/dinosaur-transformed.glb");

  // Définir les propriétés du matériau
  const materialProps = {
    color: 0xe9d8c3, // Blanc
    opacity: 0.7, // Opacité à 0.3 (30%)
    transparent: true,
  };

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        position={[0, -5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.017}
      >
        <meshStandardMaterial {...materialProps} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        position={[0, -5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.017}
      >
        <meshStandardMaterial {...materialProps} />
      </mesh>
    </group>
  );
}

useGLTF.preload("../public/models/dinosaur-transformed.glb");
