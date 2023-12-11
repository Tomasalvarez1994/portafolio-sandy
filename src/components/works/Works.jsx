import React, { useState } from 'react';
import "./works.scss";
import { motion } from "framer-motion";

const data = [
  {
    title: "Perfil Profesional",
    content: (
      <div>
        <p>TOULOUSE LAUTREC</p>
        <p>2020 - Actualidad / Escuela Arquitectura de Interiores</p>
        <br/>
        <p>IDIOMAS CATOLICAS</p>
        <p>2019 - Diciembre / Pontificia Universidad Católica del Perú</p>
        <br/>
        <p>Portugués - Avanzado</p>
        <p>Inglés - Intermedio</p>
      </div>
    ),
  },
 
  {
    title: "Habilidades",
    content: (
      <div>
        <p>Toulouse Lautrec</p>
        <p>2020 - ACTUALIDAD</p>
        <p>Intervención completa de diseño en espacios residenciales, comerciales y empresariales.</p>
        <br/>
        <p>Dibujo Técnico e Ilustración a mano.</p>
        <br/>
        <p>Interpretación de instalaciones eléctricas.</p>
        <br/>
        <p>Domótica: Automatización de una vivienda.</p>
        <br/>
        <p>Iluminación</p>
        <br/>
        <p>Exhibición Comercial mediante el visual merchandising y comportamiento del consumidor.</p>
        <br/>
        <p>Habilidades Blandas:</p>
        <ul>
          <li>Inteligencia Relacional</li>
          <li>Liderazgo Estratégico</li>
          <li>Comunicación Efectiva</li>
          <li>Creatividad</li>
          <li>Trabajo en Equipo</li>
        </ul>
      </div>
    ),
  },
  
  // ...

{
  title: "Software",
  content: (
    <div>
      <div className='software-info'>
        <div className='software-text'>
          <p className='p-software'>
            <strong>Diseño Gráfico:</strong>
          </p>
         
        </div>
        <div className='software-image'>
          <img src="./imagenes-software122.png" alt="Diseño Gráfico" />
        </div>
      </div>

      <div className='software-info'>
        <div className='software-text'>
          <p className='p-software'>
            <strong>Diseño Arquitectónico:</strong>
          </p>
     
        </div>
        <div className='software-image'>
          <img src="./imagenes-software12.png" alt="Diseño Arquitectónico" />
        </div>
      </div>

      <div className='software-info'>
        <div className='software-text'>
          <p className='p-software'>
            <strong>Microsoft Office:</strong>
          </p>
        </div>
        <div className='software-image'>
          <img src="./imagenes-software123.png" alt="Microsoft Office" />
        </div>
      </div>
    </div>
  ),
},

// ...


  

  {
    title: "Certificaciones",
    content: (
      
      <a href="https://certificaciones.fiis.uni.edu.pe/usuario/certificado/9f527749-dc77-40ab-96a0-095be161bb4b" target="_blank" rel="noopener noreferrer">
      <img className="img-certificaciones" src="./public/certi4.png" alt="Certificaciones" />
    </a>
     
    ),
  },
  
];

const Works = () => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div  className="works-section" id="works">
      <div className="works-container">
        <div className="works-left">
          <ul>
            {data.map((item) => (
               <li
               key={item.title}
               data-text={item.title}
               onClick={() => handleItemClick(item)}
               className={`menu-item ${selectedItem === item ? 'selected' : ''}`}
             >
               {item.title}
             </li>
            ))}
          </ul>
        </div>
        <div className="works-right">
          {selectedItem && (
            <motion.div
            key={selectedItem.title}
            className="info-box"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
              <h2>{selectedItem.title}</h2>
              <div className='contenido-info-box'>{selectedItem.content}</div>
              </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Works;