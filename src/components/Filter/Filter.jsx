import React from 'react';
import { Formik, Form, Field } from 'formik';

const Filter = ({ value, onChange, onClick }) => {
  return (
    <div>
      <label htmlFor="filter">Find contact by name:</label>
      <div>
        <input type="text" name="filter" value={value} onChange={onChange} />
        <button type="button" aria-label="Clear filter" onClick={onClick}>
          x
        </button>
      </div>
    </div>
  );
};
export default Filter;
