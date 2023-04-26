import { Radio, Space } from 'antd';
import React from 'react';
import {
  shape, func, arrayOf, string
} from 'prop-types';

const RadioGroup = ({
  onChange, value, data, direction
}) => (
  <Radio.Group onChange={onChange} value={value} data-testid="radio">
    <Space direction={direction}>
      {data.map(({ value, label }) => (
        <Radio key={value} value={value}>{label}</Radio>
      ))}
    </Space>
  </Radio.Group>
);

RadioGroup.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  data: arrayOf(shape({
    value: string,
    label: string
  })).isRequired,
  direction: string,
};

RadioGroup.defaultProps = {
  direction: 'horizontal',
};

export default RadioGroup;
