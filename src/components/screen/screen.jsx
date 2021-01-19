import React from 'react';

import './screen.scss';

import Numpad from '../numpad/numpad'

class Screen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ' '
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
    }

    result(){
        try {
            return eval(this.state.submit)
        } catch(e) {
            return "ERROR"
        }
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              onChange={this.handleChange} />
            <button type='submit'>=</button>
          </form>
          <h1>{this.result()}</h1>

          <Numpad />
        </div>
      );
    }
  };
  
  export default Screen;
