import React from 'react';
import './inputField.css';

const InputField = ({ label, id, name, bindRef }) => (
  <div className="formRow">
    <label htmlFor={id}>{label}</label>
    <input
      style={{ marginLeft: '4px' }}
      type="text"
      name={name}
      id={id}
      className="formInput"
      ref={bindRef}
    />
  </div>
);

export default InputField;