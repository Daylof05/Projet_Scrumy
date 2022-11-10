import Button from '@mui/material/Button';
import * as React from 'react';
import TextField from '@mui/material/TextField';

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
        />

        <br></br><br></br>

        <Button variant="contained">Retour</Button>
      </center>
    </div>
  );
}

export default Questionnaire;
