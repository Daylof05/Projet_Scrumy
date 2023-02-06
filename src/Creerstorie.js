import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Header from './Header';

function CreerStories() {
  return (

    <div>
      <center>
        <Header />
        <br></br>
        <TextField
          required
          id="NomStorie"
          label="Nom de la storie:"
          defaultValue=""
          />

        <br></br><br></br>

        <TextField
          required
          id="NbPE"
          label="Nombre de PE:"
          defaultValue=""
          />
        <br></br><br></br>

        <br></br><br></br>
        <Link to="/stories">
          <Button variant="contained">Créer la storie</Button>
        </Link>
        <br></br><br></br>
        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>
    </div>
  );
}

export default CreerStories;