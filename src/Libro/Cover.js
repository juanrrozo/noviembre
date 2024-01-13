// Cover.js
import React from "react";
import "./Cover.css";
import tuImagen from '../Libro/images/6207a57a26ab99000460a363.png'; 
const Cover = () => {
  return (
    <div className="cover">
      <div className="book">
 
        <div className="cover-inner">
          <h1>Nuevo Año</h1>
          <p>Tu novio ❤️‍🩹 </p>
          <img
            src={tuImagen}
            alt="Imagen del autor"
            className="author-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
