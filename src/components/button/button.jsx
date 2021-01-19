import React from 'react';

import './button.scss';

const Button = (props) => {
  
  let clickValue = () => {
    this.setState({
      input: props.buttonName
    });
  }

  return (
    <div className="button" onClick={clickValue}>
      <h1>{props.buttonName}</h1>
    </div>
  )
};

  export default Button;