// Contact.js
import React, { useRef, useState } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from '../Model';
// Import emailjs module
import emailjs from 'emailjs-com';

import "./contact.scss"; // Importa el archivo CSS


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xes1f2t",
        "template_a18w2ro",
        ref.current,
        "BiI3UjzhCsnZiwABg"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-left">
          <form ref={ref} onSubmit={handleSubmit} className="contact-form">
            <h1 className="contact-title">Contactame</h1>
            <input className="contact-input" placeholder="Name" name="name" />
            <input className="contact-input" placeholder="Email" name="email" />
            <textarea
              className="contact-textarea"
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <button className="contact-button" type="submit">
              Enviar
            </button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </form>
        </div>
        <div className="contact-right">
          <div className="contact-model">
        <Canvas camera={{fov:25, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Model/>
        </Canvas>
        </div>
        <div className="contact-info">
            <p>
              <strong>https://www.linkedin.com/in/sandymontenegro/</strong>
              <br />
              <span>
s.pilar-2403@hotmail.com
</span>
              <br />
             
              <span>Lima, Perú</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
