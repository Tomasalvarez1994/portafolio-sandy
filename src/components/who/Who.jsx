import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from '../models/Cube';
import { useInView } from 'react-intersection-observer';
import './who.scss';

const Who = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();
  const [isParagraphVisible, setParagraphVisible] = useState(false);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const transition = {
    duration: 0.6,
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      if (isParagraphVisible) {
        controlsText.start('visible');
      }
    }
  }, [inView, controls, isParagraphVisible]);

  const controlsText = useAnimation();

  useEffect(() => {
    if (isParagraphVisible) {
      controlsText.start('visible');
    } else {
      controlsText.start('hidden');
    }
  }, [isParagraphVisible, controlsText]);

  return (
    <motion.div
      className='who-section'
      id="who"
      ref={ref}
      initial='hidden'
      animate={controls}
      variants={variants}
      transition={transition}
    >
      <div className='who-container'>
        <div className='who-left'>
          <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </div>
        <motion.div className='who-right'>
          <h1>Investigaciones</h1>
          
          <motion.p 
            variants={textVariants} 
            initial='hidden' 
            animate={controlsText}
          >
            {isParagraphVisible && (
              <>
                Aquí puedes explorar más a fondo las investigaciones que llevé a cabo en cada proyecto,
                las cuales me sirvieron de fuente de inspiración para desarrollar conceptos únicos,
                estilos distintivos y seleccionar cuidadosamente acabados y materiales en el ámbito del diseño de interiores.
              </>
            )}
          </motion.p>
          <button 
            onClick={() => setParagraphVisible(!isParagraphVisible)}
            className="learn-more"
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Leer más</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Who;
