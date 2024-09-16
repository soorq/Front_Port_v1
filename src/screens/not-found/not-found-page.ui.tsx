"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Object3D, Object3DEventMap } from "three";
import {
    Environment,
    Float,
    MeshTransmissionMaterial,
    Text,
    useGLTF,
} from "@react-three/drei";
import { cache, Suspense } from "react";

export const NotFoundPage = cache(() => {
    return (
        <Canvas
            camera={{ position: [0, 0, 1], zoom: 800 }}
            className="!fixed !inset-0 !w-full !h-svh"
            key="404-page-canvas"
            orthographic
            fallback
        >
            <Model />
            <directionalLight intensity={3} position={[0, 0.1, 1]} />
            <Environment preset="city" />
        </Canvas>
    );
});

export default function Model() {
    const { viewport } = useThree();
    const { nodes } = useGLTF("/scene/model.glb");

    return (
        <group scale={viewport.width / 1.5}>
            <Suspense fallback={null}>
                {nodes.Scene.children.map((mesh, i) => {
                    return <Mesh data={mesh} key={i} />;
                })}
            </Suspense>
            <group>
                <Text
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, 0, -0.1]}
                    fontSize={0.4}
                >
                    404
                </Text>
                <Text
                    color="white"
                    anchorX="center"
                    anchorY="middle"
                    position={[0, -0.02, -0.1]}
                    fontSize={0.03}
                >
                    Ничего не найдено
                </Text>
            </group>
        </group>
    );
}

const Mesh = ({ data }: { data: Object3D<Object3DEventMap> }) => {
    return (
        <Float>
            <mesh {...data}>
                <MeshTransmissionMaterial
                    color="white"
                    roughness={0}
                    transmission={0.96}
                    thickness={0.375}
                    ior={1.2}
                    chromaticAberration={0.5}
                    resolution={400}
                />
            </mesh>
        </Float>
    );
};

useGLTF.preload('/scene/model.glb')