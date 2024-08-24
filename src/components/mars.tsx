"use client"

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function MarsModel() {
  const { scene } = useGLTF('/models/scene.gltf');
  return <primitive object={scene} dispose={null} />;
}

function Loading() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="gray" />
    </mesh>
  );
}

const Mars: React.FC = () => {
  return (
    <Canvas
      style={{ background: 'transparent', width: '100vw', height: '100vh' }}
      camera={{ position: [0, 0, -45], fov: 40 }}
    >
      <Suspense fallback={<Loading />}>
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[20, 10, -10]}
          intensity={1}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <MarsModel />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.7}
          rotateSpeed={1}
        />
      </Suspense>
    </Canvas>
  );
};

export default Mars;
