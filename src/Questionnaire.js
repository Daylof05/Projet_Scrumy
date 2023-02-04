import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

function Questionnaire() {
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
          id="story_day"
          margin="normal"
          label="Story du jour"
          defaultValue="Story 2"
          InputProps={{
            readOnly: true,
          }}
        />

        <br></br><br></br>

        <TextField
        id="question"
        margin="normal"
        label="Question:"
        defaultValue="Question"
        InputProps={{
            readOnly: true,
        }}
        />

        <br></br><br></br>

        <TextField
          id="answer"
          margin="normal"
          label="Réponse"
          defaultValue="Réponse..."
        />

        <br></br><br></br>

        <Link to="/resultatquestionnaire">
          <Button variant="contained">Répondre</Button>
        </Link>
      </center>
    </div>
  );
}

export default Questionnaire;
