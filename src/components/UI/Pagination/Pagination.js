import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './pagination.css';

const PaginationRounded = ({ count, onChange, page }) => {
  return (
    <div className='pagination-container'>
      <Pagination
        count={count}
        page={page}
        variant='outlined'
        shape='rounded'
        onChange={(e, value) => {
          onChange(value);
        }}
        color='secondary'
        size='large'
      />
    </div>
  );
};

export default PaginationRounded;
