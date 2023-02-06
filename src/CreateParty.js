import * as React from 'react';
import randomstring from 'randomstring';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';



function CreateParty() {
  
  const handleClick = () => {
    const partyName = document.getElementById("party_name").value;
    const userName = document.getElementById("pseudo_creator").value;
    localStorage.setItem("partyName", partyName);
    localStorage.setItem("userName", userName);

    const partyCode = randomstring.generate({
      length: 10
    });
    localStorage.setItem("partyCode", partyCode);

    if (partyName === "" && userName === ""){
          alert("Veuillez entrer un nom de partie et un nom d'utilisateur")
        }
    else if (partyName === "") {
      alert("Veuillez entrer un nom de partie");
      return;
    }
    else if (userName === "") {
      alert("Veuillez entrer un nom d'utilisateur");
      return;
    }
  }

    return (
      <div>
        <center>
          <form action="" method="get" className="form" autoComplete='false'>
            <br></br>

            <TextField
            required
            id="party_name"
            label="Nom de la partie :"
            defaultValue=""
            />

            <br></br><br></br>

            <TextField
            required
            id="pseudo_creator"
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

            <Link to="/app">
              <Button id="createPartyButton" variant="contained" onClick={handleClick}>Créer</Button>
            </Link>
          </form>
        </center>
      </div>
    );
  }
  
  export default CreateParty;