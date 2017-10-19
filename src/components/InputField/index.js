import React from 'react';
import './InputField.css';

const InputField = ({ label, id, name, onChange }) => {
  const wrappedOnChange = event => onChange(event.target.value);

  return (
    <div className="formRow">
      <label htmlFor={id}>{label}</label>
      <input
        style={{ marginLeft: '4px' }}
        type="text"
        name={name}
        id={id}
        className="formInput"
        onChange={wrappedOnChange}
      />
    </div>
  );
};

export default InputField;
