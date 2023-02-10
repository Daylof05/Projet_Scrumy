import './NewDaily.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Header from './Header';

function NewDaily() {
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
        <Button variant="contained">Démarrer le Daily</Button>
        <br></br><br></br>
        <Button variant="contained">retour</Button>
        <br></br><br></br>
      </center>
    </div>
  );
}

export default NewDaily;