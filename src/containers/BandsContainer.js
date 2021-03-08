import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  constructor(props) {
    super(props);

  }

  addBand = (name) => {
    this.props.dispatch({ type: "ADD_BAND", name: name });
  }

  render() {
    return(
      <div>
        <BandInput addBand={this.addBand}/>
        <br />
        <ul>
          {this.props.bands.map((band) => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({bands: state.bands});

export default connect(mapStateToProps)(BandsContainer);
 