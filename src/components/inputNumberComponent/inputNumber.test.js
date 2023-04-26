import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputNumberComponent from './index';
import '@testing-library/jest-dom';

describe('InputNumberComponent', () => {
  test('renders with correct props', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(
      <InputNumberComponent
        value={'1'}
        min={'0'}
        max={'10'}
        onChange={onChangeMock}
      />
    );

    const inputNumber = getByRole('spinbutton');

    expect(inputNumber).toHaveValue('1');

    fireEvent.change(inputNumber, { target: { value: '2' } });
    expect(onChangeMock).toHaveBeenCalledWith(2);
  });
});