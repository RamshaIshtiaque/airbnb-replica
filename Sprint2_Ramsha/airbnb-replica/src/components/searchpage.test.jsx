import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchPage from './SearchPage';

describe('SearchPage component', () => {
  test('renders correctly', () => {
    render(<SearchPage />);

    const infoElement = screen.getByText(/Stays nearby/i);
    expect(infoElement).toBeInTheDocument();

    const cancelButton = screen.getByText(/Cancellation Flexibility/i);
    expect(cancelButton).toBeInTheDocument();

    const typeOfPlaceButton = screen.getByText(/Type of place/i);
    expect(typeOfPlaceButton).toBeInTheDocument();

    const priceButton = screen.getByText(/Price/i);
    expect(priceButton).toBeInTheDocument();

    const roomsAndBedsButton = screen.getByText(/Rooms and beds/i);
    expect(roomsAndBedsButton).toBeInTheDocument();

    const moreFiltersButton = screen.getByText(/More filters/i);
    expect(moreFiltersButton).toBeInTheDocument();

    // Check if SearchResultContainer is rendered
    const searchResultContainer = screen.getByTestId('search-result-container');
    expect(searchResultContainer).toBeInTheDocument();
  });
});
