import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'
import Band from '../components/Band'

class BandsContainer extends Component {
  renderBands = () => this.props.bands.map((band, id) => <Band key={id} band={band} />)

  render() {
    return(
      <div>  
        <BandInput addBand={this.props.addBand}/>
        <br/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
