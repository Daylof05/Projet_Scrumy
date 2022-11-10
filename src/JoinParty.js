import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';

function JoinParty() {
    return (
      <div>
        <center>

            <br></br>

            <TextField
            required
            id="party_code"
            label="Code de la partie:"
            defaultValue=""
            />

            <br></br><br></br>

            <TextField
            required
            id="pseudo_player"
            label="Votre pseudo:"
            defaultValue=""
            />

            <br></br><br></br>

            <FormControlLabel control={<Checkbox />} label="CP" />
            <br></br>
            <FormControlLabel control={<Checkbox />} label="TEAM" />
            <br></br>
            <FormControlLabel control={<Checkbox />} label="PO" />
            <br></br>
            <FormControlLabel control={<Checkbox />} label="SM" />

            <br></br><br></br>

            <Button variant="contained">Rejoindre</Button>
        </center>
      </div>
    );
  }
  
  export default JoinParty;