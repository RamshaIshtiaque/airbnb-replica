import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  test('renders correctly', () => {
    render(<Home />);

    const datesButton = screen.getByTestId('dates-button');
    expect(datesButton).toBeInTheDocument();

    const cardComponent = screen.getByTestId('card-component');
    expect(cardComponent).toBeInTheDocument();
  });
});
