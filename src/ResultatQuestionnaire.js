import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Header from './Header';

function Questionnaire() {
  return (
    <div>
      <center>
        <Header/>
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
          id="answer"
          margin="normal"
          defaultValue="Réponse correcte"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>

        <TextField
          id="story_answer"
          margin="normal"
          defaultValue="La story progresse!"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>

        <Link to="/dailyquestionnaire">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>
    </div>
  );
}

export default Questionnaire;
