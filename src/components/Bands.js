import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component {
    render() {
        
        return (
         <div>
             <ul>
             {this.props.bands.map((band, index) => <Band band={band} key={index} />)}
             </ul>
         </div>
           
        )
    }
} 