import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CardProduct from './index';

describe('CardProduct', () => {
  const mockOnClick = jest.fn();
  const mockProduct = {
    title: 'Product Title',
    description: 'Product Description',
    image: 'https://example.com/image.png',
    price: 9.99
  };

  test('renders product information correctly', () => {
    const { getByText, getByAltText } = render(
      <CardProduct
        title={mockProduct.title}
        description={mockProduct.description}
        image={mockProduct.image}
        price={mockProduct.price}
        onClick={mockOnClick}
      />
    );

    const productTitle = getByText(mockProduct.title);
    const productDescription = getByText(`${mockProduct.description} - ${mockProduct.price}`);
    const productImage = getByAltText(mockProduct.title);

    expect(productTitle).toBeInTheDocument();
    expect(productDescription).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
  });

  test('calls onClick function when card is clicked', () => {
    const { getByTestId } = render(
      <CardProduct
        title={mockProduct.title}
        description={mockProduct.description}
        image={mockProduct.image}
        price={mockProduct.price}
        onClick={mockOnClick}
      />
    );

    const card = getByTestId('card');
    fireEvent.click(card);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});