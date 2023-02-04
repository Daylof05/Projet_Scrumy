import './Daily.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Daily() {
  return (
    <div>
        <br></br>
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
        <h1>Ont parlé :</h1>
        <TextField
          id="player1"
          margin="normal"
          label=""
          defaultValue="Player 1"
          InputProps={{
            readOnly: true,
          }}

        />
        <br></br>
        <TextField
          id="player2"
          margin="normal"
          label=""
          defaultValue="Player 2"
          InputProps={{
            readOnly: true,
          }}

        />
        <TextField
          id="player3"
          margin="normal"
          label=""
          defaultValue="Player 3"
          InputProps={{
            readOnly: true,
          }}

        />
        <br></br><br></br>
        <Link to="/daily">
          <Button variant="contained">Clotûrer le Daily</Button>
        </Link>
        <br></br><br></br>
        <Link to="/app">
          <Button variant="contained">retour</Button>
        </Link>
        <br></br><br></br>
      </center>
    </div>
  );
}

export default Daily;