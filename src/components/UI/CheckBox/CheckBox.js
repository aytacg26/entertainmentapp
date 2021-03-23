import React from 'react';
import './checkbox.css';
import PropTypes from 'prop-types';

const CheckBox = ({ title = '', checked = false, value, name, onChange }) => {
  return (
    <label className='checkbox-container'>
      {' '}
      {title}
      <input
        type='checkbox'
        checked={checked}
        value={value}
        name={name}
        onChange={onChange}
      />
      <span className='checkmark'></span>
    </label>
  );
};

CheckBox.propTypes = {
  title: PropTypes.string,
  checked: PropTypes.bool,
  value: PropTypes.any,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
