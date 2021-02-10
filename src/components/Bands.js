import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {
    render() {
        return (
            <ul>
                {this.props.bands.map(band => <Band band={band} />)}
            </ul>
        )
    }
}