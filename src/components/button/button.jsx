import React from 'react';

import './button.scss';

const Button = (props) => {
  return (
    <div className="button">
      <h1>{props.buttonName}</h1>
    </div>
  )
};

  export default Button;