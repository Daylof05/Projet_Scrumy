import './App.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';

function App() {
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
        <Button variant="contained">Gérer les sprints</Button>
        <br></br><br></br>
        <Button variant="contained">Gérer les stories</Button>
        <br></br><br></br>
        <Button variant="contained">Participer au Daily</Button>
        <br></br><br></br>
        <Button variant="contained">Gérer les participants</Button>
        <br></br><br></br>
        <Button variant="contained">Gérer le Daily</Button>
        <br></br><br></br>
        <Button variant="contained">Quitter la partie</Button>
      </center>
    </div>
  );
}

export default App;
