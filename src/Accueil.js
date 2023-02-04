import './Accueil.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';

function Accueil() {
  return (

   <div>

      <center>
      <img className='logo' src="Scrumylogo.png"></img>
      <br></br>

        <Link to="/createparty">
          <Button   variant="contained">Créer une partie</Button>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/joinparty">
          <Button   variant="contained">Rejoindre une partie</Button>
        </Link>
        </center>


    </div>
  );
}

export default Accueil;