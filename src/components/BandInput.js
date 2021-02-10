import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    text: ''
  }

  handleChange = event => {
    this.setState({
      text: event.currentTarget.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      text: ""
    })
  }

  render() {
    return(
      <div onSubmit={e => this.handleSubmit(e)}>
        <form>
          <label>Band Name: </label>
          <br />
          <input type="text" value={this.state.text} onChange={e => this.handleChange(e)}/>
          <br />
          <input type="submit" />
        </form>
        {/* {this.state.text} */}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (state) => { dispatch({type: "ADD_BAND", payload: state}) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandInput)
