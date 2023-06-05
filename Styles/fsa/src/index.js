import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './components/Body';
import Aboutme from './components/Aboutme';
import Career from './components/Career';
import data from "./components/data/card";
import Skills from './components/skills';
import Creations from './components/Creations';
import Client from './components/Client';
import Hello from './components/Hello';

const handleData = data.map(info=>{
        return(
          <Career
          yes={info.title}
          header1={info.header1}
          job1={info.job1}
          time1={info.time1}
          header2={info.header2}
          job2={info.job2}
          time2={info.time2}
          />
        )
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Body/>
    <Aboutme/>
    {handleData}
    <Skills/>
    <Creations/>
    <Client/>
    <Hello/>
  </React.StrictMode>
);

