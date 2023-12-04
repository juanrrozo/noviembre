// BookNavigation.js
import React from 'react';
import './Cover.css'; // Importa el archivo de estilos

const BookNavigation = ({ onPrevPage, onNextPage, currentPage, totalPages }) => {
  return (
    <div className="navigation">
      <button onClick={onPrevPage} disabled={currentPage === 0}>
        Anterior
      </button>
      <span>{`Página ${currentPage + 1} de ${totalPages}`}</span>
      <button onClick={onNextPage} disabled={currentPage === totalPages - 1}>
        Siguiente
      </button>
    </div>
  );
};

export default BookNavigation;
