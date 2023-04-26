import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonComponent from './index';
import '@testing-library/jest-dom';

describe('ButtonComponent', () => {
  test('renders a button with the text provided as prop', () => {
    const buttonText = 'Click me!';
    const { getByText } = render(<ButtonComponent text={buttonText} />);
    const button = getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

  test('calls a provided function when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<ButtonComponent text="Click me!" onClick={handleClick} />);
    const button = getByText('Click me!');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});