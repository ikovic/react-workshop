import React from 'react';
import './InputField.css';

const InputField = ({ label, id, name }) => 
  <div className="formRow">
    <label htmlFor={id}>{label}</label>
    <input
      style={{ marginLeft: '4px' }}
      type="text"
      name={name}
      id={id}
      className="formInput"
      ref={input => (this.tooltip = input)}
    />
  </div>


export default InputField;