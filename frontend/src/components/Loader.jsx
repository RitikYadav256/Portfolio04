import React from "react";
import { Html, useProgress } from "@react-three/drei";
const Loader = () => {
  const { progress } = useProgress();
  return (
    <>
      <Html>
        <span></span>
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 900,
            marginTop: 50,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </Html>
    </>
  );
};

export default Loader;
