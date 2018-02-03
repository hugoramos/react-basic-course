import React, { Component } from 'react';
import { Header } from 'semantic-ui-react'

import Ticket from './ticket';
import Filtros from './filtros';
import GFTable from './gfTable';

export default class Tickets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'angelo',
            tickets: [
                { id: 1, desc: 'limpar..', acao: 'input' },
                { id: 2, desc: 'varrer', acao: 'textarea' }],
            filtros: [
                { id: 1, type: 'input', label: 'Nome' },
                { id: 2, type: 'input', label: 'Fornecedor' },
                { id: 3, type: 'textarea', label: 'Descrição' },
                {
                    id: 3, type: 'select', label: 'Status', options: [
                        { key: 1, value: 1, text: 'Todos' },
                        { key: 2, value: 2, text: 'Executados' },
                        { key: 3, value: 3, text: 'Abertos' }
                    ]
                }
            ],
            data: {
                headers: [
                    { title: '#' },
                    { title: 'Descrição' },
                ],
                rows: [
                    {
                        key: 1,
                        cells: [
                            { content: '1' },
                            { content: 'Pia quebrada' }
                        ]
                    },
                    {
                        key: 2,
                        cells: [
                            { content: '2' },
                            { content: 'Ar-condicionado pingando' }
                        ]
                    }
                ]
            }
        }
    }

    // renderTickets() {
    //     return (
    //         this.state.tickets.map((ticket) => {
    //             return (
    //                 <Table.Row>
    //                     <Table.Cell collapsing>
    //                         <Ticket
    //                             key={ticket.id}
    //                             desc={ticket.desc}
    //                             acao={ticket.acao}
    //                         />
    //                     </Table.Cell>
    //                 </Table.Row>
    //             )
    //         })
    //     )
    // }

    render() {
        return (
            <div>
                <Header as='h3'>Lista de Ticket</Header>
                <Filtros fields={this.state.filtros} />
                grid de tickets
                <GFTable data={this.state.data} />
                {/* <Table celled striped>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>
                                Tickets
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderTickets()}
                    </Table.Body>
                </Table> */}
            </div>
        )
    }
}