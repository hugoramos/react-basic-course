import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'

import App from './components/app';
import Assets from './components/assets';
import Tickets from './components/tickets';

ReactDOM.render(
    <BrowserRouter>
        <Sidebar.Pushable as={Segment} style={{ minHeight: 600 }}>
            <Sidebar as={Menu} animation='push' width='thin' visible={true} icon='labeled' vertical inverted>
                <Link to='/'>
                    <Menu.Item name='home'>
                        <Icon name='home' />
                        Home
                        </Menu.Item>
                </Link>
                <Link to='/tickets'>
                    <Menu.Item name='setting'>
                        <Icon name='setting' />
                        Tickets
                        </Menu.Item>
                </Link>
                <Link to='/assets'>
                    <Menu.Item name='camera'>
                        <Icon name='tags' />
                        Bens
                        </Menu.Item>
                </Link>
            </Sidebar>
            <Sidebar.Pusher>
                <Segment basic>
                    <Switch>
                        <Route path='/tickets' component={Tickets} />
                        <Route path='/assets' component={Assets} />
                        <Route path='/' component={App} />
                    </Switch>

                </Segment>
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    </BrowserRouter >
    , document.getElementById('root')
);
