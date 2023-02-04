import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Accueil'
import CreateParty from './CreateParty'
import JoinParty from './JoinParty'
import App from './App';
import Sprints from './Sprints'
import Stories from './Stories'
import DailyQuestionnaire from './DailyQuestionnaire'
import Questionnaire from './Questionnaire'
import Daily from './Daily'
import NewDaily from './NewDaily';
import Participants from './Participants';
import ResultatQuestionnaire from './ResultatQuestionnaire'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element = {<Accueil/>}/>
        <Route path="/createparty" element = {<CreateParty/>}/>      
        <Route path="/joinparty" element = {<JoinParty/>}/>
        <Route path="/app" element = {<App/>}/>
        <Route path="/sprints" element = {<Sprints/>}/>
        <Route path="/stories" element = {<Stories/>}/>
        <Route path="/dailyquestionnaire" element = {<DailyQuestionnaire/>}/>
        <Route path="/questionnaire" element = {<Questionnaire/>}/>
        <Route path="/resultatquestionnaire" element = {<ResultatQuestionnaire/>}/>
        <Route path="/daily" element = {<Daily/>}/>
        <Route path="/newdaily" element = {<NewDaily/>}/>
        <Route path="/participants" element = {<Participants/>}/>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
