import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial, Color } from "three";

export function Model(props) {
  const { nodes, materials } = useGLTF("/low-poly_living_room.glb");

  // Establece el color deseado en formato hexadecimal
  const nuevoColor = new Color("#a8a8a8");

  // Crea un nuevo material con el nuevo color
  const materialModificado = new MeshStandardMaterial({ color: nuevoColor });

  // Estado para almacenar y recuperar la escala
  const [escala, setEscala] = React.useState(() => {
    const escalaGuardada = parseFloat(localStorage.getItem("escala"));
    return isNaN(escalaGuardada) ? 1.0 : escalaGuardada;
  });

  // Efecto secundario para guardar la escala en localStorage
  useEffect(() => {
    localStorage.setItem("escala", escala.toString());
  }, [escala]);

  // Ajusta la escala del modelo
  const escalaDeseada = 0.1 * escala;

  return (
    <group {...props} dispose={null} scale={[0.050, 0.050, 0.050]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materialModificado} />
        <mesh geometry={nodes.Object_3.geometry} material={materialModificado} />
        <mesh geometry={nodes.Object_4.geometry} material={materialModificado} />
      </group>
    </group>
  );
}

useGLTF.preload("/low-poly_living_room.glb");
