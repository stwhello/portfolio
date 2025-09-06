import { memo } from "react";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 64, 128]} scale={2.4}>
        <MeshDistortMaterial
          color="#DB8B9B"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
      <ambientLight intensity={1.5} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
};

export default memo(Shape);
