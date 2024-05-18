import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

/*{
Note: 
1. All 3d object will be rendered inside a canvas
2. The useGLTF hook below loads the 3d scene to 3d object that will passed to   primitive object props.
}
 */
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <primitive scale={2.5} position-y={0} rotation-y={0} object={earth.scene} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate //this make the earth rotate at a constant speed by itself
          enableZoom={false} //prevent the zoom of the earth
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default EarthCanvas;
