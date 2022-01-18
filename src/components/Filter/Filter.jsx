import React from 'react';
import IconButton from '../IconButton';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Filter = ({ value, onChange, onClick }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name:</label>
      <FilterWrapper>
        <input type="text" name="filter" value={value} onChange={onChange} />
        {value && (
          <IconButton
            color="blue"
            type="button"
            aria-label="Clear filter"
            onClick={onClick}
          >
            <FaTimes />
          </IconButton>
        )}
      </FilterWrapper>
    </>
  );
};
export default Filter;
