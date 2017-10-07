import React from 'react';
import './FormInputField.css';

const FormInputField = ({label, id, name, onChange}) => 
    <div className="formRow">
      <label htmlFor={id}>{label}</label>
        <input
          style={{ marginLeft: '4px' }}
          type="text"
          name={name}
          id={id}
          className="formInput"
          onChange = {onChange}
          ref={input => (this.name = input)}
        />
    </div>

export default FormInputField;