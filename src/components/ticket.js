import React, { Component } from 'react';

export default class Ticket extends Component {
    constructor(props) {
        super(props);
        this.state = { name: 'angelo' }
        this.inputOnChange = this.inputOnChange.bind(this);
    }

    inputOnChange(event) {
        console.log('on change');

        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <h1>
                Lista de Ticket
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.inputOnChange}
                />
            </h1>
        )
    }
}