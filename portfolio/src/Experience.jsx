import {
  Text,
  Html,
  ContactShadows,
  PresentationControls,
  Environment,
  useGLTF,
} from "@react-three/drei"
import { Suspense } from "react"

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  )

  return (
    <Suspense fallback={null}>
      <color args={["#241a1a"]} attach="background" />

      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#D0D3D4"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />

        <primitive
          object={computer.scene}
          position-y={-1.2}
          // rotation-x={ 0.13 }
        >
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[0, 1.56, -1.4]}
            rotation-x={-0.256}
          >
            <iframe src="https://portfolio-123456789.netlify.app/" />
          </Html>
        </primitive>

        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={0.8}
          position={[2, 0.45, 0.15]}
          rotation-y={-1.25}
          maxWidth={2}
          textAlign="center"
        >
          ABDUL RAHAMAN
        </Text>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </Suspense>
  )
}
