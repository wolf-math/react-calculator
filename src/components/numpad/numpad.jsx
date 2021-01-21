import React from 'react';

import './numpad.scss';

import Button from '../button/button';

const Numpad = (props) => {
  return (
    <div className="numpad">
        <div className="operators">
            <Button buttonName="x" />
            <Button buttonName="/" />
            <Button buttonName="+" />
            <Button buttonName="-" />
        </div>
        <br></br>
        <div className="numbers">
            <Button buttonName="1" />
            <Button buttonName="2" />
            <Button buttonName="3" />
            <Button buttonName="4" />
            <Button buttonName="5" />
            <Button buttonName="6" />
            <Button buttonName="7" />
            <Button buttonName="8" />
            <Button buttonName="9" />
            <Button buttonName="0" />
            <Button buttonName="." />
            <Button buttonName="=" />
        </div>
    </div>
  )
};

  export default Numpad;