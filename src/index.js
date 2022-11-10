import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import CreateParty from './CreateParty'
// import JoinParty from './JoinParty'
// import Sprints from './Sprints'
// import Stories from './Stories'
// import DailyQuestionnaire from './DailyQuestionnaire'
// import Questionnaire from './Questionnaire'
// import Accueil from './Accueil'
// import Daily from './Daily'
// import NewDaily from './NewDaily';
// import NewDaily from './NewDaily';
// import Participants from './Participants';
import ResultatQuestionnaire from './ResultatQuestionnaire'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CreateParty/> */}
    {/* <JoinParty/> */}
    {/* <Sprints/> */}
    {/* <Stories/> */}
    {/* <DailyQuestionnaire/> */}
    {/* <Questionnaire/> */}
    {/* <Accueil/> */}
    {/* <Daily/> */}
    {/* <NewDaily/> */}
    {/* <Participants/> */}
    <ResultatQuestionnaire/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
