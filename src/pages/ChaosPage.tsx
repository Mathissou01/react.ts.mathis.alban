import "./Chaos.css";
import React, { Suspense, useEffect } from "react";
import Scene from "../components/Scene3d/Scene";
import Beams from "../components/Scene3d/Beams";
import Dinosaur from "../components/Scene3d/Dinosaur";
import { NodeToyTick } from "@nodetoy/react-nodetoy";
import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import {
  EffectComposer,
  Vignette,
  ChromaticAberration,
} from "@react-three/postprocessing";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";

function ChaosPage() {
  return (
    <div className="c-LandingPage__Scene">
      <Canvas>
        <Environment
          background={"only"}
          files={"../public/models/textures/envmap_blur.hdr"}
          ground={{ height: 100, radius: 300 }}
        />
        <Environment
          background={false}
          files={"../public/models/textures/envmap.hdr"}
        />
        <PerspectiveCamera
          makeDefault
          fov={33}
          position={[-0.07, 16.41, -24.1]}
        />
        <OrbitControls
          target={[0.02, 0.806, 0.427]}
          maxPolarAngle={Math.PI * 0.45}
        />
        <NodeToyTick />
        <Suspense fallback={null}>
          <Scene />
          <Dinosaur />
          <Beams />
        </Suspense>
        <EffectComposer>
          <Vignette eskil={false} offset={0.1} darkness={0.35} />
          <ChromaticAberration
            offset={[0.0035, 0.00035]}
            radialModulation={true}
            modulationOffset={0.4}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default ChaosPage;
