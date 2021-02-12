import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  renderBands = state => {
    return(
      state.map((band, index) => {
        return <li key={index}>{band.name}</li>
      })
    )
  }

  render() {
    return(
      <div>
        <BandInput />
        <br />
        Bands: 
        {this.renderBands(this.props.bands)}
      </div>
    )
  }
}

const mapStoreToProps = (state) => {
  return {
    bands: state.bands
  }
}

export default connect(mapStoreToProps)(BandsContainer)
