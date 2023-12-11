import React, { useState } from 'react';
import './portafolio.scss';

const Portafolio = () => {
  const [mostrarPestana, setMostrarPestana] = useState(false);
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(null);

  const trabajos = [
    {
      id: 1,
      titulo: 'M3SA',
      descripcion: 'Transformación de una sala de estar moderna',
      fecha: '2023-01-15',
      imagenPrincipal: '/primero.png',
      imagenesGaleria: [
        '/diseño-int1.jpg',
        '/diseño-int2.jpg',
        '/diseño-int3.jpg',
        '/diseño-int4.jpg',
      ],
      url: 'https://www.behance.net/gallery/185900549/M3SA',
    },
    {
      id: 2,
      titulo: 'DISEÑO DE PRODUCTO',
      descripcion: 'Renovación completa de una cocina clásica',
      fecha: '2023-01-15',
      imagenPrincipal: '/diseño-de-producto.png',
      imagenesGaleria: ['/diseño-int1.jpg', '/diseño-int2.jpg', '/diseño-int3.jpg', '/diseño-int4.jpg'],
      url: ' https://www.behance.net/gallery/185896795/Diseno-de-Producto',
    },
    {
      id: 3,
      titulo: 'A’ Mano',
      descripcion: 'Renovación completa de una cocina clásica',
      fecha: '2023-01-15',
      imagenPrincipal: '/a-mano.png',
      imagenesGaleria: [],
      url: 'https://www.behance.net/gallery/185895813/A-Mano',
    },
    {
      id: 4,
      titulo: 'CENTRO COMUNITARIO',
      descripcion: 'Renovación completa de una cocina clásica',
      fecha: '2023-01-15',
      imagenPrincipal: '/centro-comunitario.png',
      imagenesGaleria: [],
      url: 'https://www.behance.net/gallery/185888107/CENTRO-COMUNITARIO',
    },
    {
      id: 5,
      titulo: 'PATAGONIA ',
      descripcion: 'PATAGONIA',
      fecha: '2023-01-15',
      imagenPrincipal: '/PATAGONIA.png',
      imagenesGaleria: [],
    },
    // Agrega más trabajos según sea necesario
  ];

  const abrirPestana = (trabajo) => {
    if (trabajo.url) {
      window.open(trabajo.url, '_blank');
    } else {
      setTrabajoSeleccionado(trabajo);
      setMostrarPestana(true);
    }
  };

  const abrirPerfilBehance = () => {
    const perfilBehanceURL = 'https://www.behance.net/sandymontenegro';
    window.open(perfilBehanceURL, '_blank');
  };

  const cerrarPestana = () => {
    setMostrarPestana(false);
  };

  const cerrarPestanaClickExterno = (event) => {
    if (event.target.classList.contains('pestana-spa')) {
      cerrarPestana();
    }
  };

  const renderTrabajos = () => {
    return trabajos.map((trabajo) => (
      <div className='portafolio-item' key={trabajo.id} onClick={() => abrirPestana(trabajo)}>
        <div className='portafolio-imagen'>
          <img src={trabajo.imagenPrincipal} alt={trabajo.titulo} />
          <h3>{trabajo.titulo}</h3>
        </div>
      </div>
    ));
  };

  const renderPestana = () => {
    if (!mostrarPestana || !trabajoSeleccionado) {
      return null;
    }

    return (
      <div className='pestana-spa' onClick={cerrarPestanaClickExterno}>
        <button className='cerrar-btn' onClick={cerrarPestana}>
          Cerrar
        </button>
        <div className='contenido-pestana'>
          <div className='detalle-izquierda'>
            <h2>{trabajoSeleccionado.titulo}</h2>
            <img
              src={trabajoSeleccionado.imagenPrincipal}
              alt={trabajoSeleccionado.titulo}
              className='imagen-principal'
            />
            <p>{trabajoSeleccionado.descripcion}</p>
            <p>{trabajoSeleccionado.fecha}</p>
          </div>
          <div className='galeria-imagenes'>
            {trabajoSeleccionado.imagenesGaleria.map((imagen, index) => (
              <img key={index} src={imagen} alt={`Galería ${index + 1}`} className='imagen-galeria' />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id='portafolio' className='portafolio-section'>
      <div className='titulo-container'>
        <h1>Mis trabajos</h1>
        <p>
          Te invito a revisar algunos de mis trabajos, y además, puedes explorar mi perfil en Behance para obtener una
          visión más completa de mi portafolio.
        </p>
        <button className='ver-libro-btn' onClick={abrirPerfilBehance}>
          Ver Perfil
        </button>
      </div>
      <div className='portafolio-container'>{renderTrabajos()}</div>
      {renderPestana()}
    </div>
  );
};

export default Portafolio;
