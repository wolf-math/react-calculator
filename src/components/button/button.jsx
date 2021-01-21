import React from 'react';

import './button.scss';

const Button = (props) => {
  
  let handleClick = () => {
    console.log(props.buttonName)
  }

  return (
    <div className="button" onClick={handleClick}>
      <h1>{props.buttonName}</h1>
    </div>
  )
};

  export default Button;