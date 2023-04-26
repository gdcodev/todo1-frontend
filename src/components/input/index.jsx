/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'antd';

const { Search, TextArea, Password } = Input;

const InputComponent = ({ type, ...restProps }) => {
  switch (type) {
    case 'search':
      return <Search {...restProps} />;
    case 'textarea':
      return <TextArea {...restProps} />;
    case 'number':
      return <Input min={0} type="number" {...restProps} />;
    case 'password':
      return <Password {...restProps} />;
    default:
      return <Input type={type} {...restProps} />;
  }
};
InputComponent.propTypes = {
  type: PropTypes.string,
};
InputComponent.defaultProps = {
  type: ''
};

export default InputComponent;
