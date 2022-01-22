import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: ${({ theme: { spacing } }) => spacing(1)};
  padding-bottom: ${({ theme: { spacing } }) => spacing(1)};
`;

const Input = styled.input`
  padding: ${({ theme: { spacing } }) => spacing(1)};
  &:focus,
  &:hover {
    outline-color: ${({ theme: { colors } }) => colors.blue};
  }
`;

const Filter = ({ value, onChange, onClick }) => {
  return (
    <>
      <label htmlFor="filter">Find contact by name:</label>
      <FilterWrapper>
        <Input type="text" name="filter" value={value} onChange={onChange} />
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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Filter;
