import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

import Filtros from './filtros';

export default class Assets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtros: [
                { id: 1, type: 'input', label: 'Marca' },
                { id: 2, type: 'input', label: 'Modelo' },
                { id: 3, type: 'input', label: 'Número de série' },
                { id: 4, type: 'input', label: 'Fabricante' },
                { id: 5, type: 'checkbox', label: 'Apenas ativos' }
            ]
        }
    }


    renderAssets() {
        return (
            <div></div>
        )
    }

    render() {
        return (
            <div>
                <Header as='h3'>Lista de Bens</Header>
                <Filtros fields={this.state.filtros} />
                grid de bens
                <ul>
                    {this.renderAssets()}
                </ul>
            </div>
        )
    }
}