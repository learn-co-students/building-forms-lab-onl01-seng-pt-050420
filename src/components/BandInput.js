// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: '',
  }

  handleOnChange = (event) => {
    this.state.name = event.target.value;
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name='band' onChange={this.handleOnChange} value={this.state.name}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
