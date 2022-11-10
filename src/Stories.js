import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';

function Stories() {
  return (
    <div>
      <center>
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
        <Button variant="contained">Créer une Storie</Button>
        <br></br><br></br>
        <Button variant="contained">Retour</Button>
      </center>
    </div>
  );
}

export default Stories;
