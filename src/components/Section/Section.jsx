import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionStyle = styled.section`
  margin-left: auto;
  margin-right: auto;
`;

const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      <h2>{title}</h2>
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
