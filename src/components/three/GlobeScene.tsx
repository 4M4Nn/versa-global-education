"use client"
import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere } from "@react-three/drei"
import { EffectComposer, Bloom } from "@react-three/postprocessing"
import * as THREE from "three"

function Globe() {
  const meshRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.003
    if (wireRef.current) wireRef.current.rotation.y += 0.003
  })
  return (
    <group>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial color="#1B2A4A" roughness={0.5} metalness={0.3} />
      </Sphere>
      <Sphere ref={wireRef} args={[2.02, 32, 32]}>
        <meshStandardMaterial color="#C9A84C" wireframe transparent opacity={0.15} />
      </Sphere>
      {[
        [1.5, 0.8, 1.2], [-1.0, 1.2, 1.5], [0.5, -0.5, 2.0],
        [-1.5, -0.8, 1.2], [1.8, -0.3, 0.8], [0.2, 1.8, 0.8],
      ].map((pos, i) => (
        <Sphere key={i} args={[0.08, 8, 8]} position={pos as [number, number, number]}>
          <meshStandardMaterial color="#C9A84C" emissive="#C9A84C" emissiveIntensity={1} />
        </Sphere>
      ))}
    </group>
  )
}

function Scene() {
  const { mouse } = useThree()
  const groupRef = useRef<THREE.Group>(null)
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += (mouse.y * 0.05 - groupRef.current.rotation.x) * 0.05
    }
  })
  return (
    <group ref={groupRef}>
      <Globe />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#C9A84C" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#1B2A4A" />
    </group>
  )
}

export default function GlobeScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <Scene />
      <EffectComposer>
        <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.9} height={300} intensity={0.5} />
      </EffectComposer>
    </Canvas>
  )
}
