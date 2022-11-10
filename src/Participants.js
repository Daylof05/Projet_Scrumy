import './Participants.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';

function Participants() {
  return (
    <div>
        <img className='logo' src="Scrumylogo.png"></img>
      <center>
      <h1>Participants</h1>
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
        <br></br>

        <br></br><br></br>
        <Button variant="contained">retour</Button>
        <br></br><br></br>
      </center>
    </div>
  );
}

export default Participants;