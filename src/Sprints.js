import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';

function Sprints() {
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
          id="sprint"
          margin="normal"
          label="Sprint 1:"
          defaultValue="Oui"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>
        <Button variant="contained">Créer un sprint</Button>
        <br></br><br></br>
        <Button variant="contained">Retour</Button>
      </center>
    </div>
  );
}

export default Sprints;
