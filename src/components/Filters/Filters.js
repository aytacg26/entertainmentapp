import React, { useState } from 'react';

import DropDown from '../UI/DropDown/DropDown';
import Checkbox from '../UI/CheckBox/CheckBox';
import useFilter from '../../customHooks/useFilter';
import './filters.css';

const Filters = (props) => {
  const [dates, languages, sort, points] = useFilter();
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;

    switch (name) {
      case 'date':
        console.log(e.target.value);
        break;
      case 'point':
        console.log(e.target.value);
        break;
      case 'language':
        console.log(e.target.value);
        break;
      case 'sortBy':
        console.log(e.target.value);
        break;
      case 'adult':
        setCheck(!check);
        break;
      default:
        return null;
    }
  };

  return (
    <div className='filter-options'>
      <DropDown
        options={dates}
        valueKey='value'
        textKey='text'
        title='Movie Year'
        name='date'
        onChange={handleChange}
      />
      <DropDown
        options={languages}
        valueKey='code'
        textKey='name'
        title='Language'
        name='language'
        onChange={handleChange}
      />
      <DropDown
        options={sort}
        valueKey='value'
        textKey='name'
        title='Sort By'
        name='sortBy'
        onChange={handleChange}
      />
      <DropDown
        options={points}
        valueKey='value'
        textKey='name'
        title='Point'
        name='point'
        onChange={handleChange}
      />
      <Checkbox
        title='Include Adult'
        name='adult'
        value={check}
        checked={check}
        onChange={handleChange}
      />
    </div>
  );
};

export default Filters;
