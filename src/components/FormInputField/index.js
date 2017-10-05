import React from 'react';
import './FormInputField.css';

const FormInputField = ({label, id, name}) => 
    <div className="formRow">
      <label htmlFor={id}>{label}</label>
        <input
          style={{ marginLeft: '4px' }}
          type="text"
          name={name}
          id={id}
          className="formInput"
          ref={input => (this.name = input)}
        />
    </div>

export default FormInputField;