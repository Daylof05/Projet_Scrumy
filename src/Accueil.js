import './Accueil.css';
import Button from '@mui/material/Button';
import * as React from 'react';

function Accueil() {
  return (

   <div>

      <center>
      <img className='logo' src="Scrumylogo.png"></img>
      <br></br>

        <Button   variant="contained">Créer une partie</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button   variant="contained">Rejoindre une partie</Button>
        </center>


    </div>
  );
}

export default Accueil;