/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';

const ButtonComponent = ({
  text, ...restProps
}) => (
  <Button
    {...restProps}
  >
    {text}
  </Button>
);
ButtonComponent.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
};

ButtonComponent.defaultProps = {
  text: '',
  color: 'green'
};
export default ButtonComponent;
