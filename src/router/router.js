import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import History from '../../data/history';
import Home from '../components/AppHome';

const AppRouter = () => (
    <Router history={History}>
        <React.Fragment>
            <Switch>
                <Route path="/" component={Home} exact={true}/>
            </Switch>
        </React.Fragment>
    </Router>
)

export default AppRouter;