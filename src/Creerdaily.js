import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Creersprint.css';

function Creersprint() {
  return (
    
    <center>
    <br></br>

        <br></br><br></br>
        <Link to="/daily">
          <Button variant="contained">Créer un daily</Button>
        </Link>
        <br></br><br></br>
        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
        <br></br>

        
      </center>
      

    
  );
}

export default Creersprint;
