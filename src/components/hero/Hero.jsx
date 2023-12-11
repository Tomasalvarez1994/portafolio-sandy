import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './hero.scss';
import Navbar from '../navbar/Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei';

const Hero = () => {
  const [isParagraphVisible, setParagraphVisible] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto' },
  };

  const transition = {
    duration: 0.6,
  };

  return (
    <motion.div
      className='hero-section'
      id="hero"
      ref={ref}
      initial='hidden'
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={transition}
    >
      <Navbar />
      <div className='hero-container'>
        <div className='hero-left'>
          <h1>Sandy Montenegro</h1>
          <div className='hero-whatWeDo'>
            <img src='./line.png' alt='line' />
            <h2>Arquitecta de Interiores</h2>
          </div>
          <AnimatePresence>
            {isParagraphVisible && (
              <motion.p
                key="paragraph"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={transition}
              >
                Como estudiante del último año de la carrera de Arquitectura de Interiores en Toulouse Lautrec desde 2020, me he dedicado con pasión al diseño de espacios interiores. Mi compromiso con la mejora continua me ha llevado a buscar constantemente oportunidades de capacitación, perfeccionando mis habilidades a través de diversos softwares especializados.

                Además de mi formación académica, mi experiencia previa en atención al cliente ha fortalecido mis habilidades de comunicación, negociación y gestión del tiempo. Soy una persona responsable y proactiva, capaz de desarrollar soluciones creativas y funcionales para los desafíos del diseño de interiores.

                Mi enfoque en la escucha activa me permite comprender las necesidades y expectativas del usuario, asegurando así la creación de espacios que no solo sean estéticamente atractivos, sino también funcionales y adaptados a las necesidades específicas de cada proyecto. Estoy entusiasmado/a por contribuir con mi creatividad y habilidades técnicas al mundo del diseño de interiores.
              </motion.p>
            )}
          </AnimatePresence>
          <button 
          onClick={() => setParagraphVisible(!isParagraphVisible)}
          className="learn-more">
           
          <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
          </span>
         <span className="button-text">Leer mas</span>
          </button>
        </div>
        <div className='hero-right'>
          <img src='./iamgen-sandy.png' alt='sandy' />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
