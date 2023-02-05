import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function CreerStories() {
  return (
    
    <center>
    <br></br>
<textarea id='Nomstorie' placeholder='Nom de la storie'rows="3" cols="7"> 

</textarea>
<br></br><br></br>
<textarea id='Nbpe' placeholder='Nombre de PE' rows="2" cols="13">
</textarea>

        <br></br><br></br>
        <Link to="/stories">
          <Button variant="contained">Créer la storie</Button>
        </Link>
        <br></br><br></br>
        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>

    
  );
}

export default CreerStories;
