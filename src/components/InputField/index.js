import React from 'react';
import './InputField.css';

export const test = 2;

const InputField = ({label, id, name}) => {
  <div className="formRow">
          <label htmlFor={id}>Name</label>
          <input
            style={{ marginLeft: '4px' }}
            type="text"
            name={name}
            id={id}
            className="formInput"
            ref={input => (this.name = input)}
          />
        </div>
}

export default InputField;