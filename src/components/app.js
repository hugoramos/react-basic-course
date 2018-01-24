import React, { Component } from 'react';

import '../style.css';
import Ticket from './ticket';
import Asset from './asset';

export default class App extends Component {
    render() {
        return (
            <div class='titulo'>
                Bem vindo ao GoFix
                <Ticket  />
            </div>
        )
    }
}