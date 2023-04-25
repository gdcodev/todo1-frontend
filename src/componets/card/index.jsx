/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const CardComponent = ({ children, ...restProps }) => (
  <Card {...restProps}>
    {children}
  </Card>
);
CardComponent.propTypes = {
  children: PropTypes.node.isRequired
};
export default CardComponent;
