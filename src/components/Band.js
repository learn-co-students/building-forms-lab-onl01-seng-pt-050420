import React, { Component } from 'react'

export default class Band extends Component { 
    render() {
        
        return (
            <li>{this.props.band.name}</li>
        )
    }
} 