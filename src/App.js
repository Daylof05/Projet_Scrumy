import './App.css';
import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

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
        <Link to="/sprints">
          <Button variant="contained">Gérer les sprints</Button>
        </Link>
        <br></br><br></br>
        <Link to="/stories">
          <Button variant="contained">Gérer les stories</Button>
        </Link>
        <br></br><br></br>
        <Link to="/dailyquestionnaire">
          <Button variant="contained">Participer au Daily</Button>
        </Link>
        <br></br><br></br>
        <Link to="/participants">
          <Button variant="contained">Gérer les participants</Button>
        </Link>
        <br></br><br></br>
        <Link to="/daily">
          <Button variant="contained">Gérer le Daily</Button>
        </Link>
        <br></br><br></br>
        <Link to="/">
          <Button variant="contained">Quitter la partie</Button>
        </Link>
      </center>
    </div>
  );
}

export default App;
