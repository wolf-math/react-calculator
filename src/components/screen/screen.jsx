import React from 'react';

import './screen.scss';

class Screen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
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
    

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              onChange={this.handleChange} />
            <button type='submit'>=</button>
          </form>
          <h1>{eval(this.state.submit)}</h1>
          {/* <h1>Your answer is</h1> */}
        </div>
      );
    }
  };
  export default Screen;