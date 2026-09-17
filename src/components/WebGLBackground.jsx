import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

/**
 * Interactive WebGL Background representing fluid digital data.
 * A dark plane that ripples subtly, reflecting cyan and neon green lights.
 */
function FluidShape() {
  const meshRef = useRef(null)
  
  // Point lights refs to animate them
  const lightCyan = useRef(null)
  const lightGreen = useRef(null)

  // Create a target position for smooth mouse interpolation
  const target = useMemo(() => new THREE.Vector2(0, 0), [])

  useFrame((state, delta) => {
    // 1. Light Animation (moving slowly across the scene)
    const time = state.clock.elapsedTime
    if (lightCyan.current) {
      lightCyan.current.position.x = Math.sin(time * 0.3) * 5
      lightCyan.current.position.y = Math.cos(time * 0.2) * 3
    }
    if (lightGreen.current) {
      lightGreen.current.position.x = Math.cos(time * 0.25) * 5
      lightGreen.current.position.y = Math.sin(time * 0.35) * 3
    }

    // 2. Mouse Displacement on Plane
    if (!meshRef.current) return

    // Smoothly interpolate the target towards the actual mouse pointer
    target.x = THREE.MathUtils.lerp(target.x, state.pointer.x, 2 * delta)
    target.y = THREE.MathUtils.lerp(target.y, state.pointer.y, 2 * delta)

    // Apply rotation based on smoothed mouse position for a parallax tilt
    meshRef.current.rotation.x = -target.y * 0.1 - 0.2 // Slightly tilted back
    meshRef.current.rotation.y = target.x * 0.1
  })

  return (
    <>
      <pointLight ref={lightCyan} color="#00C8E8" intensity={50} distance={20} position={[0, 0, 2]} />
      <pointLight ref={lightGreen} color="#D6B36A" intensity={30} distance={20} position={[0, 0, 2]} />
      <ambientLight intensity={0.1} color="#05070A" />

      {/* Large plane to cover the screen */}
      <mesh ref={meshRef} position={[0, 0, -2]} scale={15}>
        <planeGeometry args={[2, 2, 64, 64]} />
        <MeshDistortMaterial
          color="#05070A"
          roughness={0.2}
          metalness={0.8}
          distort={0.4} // subtle fluid distortion
          speed={1.2}   // slow liquid feel
        />
      </mesh>
    </>
  )
}

export default function WebGLBackground() {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
        overflow: 'hidden',
        background: '#05070A' // fallback color
      }}
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <FluidShape />
      </Canvas>
    </div>
  )
}
