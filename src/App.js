import './App.css';
import React, { useState } from 'react';
import Cover from './Libro/Cover';
import Page from './Libro/Page';
import BookNavigation from './Libro/BookNavigation';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  
  const pages = [
    "Introducción .\n Bueno mi niña lo primero es que de ahora en adelante vas a tener un libro al mes, donde pues ya vas a ver de qué trata, pero básicamente es de nosotros prácticamente , todo lo que está en este minilibro es lo que paso este mes y lo que vivimos ",
    "Bueno amor, este fue un mes no tan bueno la verdad pero tampoco lago tan malo jajaja, pues porque fue malo tuve muchas crisis momentos en los que no me sentía bien, no me sentía yo mismo, no sentía que yo hiciera algo bueno, un mes donde la mayoría de veces fue peleas con mi papa, vainas que no tuvieron que haber pasado, cosas que me arrepiento, ´pero también fue un mes lindo por que te ayude en muchas cosas, tus parciales, ya terminaste otro semestre mas y no sabes que orgulloso estoy de ti entonces vamos cosa por cosa ",
    "Lo primero es que me pude desahogar contigo ya sabes mi pasado, mi infancia amor que lamentablemente me dejos mis vainas pero que estoy tratando de curar cierto ?, la cosa es que ya sabes de mí, ya sabes que fue lo que paso, por que mis inseguridades, la cosa por que me siento mal, porque siempre trato que todo este bien, mejor dicho ya sabes por qué a veces soy así mi niña, perdóname por todos esos malos ratos, que digo cosas que no son, las cosas que pueden llegar a herirte, sabiendo que tu eres lo mejor que me ha pasado y por que lo voy a luchar siempre ",
    "Amor, nuestros niños ya tienen un mes como la vez, somos muy buenos padres, me nació amor hacerte las cartas de cumpleaños con cada uno de nuestro niños y amo eso, ya con los que no son reales te lo juro que yo quiero que tu seas la mama de mis niños, que me levante todos los días con una familia tu ladito, no sabes cuanto deseo tener esa familia contigo, hacerte feliz a ti y que nuca olvides lo mucho que yo te amo ",
    "Bueno mira que el día que hablé  con mi mamá, me di cuenta de que  tu has sido la única niña que en verdad se enamoro de mí, a pesar de todo eres la que me conoce de verdad, la que se permitió conocer al Juan Manuel de verdad y no sabes cuanto adoro eso amor, que conozcas mi yo verdadero el que puede demostrar que te ama todos los días, el que es detallista, y el que te hace estas paginas que se te encantan mucho ",
    "Amor, se viene diciembre la verdad es un mes difícil para mí, generalmente todos lo ven como un mes de alegría, de felicidad y de unión, para mi es un mes difícil, porque mi familia ya no está, ya sabes que paso con ellos, solo soy con mi mamá y hermano, que me hacen sentir bien, me hacen feliz, pero extraño en algún momento recordar que tuve una familia, de pronto no lo haga notar pero si no es mi mejor mes, pero contigo me olvido un poquito de eso y me acuerdo que tengo una niña que me ama todos los días !",
    "Por último, Te amo mi niña eres lo mejor que me ha pasado, eres mi amor, y gracias por hacerme tan feliz, gracias por traer al Juan Manuel chiquito que no se va a cansar de amarte todos los días ❤️‍🩹",
    "las veces que te dije te amo este mes : +999.\n Besitos de buenas noches : 30 (Todos los dias ) .\n Veces que pense en ti :+999.\n TE AMO MUCHO MI NIÑA ❤️‍🩹"  ,
    "Canciones para ti ❤️‍🩹 .\n Celine Kidd Keo .\n basicamente mi cancion favorita este mes ( No puedo colocar links amor jajajaa, tons te toca buscarla :(",
    "Canciones para ti ❤️‍🩹 .\n Cosas que no te dije- saiko .\n  Pues amor que cancion pa hermosa entonces esa si te la dedico ",
    "Y ya eso es todo, espero tus comentarios y calificaciones en nuestro chat. \n TE AMO MUCHITO❤️‍🩹 ",
    "Contenido de la página 3. ¡Personaliza cada página según tu historia!",


    // ... más páginas ...
  ];

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, pages.length - 1));
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(0, prevPage - 1));
  };

  return (
    <div className="app">
      {currentPage === 0 ? (
        <Cover />
      ) : (
        <Page content={pages[currentPage - 1]} />
      )}
      <BookNavigation
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        currentPage={currentPage}
        totalPages={pages.length}
      />
    </div>
  );
};

export default App;
