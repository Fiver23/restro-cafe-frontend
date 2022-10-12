import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../src/containers/Home';
import Reviews from './components/Popups/Reviews';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
            </Switch>
        </>
    );
};
export default Router;
