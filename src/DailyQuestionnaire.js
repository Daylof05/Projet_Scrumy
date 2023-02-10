import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Header from './Header';

function DailyQuestionnaire() {
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
          id="story_day"
          margin="normal"
          label="Story du jour"
          defaultValue="Story 2"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>

        <Link to="/questionnaire">
          <Button variant="contained">Stimuler sa productivité!</Button>
        </Link>
        <br></br><br></br>
        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>
    </div>
  );
}

export default DailyQuestionnaire;
