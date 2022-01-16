import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type,
  title = '',
  onClick = () => null,
  children = null,
}) => {
  return (
    <button type={type} onClick={onClick}>
      {title}
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Button;
