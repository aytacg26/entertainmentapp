import React, { useState, useEffect } from 'react';
import { createDates } from '../../utils/helper';
import DropDown from '../UI/DropDown/DropDown';

const Filters = (props) => {
  const [dates, setDates] = useState([]);

  useEffect(() => {
    const datesArr = createDates(1890);

    setDates(datesArr);
  }, []);

  return (
    <div>
      <DropDown options={dates} title='Movie Year' />
      <DropDown options={dates} title='Language' />
    </div>
  );
};

export default Filters;
