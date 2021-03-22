import React from 'react';
import './dropdown.css';

const DropDown = ({ options, dropwidth, dropheight, dropcolor, title }) => {
  return (
    <div
      className='drop-down'
      style={{ width: dropwidth, height: dropheight, color: dropcolor }}
    >
      <label> {title}</label>

      <select>
        {options.map((option) => (
          <option value={option.value}>{option.text}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
