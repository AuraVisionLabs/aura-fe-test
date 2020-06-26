import React from 'react';
import { Router } from 'react-router-dom';

import '../styles/reset.css';

import history from './history';
import Routes from './routes';

const App = () => 
    <Router history={history}>
        <Routes />
    </Router>

export default App;
