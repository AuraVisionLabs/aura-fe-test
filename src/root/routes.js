// @flow

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// pages
import PageSearch from '../components/pages/search';
import Page404 from '../components/pages/404';

export default () => (
    <Switch>
        <Route exact path={ROUTES.SEARCH} component={PageSearch} />
        <Route component={Page404} />
    </Switch>
);
