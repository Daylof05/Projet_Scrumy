import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
<<<<<<< HEAD

function Creersprint() {
const [numSprint, setNumSprint] = useState('');
const [dateSprint, setDateSprint] = useState('');
const [dureeSprint, setDureeSprint] = useState('');
const [sprints, setSprints] = useState([]);

useEffect(() => {
const data = localStorage.getItem('sprints');
if (data) {
setSprints(JSON.parse(data));
}
}, []);

const handleSubmit = (e) => {
e.preventDefault();
setSprints([...sprints, { numSprint, dateSprint, dureeSprint }]);
localStorage.setItem('sprints', JSON.stringify([...sprints, { numSprint, dateSprint, dureeSprint }]));
setNumSprint('');
setDateSprint('');
setDureeSprint('');
};



return (
<div style={{ padding: '20px' }}>
<center>
<br />
    <TextField
    required
    id="NumSprint"
    label="Numéro du Sprint:"
    type="number"
    value={numSprint}
    onChange={(e) => setNumSprint(e.target.value)}
    />
    <br />
    <br />

    <TextField
      required
      id="DateSprint"
      label=""
      type="date"
      value={dateSprint}
      
      
      onChange={(e) => setDateSprint(e.target.value)}
    />
    <br />
    <br />

    <TextField
      required
      id="DureeSprint"
      label="Durée du sprint en semaines:"
      type="number"
      value={dureeSprint}
      onChange={(e) => setDureeSprint(e.target.value)}
    />

    <br />
    <br />
    
      <Button variant="contained" onClick={handleSubmit}>Créer Sprint</Button>
   
    <br />
    <br />
    <Link to="/sprints">
      <Button variant="contained">Voir Sprints</Button>
    </Link>
  </center>
</div>
);
=======
import './Creersprint.css';
import Header from './Header';

function Creersprint() {
  return (
    <div>
      <center>
        <Header />
        <br></br>
        <TextField 
        required
        id='NumSprint'
        label='Numéro du sprint'
        defaultValue=""/>

        <br></br><br></br>

        <TextField
        required
        id='DateSprint'
        label='Date du sprint'
        defaultValue=""/>

        <br></br><br></br>
        
        <TextField
        required
        id='DureeSprint'
        label='Durée du sprint'
        defaultValue=""/>

        <br></br><br></br>

        <Link to="/sprints">
          <Button variant="contained">Créer un sprint</Button>
        </Link>

        <br></br><br></br>

        <Link to="/app">
          <Button variant="contained">Retour</Button>
        </Link>
      </center>
    </div>    
  );
>>>>>>> origin/master2
}


export default Creersprint;