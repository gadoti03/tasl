import React from 'react';
import FourDropComponentAux from '../../../Components/FourDropComponentAux/FourDropComponentAux';
import PreFooter from '../../../Components/PreFooter/PreFooter'
import Footer from '../../../Components/Footer/Footer'
import Navbar2 from '../../../Components/Navbar2/Navbar2'

const IngegneriaIndustriale = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

    const divContent = (  <div className='ProgrammaCdL'>
        <h1>Accesso ad Ulteriori Studi</h1>
        <p>Accesso a studi di Secondo ciclo nel QF-EHEA / 7° livello EQF.</p>
        
        <h3>Titolo di studio rilasciato.</h3>
        <p>
        Al termine del percorso di studi lo studente consegue il titolo di Laurea in Ingegneria Industriale. Il titolo conseguito appartiene al primo ciclo della formazione universitaria, ha valore legale, consente la qualificazione di dottore e la possibilità di effettuare l'esame di stato per l'accesso all'albo B degli ingegneri.        </p>
      </div>)

    const array1=['3 anni', '2018', 'Aperto', '180CFU', 'Italiano', 'Corsi di Laurea', 'D.M. 270/2004', 'L-9 - Classe delle lauree in Ingegneria industriale', 'No', 'Libero', 'INGEGNERIA', 'CORSO DI LAUREA ORDINARIO' ];
    const titolo='INGEGNERIA INDUSTRIALE (D.M. 270/04)';
    const array2=['Titolo di Scuola Superiore', 'Titolo straniero'];
    const array3=['CHIMICO', 'ENERGETICO', 'GESTIONALE', `VEICOLI IBRIDI ED ELETTRICI`, 'comune'];
    const pdf = '/IngegneriaIndustriale.pdf'; //messo in public
    const div = divContent;
  return (
    <>
    <div>
      <div className='ProgrammaCdL container' style={{margin: '100px auto 30px'}}>
        <h1>{titolo}</h1>
        <label> Corso di Laurea </label>
        <p>Essendo questo Course Catalogue una guida all'offerta formativa corrente dell'Ateneo le descrizioni e le caratteristiche del presente corso di studio si riferiscono sempre all' ultimo ordinamento e regolamento vigenti.</p>
      </div>
      <Navbar2/>
    </div>
    <FourDropComponentAux array1={array1} array2={array2} array3={array3} pdf={pdf} div={div}/>
    <div>
        <PreFooter/>
        <Footer/>
      </div>
    </>

  );
};

export default IngegneriaIndustriale;