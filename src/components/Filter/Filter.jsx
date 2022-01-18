import React from 'react';
import IconButton from '../IconButton';
import { FaTimes } from 'react-icons/fa';

const Filter = ({ value, onChange, onClick }) => {
  return (
    <div>
      <label htmlFor="filter">Find contact by name:</label>
      <div>
        <input type="text" name="filter" value={value} onChange={onChange} />
        <IconButton
          color="blue"
          type="button"
          aria-label="Clear filter"
          onClick={onClick}
        >
          <FaTimes />
        </IconButton>
      </div>
    </div>
  );
};
export default Filter;
