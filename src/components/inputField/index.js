import React from 'react';
import './inputField.css';

const InputField = ({ label, id, name, value, onChange }) => (
  <div className="formRow">
    <label htmlFor={id}>{label}</label>
    <input
      style={{ marginLeft: '4px' }}
      type="text"
      name={name}
      id={id}
      className="formInput"
      value={value}
      onChange={onChange}
    />
  </div>
);

export default InputField;