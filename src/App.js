import React from 'react';

import './App.css';
import Screen from './components/screen/screen';
import Numpad from './components/numpad/numpad';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '0'
    };
  }

  handleChange = (event) => {
    this.setState({
      // input: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      submit: this.state.input
    });
  }

  result = () => {
      try {
          return eval(this.state.submit)
      } catch(e) {
          return "ERROR"
      }
  }

  render() {
      return (
        <div>
          <Screen onChange={this.handleChange()} onSubmit={this.handleSubmit()} />
          <Numpad onChange={this.handleChange()}/>
        </div>
      );
  }
};

export default App;
