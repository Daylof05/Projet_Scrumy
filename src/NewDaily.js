import './NewDaily.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';

function NewDaily() {
  return (
    <div>
        <img className='logo' src="Scrumylogo.png"></img>
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
        <Button variant="contained">Démarrer le Daily</Button>
        <br></br><br></br>
        <Button variant="contained">retour</Button>
        <br></br><br></br>
      </center>
    </div>
  );
}

export default NewDaily;