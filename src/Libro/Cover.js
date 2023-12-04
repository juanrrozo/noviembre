// Cover.js
import React from "react";
import "./Cover.css";
import tuImagen from '../Libro/images/Imagen de WhatsApp 2023-12-04 a las 15.29.45_d168f3bd.jpg'; 
const Cover = () => {
  return (
    <div className="cover">
      <div className="book">
 
        <div className="cover-inner">
          <h1>Noviembre</h1>
          <p>Autor: Tu rolito ❤️‍🩹 </p>
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
