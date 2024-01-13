// Page.js
import React from 'react';
import './Cover.css'; // Importa el archivo de estilos

const Page = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div className="cover">
      <div className="book">
        <div className="cover-inner" >
          {lines.map((line, index) => (
            <p key={index} className="page-content" >
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;

