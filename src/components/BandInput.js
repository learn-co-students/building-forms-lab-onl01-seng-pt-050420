import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.currentTarget.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div onSubmit={e => this.handleSubmit(e)}>
        <form>
          <label>Band Name: </label>
          <br />
          <input type="text" value={this.state.name} onChange={e => this.handleChange(e)}/>
          <br />
          <input type="submit" />
        </form>
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
