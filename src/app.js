import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/router';
import {setGlobal} from 'reactn';

setGlobal({
    applicatie: 'React Hooks',
    vibe: 'NEUTRAAL'
})

const app = (
    <AppRouter/>
);

ReactDOM.render(app, document.getElementById('root'));