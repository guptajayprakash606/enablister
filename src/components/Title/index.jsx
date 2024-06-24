import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const Title = ({ as: Tag, className, children }) => {
  return (
    <Tag className={`Title ${className}`}>{children}</Tag>
  );
};

Title.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Title.defaultProps = {
  as: 'h1',
  className: '',
};

export default Title;
