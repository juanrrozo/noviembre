import './App.css';
import React, { useState } from 'react';
import Cover from './Libro/Cover';
import Page from './Libro/Page';
import BookNavigation from './Libro/BookNavigation';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  
  const pages = [
    "Introducción .\n Bueno amor como de ahora en adelante este es tu libro del mes, pues como un resumen de lo que fue diciembre y es que fue un mes muy bueno para los dos mi amor entonces pues empecemos\n  \n  \n \n Pero antes de empezar, Te amo muchooooooooooooooooooooooooooooooooooooooooooooooooooooooo ❤️‍🩹 ",
    "Bueno amor los primeros días del mes la verdad estaba con una pequeña bueno no tan pequeña duda que básicamente es que no sabía si pedirte que, si podía ser tu novio o no, ósea lit amor estaba con una duda, ¿será que si es bueno pedirlo así?  ¿Será que sí? dios mío te lo juro que yo no dejaba de pensar en eso si era buena idea o no, y cuando por fin me decidí dije y ahora como lo hago ",
    "Amor los primeros días te lo juro que yo solo tenía algo en la mente y era que, si éramos novios o no entonces pues, dije, ¿pero ¿cómo se lo pido? ¿Será que un mensaje? ¿Queda muy feo será que una llamada? No me gustaba la ides, tons dije voy a expresarle todo lo que siento, todo lo que ella me hace sentir y se lo pido también en un audio, ¿y amor lo empezó a hacer y para el 10 de diciembre ya tenía todo y yo aaahh será que si lo hago? Amor los nervios me ganaban hartísimo, demasiado no sabía en qué momento hacerlo o en qué momento pedírtelo hasta que el 13 de diciembre me decidí y fue la mejor decisión que tomé ",
    "Y preciso cuando lo pido se me va el internet, dios santo yo me quería morir se me movían las tripas, me sentía nervioso, no sabía tu reacción, ¿será que si le gusto? ¿Será que fue muy ridículo de mi parte? Pero al final de todo me dijiste que SI y dios mío fui tan feliz que solo decía dios mío yo te amo como a nadie mi amor, y desde ese día soy más feliz aun ",
    "Desde ese día amor trato de ser mi mejor versión para ti, que te sientas amada que sepas que todo lo que yo siento por ti es verdad, que solo te amo a ti, que eres la única persona que me hace feliz, que eres lo mejor que tengo mi amor, y sobre todo que me haces sentir como el niño mas feliz de este mundo, entonces amor te quiero dar gracias por todo eso, por hacerme tan feliz, por sacar mi mejor versión y por estar para mí siempre no sabes cuanto agradezco que hayas llegado a mi vida y sobre todo lo mucho que te amo mi amor ",
    "Después de ser feliz unos días, lamentablemente llego el día que mi papa decidió tratarme como lo peor de este mundo, me trato mal, me humillo y me peleo por vainas que nunca pensé creo que ese día fue mi peor día en muchos años, pero tu amor estuviste para mí, hasta mi mamá que es lo que mas amo en esta vida, se acordó de ti, para que estuvieras conmigo y no me sintiera mal, es que imagínate ya hasta mi mamá sabe lo feliz que me haces y que me siento bien contigo, gracias por eso amor",
    "Ya para navidad y año nuevo me hiciste sentir tan bien amor, que en ningún momento me acorde que esta era mi primera navidad sin mi papa, y sin ni siquiera un mensaje de él, pero adivina tu estuviste ahí y me hiciste sentir muy feliz, no dejaste que me hundiera en esos pensamientos, y estuviste para mi",
    "Amor este en un nuevo año en el que solo quiero estar contigo, hacerte feliz y que tu me digas haciendo el niño más feliz del mundo, como te dije ese día en el mensaje eres lo mejor que tengo y lo que quiero que siga en mi vida mucho tiempo \n \n \n \n  TE AMO MI NIÑA❤️‍🩹 ",
    "Ya para acabar te voy a enviar esto cuando cumplimos nuestro primer mes de novios, y para ti solo tengo palabras de agradecimiento, gracias por hacerme tan feliz este mes, por estar conmigo, por siempre escucharme, por amarme tanto como yo te amo, gracias, mi amor, gracias por ser mi noviecita preciosa, hermosa y que adoro con todo mi corazón. primer mes de muchos amor. \n \n \n \n  TE AMO AMOR DE MI VIDA❤️‍🩹 ",
    "Contenido de la página 3. ¡Personaliza cada página según tu historia!",

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
