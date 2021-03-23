import { useState, useEffect } from 'react';
import {
  createDates,
  getLanguages,
  getSortBy,
  getPoints,
} from '../utils/helper';

const useFilter = () => {
  const [dates, setDates] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [sort, setSort] = useState([]);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const datesArr = createDates(1890);
    const langs = getLanguages();
    const sortBy = getSortBy();
    const ponitVals = getPoints();

    setDates(datesArr);
    setLanguages(langs);
    setSort(sortBy);
    setPoints(ponitVals);
  }, []);

  return [dates, languages, sort, points];
};

export default useFilter;
