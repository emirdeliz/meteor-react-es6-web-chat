import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from '../home/index.jsx';
import Login from '../login/index.jsx';
import NotFound from '../not-found/index.jsx';

export const renderRoutes = (
    <Router history={ browserHistory }>
        <Route path="/login" component={ Login }/>
        <Route path="/" component={ Home }/>
        <Route path="*" component={ NotFound }/>
    </Router>
);
