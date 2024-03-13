import "./style.css"
import ReactDOM from "react-dom/client"
import Experience from "./Experience.jsx"
import { Suspense } from "react"
import { Loader } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

const root = ReactDOM.createRoot(document.querySelector("#root"))

root.render(
  <>
    <Suspense fallback={<Loader />}>
      <Canvas
        className="r3f"
        camera={{
          zoom: 1.1,
          fov: 45,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
      >
        <Experience />
      </Canvas>
    </Suspense>
  </>
)
