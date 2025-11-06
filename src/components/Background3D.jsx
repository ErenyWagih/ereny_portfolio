import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

function SilkRibbon({ color, position, speed, scale, size }) {
  const mesh = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    mesh.current.rotation.x = Math.sin(t / 2) * 0.3;
    mesh.current.rotation.y = Math.cos(t / 3) * 0.3;
  });

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      {/* تعديل شكل العقدة (torusKnotGeometry) */}
      <torusKnotGeometry args={size} />
      <MeshWobbleMaterial color={color} factor={0.8} speed={1.5} />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        {/* إضاءة ناعمة ومتزنة */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 2, 5]} intensity={1} color="#ffffff" />

        {/* 🎀 الشرائط الثلاثة بأحجام مختلفة */}
        <SilkRibbon
  color="#e5d2f1"
  position={[0, 0, 0]}
  speed={1}
  scale={1.6}     // ↓ كانت 2
  size={[1.2, 0.15, 300, 30]}
/>
<SilkRibbon
  color="#a6e5f8"
  position={[-2, -1, -2]}
  speed={0.7}
  scale={1.4}     // ↓ كانت 1.7
  size={[1, 0.25, 250, 30]}
/>
<SilkRibbon
  color="#ffcce0"
  position={[2, 1, -3]}
  speed={0.9}
  scale={1.7}     // ↓ كانت 2.2
  size={[1.3, 0.4, 200, 30]}
/>


        {/* حركة الكاميرا مع الماوس */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
