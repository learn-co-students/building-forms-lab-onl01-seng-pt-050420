
import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Bands from '../components/Bands'

class BandsContainer extends Component {

  render() {
    return(
      <div>
        
        <BandInput addBand={this.props.addBand}/>
        <br/>
        <Bands bands={this.props.bands}/>


      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({bands})

const mapDispatchToProps = (dispatch) => ({addBand: band => {

  return dispatch({type:'ADD_BAND', band})}
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)