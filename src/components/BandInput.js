
import React, { Component } from 'react' 


class BandInput extends Component {


state = {
  name: ''
};

handleOnSubmit = event => {
  event.preventDefault();
  this.props.addBand(this.state) 
  this.setState({name: ''})
}

handleOnChange = event => {
  this.setState({
    name: event.target.value
  })
}


  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Band Input </label>
            <input type="text"  name="text" onChange={this.handleOnChange} />
            <input type="submit" />
        </form>
      </div>
    );
  }
}; 


export default BandInput