import {
  Environment,
  PerspectiveCamera,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Model } from "./BookModel";
const CanvasBook = ({ img }: { img: string }) => {
  return (
    <Canvas
      shadows={true}
      gl={{
        antialias: true,
        toneMappingExposure: 1,
      }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        <Environment preset="warehouse" />
        <PerspectiveCamera makeDefault position={[0, 30, 600]} />
        <PresentationControls
          global
          config={{ mass: 2, tension: 500, friction: 50 }}
          snap={{ mass: 2, tension: 1000, friction: 20 }}
          polar={[-Math.PI / 3, Math.PI / 3]}
          azimuth={[-Math.PI / 1.4, Math.PI / 2]}
        >
          {/* ↓↓ SUB-COMPONENTE DE MODELO 3D UTILIZADO EN PUBLIC/ASSETS/MODELS PARAMETRO IMG PARA ASOCIAR SU PORTADA ↓↓  */}
          <Model img={img} />
        </PresentationControls>
      </Suspense>
    </Canvas>
  );
};

export default CanvasBook;
