import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface EyeProps {
  mousePosition: { x: number; y: number };
  isHovering: boolean;
}

const Eye = ({ mousePosition, isHovering }: EyeProps) => {
  const eyeRef = useRef<THREE.Group>(null);
  const pupilRef = useRef<THREE.Mesh>(null);
  const irisRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  
  const targetPupilPosition = useRef({ x: 0, y: 0 });
  const currentPupilPosition = useRef({ x: 0, y: 0 });
  const blinkState = useRef(1);
  const lastBlinkTime = useRef(0);
  
  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    
    // Pupil tracking with smooth interpolation
    targetPupilPosition.current.x = mousePosition.x * 0.25;
    targetPupilPosition.current.y = mousePosition.y * 0.25;
    
    currentPupilPosition.current.x = THREE.MathUtils.lerp(
      currentPupilPosition.current.x,
      targetPupilPosition.current.x,
      delta * 4
    );
    currentPupilPosition.current.y = THREE.MathUtils.lerp(
      currentPupilPosition.current.y,
      targetPupilPosition.current.y,
      delta * 4
    );
    
    if (pupilRef.current) {
      pupilRef.current.position.x = currentPupilPosition.current.x;
      pupilRef.current.position.y = currentPupilPosition.current.y;
    }
    
    if (irisRef.current) {
      irisRef.current.position.x = currentPupilPosition.current.x * 0.8;
      irisRef.current.position.y = currentPupilPosition.current.y * 0.8;
    }
    
    // Pupil dilation on hover
    if (pupilRef.current) {
      const targetScale = isHovering ? 1.3 : 1;
      pupilRef.current.scale.x = THREE.MathUtils.lerp(pupilRef.current.scale.x, targetScale, delta * 5);
      pupilRef.current.scale.y = THREE.MathUtils.lerp(pupilRef.current.scale.y, targetScale, delta * 5);
    }
    
    // Random blink
    if (time - lastBlinkTime.current > 3 + Math.random() * 4) {
      lastBlinkTime.current = time;
      blinkState.current = 0;
    }
    
    // Blink recovery
    if (blinkState.current < 1) {
      blinkState.current = Math.min(1, blinkState.current + delta * 8);
    }
    
    if (eyeRef.current) {
      eyeRef.current.scale.y = blinkState.current;
    }
    
    // Outer ring pulse
    if (outerRingRef.current) {
      const material = outerRingRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 0.3 + Math.sin(time * 2) * 0.1;
      
      // React to hover
      if (isHovering) {
        material.emissiveIntensity = 0.6;
      }
    }
    
    // Subtle rotation
    if (eyeRef.current) {
      eyeRef.current.rotation.z = Math.sin(time * 0.5) * 0.02;
    }
  });

  return (
    <group ref={eyeRef}>
      {/* Outer mechanical ring */}
      <mesh ref={outerRingRef} position={[0, 0, -0.1]}>
        <torusGeometry args={[1.1, 0.08, 16, 64]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Secondary ring */}
      <mesh position={[0, 0, -0.05]}>
        <torusGeometry args={[0.95, 0.03, 16, 64]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Eye socket / sclera */}
      <mesh position={[0, 0, 0]}>
        <circleGeometry args={[0.9, 64]} />
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.8}
        />
      </mesh>
      
      {/* Iris */}
      <mesh ref={irisRef} position={[0, 0, 0.05]}>
        <circleGeometry args={[0.5, 64]} />
        <meshStandardMaterial
          color="#003344"
          emissive="#00d4ff"
          emissiveIntensity={0.2}
          metalness={0.5}
          roughness={0.3}
        />
      </mesh>
      
      {/* Iris pattern rings */}
      {[0.45, 0.35, 0.25].map((radius, i) => (
        <mesh key={i} position={[0, 0, 0.06 + i * 0.01]}>
          <ringGeometry args={[radius - 0.02, radius, 64]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.15}
            transparent
            opacity={0.3 - i * 0.08}
          />
        </mesh>
      ))}
      
      {/* Pupil */}
      <mesh ref={pupilRef} position={[0, 0, 0.1]}>
        <circleGeometry args={[0.18, 32]} />
        <meshStandardMaterial
          color="#000000"
          metalness={0.1}
          roughness={0.9}
        />
      </mesh>
      
      {/* Pupil highlight */}
      <mesh position={[0.05, 0.05, 0.12]}>
        <circleGeometry args={[0.04, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Scanning line effect */}
      <mesh position={[0, 0, 0.08]} rotation={[0, 0, 0]}>
        <ringGeometry args={[0.1, 0.6, 64, 1, 0, Math.PI * 0.1]} />
        <meshStandardMaterial
          color="#00ffff"
          emissive="#00ffff"
          emissiveIntensity={0.4}
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Corner markers */}
      {[0, 1, 2, 3].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI) / 2 + Math.PI / 4) * 0.85,
            Math.sin((i * Math.PI) / 2 + Math.PI / 4) * 0.85,
            0.02,
          ]}
          rotation={[0, 0, (i * Math.PI) / 2]}
        >
          <boxGeometry args={[0.08, 0.02, 0.01]} />
          <meshStandardMaterial
            color="#00d4ff"
            emissive="#00d4ff"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

interface RoboticEyeProps {
  className?: string;
  size?: number;
}

const RoboticEye = ({ className, size = 200 }: RoboticEyeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      // Get position relative to viewport center for global tracking
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * -2;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.2} />
        <directionalLight position={[2, 2, 5]} intensity={0.8} />
        <pointLight position={[0, 0, 2]} intensity={0.4} color="#00d4ff" />
        
        <Eye mousePosition={mousePosition} isHovering={isHovering} />
      </Canvas>
    </div>
  );
};

export default RoboticEye;
