import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Header from './Header';

function Stories() {
  return (
    <div>
      <center>
        <Header />
        <TextField
          id="party-name"
          margin="normal"
          label=""
          defaultValue="Nom de la partie"
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br>
        <TextField
          id="party-code"
          margin="normal"
          label=""
          defaultValue="Code:"
          InputProps={{
            readOnly: true,
          }}
        />
        <br></br><br></br>

        <TextField
          id="story"
          margin="normal"
          label="Story 1:"
          defaultValue="Oui"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>
        <Link to="/Creerstorie">
          <Button variant="contained">Créer une Storie</Button>
        </Link>
        <br></br><br></br>
        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>
    </div>
  );
}

export default Stories;
