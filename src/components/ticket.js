import React, { Component } from 'react';

export default class Ticket extends Component {

    render() {
        return (
            <div>
                {this.props.desc}
            </div>
        )
    }
}