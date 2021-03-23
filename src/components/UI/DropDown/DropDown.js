import React from 'react';
import './dropdown.css';
import PropTypes from 'prop-types';

const DropDown = ({
  options,
  textKey,
  valueKey,
  dropwidth,
  dropheight,
  dropcolor,
  title,
  onChange,
  name,
}) => {
  return (
    <div
      className='drop-down'
      style={{ width: dropwidth, height: dropheight, color: dropcolor }}
    >
      <label> {title}</label>

      <select onChange={onChange} name={name}>
        {options.map((option, index) => (
          <option
            value={option[valueKey]}
            key={`${option[textKey]}-${option[valueKey]}-${index}`}
          >
            {option[textKey]}
          </option>
        ))}
      </select>
    </div>
  );
};

DropDown.propTypes = {
  options: PropTypes.array.isRequired,
  textKey: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired,
  dropwidth: PropTypes.number,
  dropheight: PropTypes.number,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

export default DropDown;
