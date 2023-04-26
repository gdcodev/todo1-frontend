import React from 'react';
import { render } from '@testing-library/react';
import CardComponent from './index';
import '@testing-library/jest-dom';

describe('CardComponent', () => {
  test('renders children props inside a Card component', () => {
    const { getByText } = render(<CardComponent><p>Child element</p></CardComponent>);
    const childElement = getByText('Child element');
    expect(childElement).toBeInTheDocument();
  });
});