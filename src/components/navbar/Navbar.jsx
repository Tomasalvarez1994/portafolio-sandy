// Navbar.jsx
import React, { useState, useEffect } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [currentSection, setCurrentSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define las posiciones de inicio y fin de cada sección en tu página
      const heroSection = document.getElementById("hero").offsetTop;
      const whoSection = document.getElementById("who").offsetTop;
      const worksSection = document.getElementById("works").offsetTop;
      const portfolioSection = document.getElementById("portafolio").offsetTop;
      const contactSection = document.getElementById("contact").offsetTop;

      // Determina la sección actual en función de la posición de desplazamiento
      if (scrollPosition < whoSection) {
        setCurrentSection("hero");
      } else if (scrollPosition < worksSection) {
        setCurrentSection("who");
      } else if (scrollPosition < portfolioSection) {
        setCurrentSection("works");
      } else if (scrollPosition < contactSection) {
        setCurrentSection("portafolio");
      } else {
        setCurrentSection("contact");
      }
    };

    // Agrega el evento de escucha al desplazamiento
    window.addEventListener("scroll", handleScroll);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // El segundo argumento del useEffect es un array vacío para ejecutar el efecto solo una vez al montar el componente

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSection(sectionId);
    }
  };

  return (
    <div className="section-navbar">
      <div className="container-navbar">
        <div className="links-navbar">
          <img src="./logo-1.png" alt="Logo" />
          <ul>
            <li className={currentSection === "hero" ? "active" : ""}>
              <button onClick={() => scrollToSection("hero")}>Sobre mi</button>
            </li>

            <li className={currentSection === "works" ? "active" : ""}>
              <button onClick={() => scrollToSection("works")}>Habilidades</button>
            </li>
            <li className={currentSection === "portafolio" ? "active" : ""}>
              <button onClick={() => scrollToSection("portafolio")}>Portafolio</button>
            </li>
           
           
           {/* <li className={currentSection === "who" ? "active" : ""}>
              <button onClick={() => scrollToSection("who")}>Trayectoria</button>
            </li>*/}
            
            <li className={currentSection === "contact" ? "active" : ""}>
              <button onClick={() => scrollToSection("contact")}>Contacto</button>
            </li>
          </ul>
        </div>
        <div className="icons-navbar">
          <button>Curriculum </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
