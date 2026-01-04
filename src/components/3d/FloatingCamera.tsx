import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

interface CameraModelProps {
  mousePosition: { x: number; y: number };
}

const CameraModel = ({ mousePosition }: CameraModelProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const lensRef = useRef<THREE.Mesh>(null);
  
  // Smooth mouse following
  const targetRotation = useRef({ x: 0, y: 0 });
  
  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Update target based on mouse
    targetRotation.current.x = mousePosition.y * 0.3;
    targetRotation.current.y = mousePosition.x * 0.4;
    
    // Smooth interpolation (heavy, deliberate motion)
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotation.current.x,
      delta * 2
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotation.current.y,
      delta * 2
    );
    
    // Subtle floating motion
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Lens glow pulse
    if (lensRef.current) {
      const material = lensRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group ref={groupRef} scale={1.2}>
        {/* Camera Body */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 1.2, 1.4]} />
          <meshStandardMaterial 
            color="#0a0a0a" 
            metalness={0.9} 
            roughness={0.2}
          />
        </mesh>
        
        {/* Camera Top Prism */}
        <mesh position={[0, 0.8, -0.1]} rotation={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.5, 0.6]} />
          <meshStandardMaterial 
            color="#111111" 
            metalness={0.8} 
            roughness={0.3}
          />
        </mesh>
        
        {/* Lens Mount */}
        <mesh position={[0, 0, 0.8]}>
          <cylinderGeometry args={[0.5, 0.55, 0.3, 32]} />
          <meshStandardMaterial 
            color="#1a1a1a" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
        
        {/* Main Lens */}
        <mesh position={[0, 0, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.45, 0.48, 0.6, 32]} />
          <meshStandardMaterial 
            color="#0d0d0d" 
            metalness={0.95} 
            roughness={0.05}
          />
        </mesh>
        
        {/* Lens Glass */}
        <mesh ref={lensRef} position={[0, 0, 1.45]} rotation={[Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.4, 32]} />
          <meshStandardMaterial 
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.5}
            metalness={0.1}
            roughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Lens Reflection Ring */}
        <mesh position={[0, 0, 1.42]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.35, 0.42, 32]} />
          <meshStandardMaterial 
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* Focus Ring */}
        <mesh position={[0, 0, 0.95]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.52, 0.04, 8, 32]} />
          <meshStandardMaterial 
            color="#333333" 
            metalness={0.8} 
            roughness={0.4}
          />
        </mesh>
        
        {/* Grip Texture Lines */}
        {[...Array(5)].map((_, i) => (
          <mesh key={i} position={[-0.92, -0.3 + i * 0.15, 0]}>
            <boxGeometry args={[0.02, 0.08, 1.2]} />
            <meshStandardMaterial color="#222222" metalness={0.5} roughness={0.5} />
          </mesh>
        ))}
        
        {/* Shutter Button */}
        <mesh position={[0.5, 0.65, 0.3]}>
          <cylinderGeometry args={[0.08, 0.08, 0.1, 16]} />
          <meshStandardMaterial 
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.4}
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
        
        {/* Mode Dial */}
        <mesh position={[-0.5, 0.65, 0.3]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 32]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.2} />
        </mesh>
        
        {/* Viewfinder */}
        <mesh position={[0, 1.1, 0]}>
          <boxGeometry args={[0.3, 0.15, 0.2]} />
          <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
    </Float>
  );
};

interface FloatingCameraProps {
  className?: string;
}

const FloatingCamera = ({ className }: FloatingCameraProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mousePosition.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * -2,
    };
  };

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMouseMove}
      style={{ width: "100%", height: "100%" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#00d4ff" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#00ffff" />
        
        <CameraModel mousePosition={mousePosition.current} />
      </Canvas>
    </div>
  );
};

export default FloatingCamera;
