import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Reports from '../pages/Reports';
import Support from '../pages/Support';
import PageNotFound from '../pages/PageNotFound';

const MainSwitch = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/reports" component={Reports} />
        <Route path="/support" component={Support} />
        <Route path="*" component={PageNotFound} />
    </Switch>
)

export default MainSwitch;