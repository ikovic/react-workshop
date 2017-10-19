import React from 'react';
import './InputField.css';

const InputField = ({ label, id, name, onChange, value }) => (
  <div className="formRow">
    <label htmlFor={id}>{label}</label>
    <input
      style={{ marginLeft: '4px' }}
      type="text"
      name={name}
      id={id}
      className="formInput"
      onChange={event => onChange(event.target.value)}
      value={value}
    />
  </div>
);

export default InputField;
