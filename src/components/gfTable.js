import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'

export default class GFTable extends Component {

    renderHeader() {
        return (
            this.props.data.headers.map((header) => {
                return (
                    <Table.HeaderCell key={header.title}>
                        {header.title}
                    </Table.HeaderCell>
                )
            })
        )
    }

    renderRows() {
        return (
            this.props.data.rows.map((row) => {
                return (
                    <Table.Row key={row.key}>
                        {this.renderCells(row)}
                    </Table.Row>
                )
            })
        )
    }

    renderCells(row) {
        return (
            row.cells.map((cell) => {
                return (
                    <Table.Cell collapsing>
                        {cell.content}
                    </Table.Cell>
                )
            })
        )
    }

    render() {
        return (
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        {this.renderHeader()}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.renderRows()}
                </Table.Body>
            </Table>
        )
    }
}