import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Creersprint.css';
import Header from './Header';

function Creersprint() {
  return (
    <div>
      <center>
        <Header />
        <br></br>
        <TextField 
        required
        id='NumSprint'
        label='Numéro du sprint'
        defaultValue=""/>

        <br></br><br></br>

        <TextField
        required
        id='DateSprint'
        label='Date du sprint'
        defaultValue=""/>

        <br></br><br></br>
        
        <TextField
        required
        id='DureeSprint'
        label='Durée du sprint'
        defaultValue=""/>

        <br></br><br></br>

        <Link to="/sprints">
          <Button variant="contained">Créer un sprint</Button>
        </Link>

        <br></br><br></br>

        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>
    </div>    
  );
}

export default Creersprint;
