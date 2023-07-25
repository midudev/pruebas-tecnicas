import { Html, useProgress } from "@react-three/drei";

function LoaderModel() {
  const { total, progress, loaded, active } = useProgress();
  return (
    <Html style={{ position: "relative" }} center>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "Anton",
        }}
      >
        {Math.trunc(progress)}% Cargado
      </div>
    </Html>
  );
}

export default LoaderModel;
