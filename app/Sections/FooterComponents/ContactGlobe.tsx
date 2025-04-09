// components/ContactGlobe.tsx
"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useTexture } from "@react-three/drei";
import { Suspense, useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { ErrorBoundary } from "react-error-boundary";

type OfficeLocation = {
  id: string;
  name: string;
  position: [number, number, number];
  color: string;
  details: string;
  phone: string;
  email: string;
};

const GLOBE_RADIUS = 5;

const OfficeMarker = ({
  position,
  color,
  isActive,
  onClick,
}: {
  position: [number, number, number];
  color: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  const markerRef = useRef<THREE.Mesh>(null);

  // Pulsing animation for active marker
  useFrame(({ clock }) => {
    if (markerRef.current) {
      const pulse = Math.sin(clock.getElapsedTime() * 3) * 0.1 + 1;
      markerRef.current.scale.setScalar(isActive ? pulse : 1);
    }
  });

  return (
    <mesh
      ref={markerRef}
      position={position}
      onClick={onClick}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <sphereGeometry args={[0.2, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={isActive ? color : "#000000"}
        emissiveIntensity={isActive ? 0.5 : 0}
      />
    </mesh>
  );
};

const Globe = ({
  activeLocation,
  setActiveLocation,
  locations,
}: {
  activeLocation: number;
  setActiveLocation: (index: number) => void;
  locations: OfficeLocation[];
}) => {
  const globeRef = useRef<THREE.Mesh>(null);
  const earthTexture = useTexture("/textures/earth-map.jpg");
  const bumpMap = useTexture("/textures/earth-bump.jpg");

  // Auto-rotation when not interacting
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      <mesh ref={globeRef}>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial
          map={earthTexture}
          bumpMap={bumpMap}
          bumpScale={0.5}
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>

      {locations.map((location, index) => (
        <OfficeMarker
          key={location.id}
          position={location.position}
          color={location.color}
          isActive={activeLocation === index}
          onClick={() => setActiveLocation(index)}
        />
      ))}
    </>
  );
};

const GlobeFallback = () => (
  <div className="h-[500px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">
    <p className="text-gray-500">Loading 3D globe...</p>
  </div>
);

const ErrorFallback = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.error("ContactGlobe error:", error);
  }, [error]);

  return (
    <div className="h-[500px] flex items-center justify-center bg-red-50 dark:bg-red-900/20 rounded-xl">
      <p className="text-red-600 dark:text-red-400">
        3D viewer unavailable. Please try standard contact form.
      </p>
    </div>
  );
};

export const ContactGlobe = () => {
  const [activeLocation, setActiveLocation] = useState(0);
  const controlsRef = useRef<any>(null);

  const locations: OfficeLocation[] = [
    {
      id: "san-francisco",
      name: "San Francisco HQ",
      position: [-1.5, 0.8, 0.5],
      color: "#8b5cf6",
      details: "123 Tech Street, Suite 100\nOpen 9AM-5PM PST",
      phone: "+1 (555) 123-4567",
      email: "sf@yourcompany.com",
    },
    {
      id: "new-york",
      name: "New York Office",
      position: [0.8, 0.3, -1.2],
      color: "#3b82f6",
      details: "456 Business Ave, Floor 20\nOpen 9AM-5PM EST",
      phone: "+1 (555) 987-6543",
      email: "ny@yourcompany.com",
    },
    {
      id: "london",
      name: "London Office",
      position: [0.5, -0.7, 1.8],
      color: "#ec4899",
      details: "789 Innovation Rd\nOpen 9AM-5PM GMT",
      phone: "+44 20 1234 5678",
      email: "london@yourcompany.com",
    },
  ];

  // Reset camera position when location changes
  useEffect(() => {
    if (controlsRef.current && locations[activeLocation]) {
      controlsRef.current.target.set(...locations[activeLocation].position);
    }
  }, [activeLocation, locations]);

  return (
    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<GlobeFallback />}>
          <Canvas
            camera={{ position: [0, 0, 12], fov: 45 }}
            gl={{ antialias: true }}
          >
            <Globe
              activeLocation={activeLocation}
              setActiveLocation={setActiveLocation}
              locations={locations}
            />
            <OrbitControls
              ref={controlsRef}
              enableZoom={true}
              enablePan={false}
              minDistance={8}
              maxDistance={15}
              autoRotate
              autoRotateSpeed={0.5}
            />
            <Environment preset="city" />
          </Canvas>
        </Suspense>
      </ErrorBoundary>

      {/* Location Info Panel */}
      <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-md">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {locations[activeLocation].name}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line mb-4">
          {locations[activeLocation].details}
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href={`tel:${locations[activeLocation].phone}`}
            className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            {locations[activeLocation].phone}
          </a>
          <a
            href={`mailto:${locations[activeLocation].email}`}
            className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {locations[activeLocation].email}
          </a>
        </div>
      </div>

      {/* Location Selector */}
      <div className="absolute top-6 right-6 flex flex-col gap-2">
        {locations.map((location, index) => (
          <button
            key={location.id}
            onClick={() => setActiveLocation(index)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeLocation === index
                ? "bg-purple-600 text-white shadow-md"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {location.name.split(" ")[0]}
          </button>
        ))}
      </div>
    </div>
  );
};
