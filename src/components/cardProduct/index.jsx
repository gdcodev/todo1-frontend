/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const { Meta } = Card;

const CardProduct = ({
  title, description, image, price, onClick
}) => (
  <Card
    cover={<img alt={title} src={image} width={280} height={280} />}
    onClick={onClick}
    style={{ width: 250, height: 400, margin: 10 }}
    data-testid="card"
  >
    <Meta title={title} description={`${description} - ${price}`} />
  </Card>
);
CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default CardProduct;
