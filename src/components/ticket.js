import React, { Component } from 'react';

export default class Ticket extends Component {

    render() {
        return (
            <li>{this.props.desc} </li>
        )
    }
}