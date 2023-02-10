import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Sprints.css';

const useStyles = makeStyles({
root: {
minWidth: 275,
margin: '20px'
},
bullet: {
display: 'inline-block',
margin: '0 2px',
transform: 'scale(0.8)'
},
title: {
fontSize: 14
},
pos: {
marginBottom: 12
}
});

function Sprints() {
const classes = useStyles();
const [sprints, setSprints] = React.useState([]);

React.useEffect(() => {
const data = localStorage.getItem('sprints');
if (data) {
setSprints(JSON.parse(data));
}
}, []);
const handleDelete = (index) => {
  const newSprints = [...sprints];
  newSprints.splice(index, 1);
  setSprints(newSprints);
  localStorage.setItem('sprints', JSON.stringify(newSprints));
};

const [selectedSprintIndex, setSelectedSprintIndex] = React.useState(null);
const handleEdit = (index) => {
  setSelectedSprintIndex(index);
};

const handleUpdate = (property, value) => {
  const newSprints = [...sprints];
  newSprints[selectedSprintIndex][property] = value;
  setSprints(newSprints);
};

const handleSave = () => {
  localStorage.setItem('sprints', JSON.stringify(sprints));
  setSelectedSprintIndex(null);
};

const handleCancel = () => {
  setSelectedSprintIndex(null);
};

return (
  <div>
    {sprints.map((sprint, index) => (
      <Card key={index} className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Sprint #{sprint.numSprint}
          </Typography>
          {selectedSprintIndex === index ? (
            <div>
              <input
                value={sprint.dateSprint}
                onChange={(e) => handleUpdate('dateSprint', e.target.value)}
              />
              <input
                value={sprint.dureeSprint}
                onChange={(e) => handleUpdate('dureeSprint', e.target.value)}
              />
              <button onClick={handleSave}>Enregistrer</button>
              <button onClick={handleCancel}>Annuler</button>
            </div>
          ) : (
            <div>
              <Typography variant="h5" component="h2">
                Date : {sprint.dateSprint}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Durée : {sprint.dureeSprint} semaines
              </Typography>
            </div>
          )}

          <Card key={index} className={classes.root}>
            <button onClick={() => handleDelete(index)}>Supprimer</button>
            <button onClick={() => handleEdit(index)}>Modifier</button>
          </Card>
        </CardContent>
      </Card>
    ))}

    <Link to="/app">
      <button>Retour</button>
    </Link>
  </div>
);
}

export default Sprints;