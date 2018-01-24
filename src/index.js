import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';

import App from './components/app';
import Asset from './components/asset';
import Ticket from './components/ticket';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <ul>
                <li><Link to='/'>home</Link></li>
                <li><Link to='/ticket'>tickets</Link></li>
                <li><Link to='/asset'>bens</Link></li>
            </ul>
            <Switch>
                <Route path='/ticket' component={Ticket} />
                <Route path='/asset' component={Asset} />
                <Route path='/' component={App} />
            </Switch>
        </div>
    </BrowserRouter>
    , document.getElementById('root')
);
