import React, { Component } from 'react';
import { Button, Header, Segment, Label, Input, Checkbox, Select } from 'semantic-ui-react'

export default class Filtros extends Component {

    renderFields() {
        return (
            this.props.fields.map((field) => {
                switch (field.type) {
                    case 'input':
                        return (
                            <div key={field.label}>
                                <Header sub>{field.label}</Header>
                                <Input />
                            </div>
                        )
                    case 'select':
                        return (
                            <div key={field.label}>
                                <Header sub>{field.label}</Header>
                                <Select placeholder='Selecione...' options={field.options} />
                            </div>
                        )
                    case 'checkbox':
                        return (
                            <div key={field.label}>
                                <Checkbox label={field.label} />
                            </div>
                        )
                    default:
                        return (
                            <div key={field.label}>
                                <Header sub>{field.label}</Header>
                                <Input />
                            </div>
                        )
                }
            })
        )
    }

    render() {
        if (!this.props.fields) {
            return (
                <div>Carregando filtros...</div>
            )
        }

        return (
            <div>
                <Segment padded>
                    <Label attached='top'>FILTROS</Label>
                    {this.renderFields()}
                    <br />
                    <Button primary>Filtrar</Button>
                </Segment>
            </div>
        )
    }
}