import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

import '../style.css';

export default class App extends Component {
    render() {
        return (
            <Header as='h3'>Bem vindo ao GoFix</Header>
        )
    }
}