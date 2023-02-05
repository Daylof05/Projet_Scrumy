import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Creersprint.css';

function Creersprint() {
  return (
    
    <center>
    <br></br>
<textarea id='NumSprint' placeholder='Numéro du sprint'rows="3" cols="7"> 

</textarea>
<br></br><br></br>
<textarea id='DateSprint' placeholder='Date du sprint' rows="2" cols="13">
</textarea>
<br></br><br></br>
<textarea id='DureeSprint' placeholder='Durée du sprint' rows="2" cols="13">
</textarea>

        <br></br><br></br>
        <Link to="/stories">
          <Button variant="contained">Créer un sprint</Button>
        </Link>
        <br></br><br></br>
        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>

    
  );
}

export default Creersprint;
