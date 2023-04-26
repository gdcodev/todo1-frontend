import { InputNumber } from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

const InputNumberComponent = ({
  value, min, max, onChange
}) => (
  <InputNumber min={min} max={max} value={value} onChange={onChange} />
);

export default InputNumberComponent;

InputNumberComponent.propTypes = {
  value: PropTypes.string.isRequired,
  min: PropTypes.string.isRequired,
  max: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
