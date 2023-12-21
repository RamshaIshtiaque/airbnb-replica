import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer component', () => {
  test('renders footer elements correctly', () => {
    render(<Footer />);

    const copyrightText = screen.getByText('© Airbnb, Inc. • Privacy • Terms • Sitemap');
    expect(copyrightText).toBeInTheDocument();

    const languageIcon = screen.getByTestId('language-icon');
    expect(languageIcon).toBeInTheDocument();

    const facebookIcon = screen.getByTestId('facebook-icon');
    expect(facebookIcon).toBeInTheDocument();

    const twitterIcon = screen.getByTestId('twitter-icon');
    expect(twitterIcon).toBeInTheDocument();

    const instagramIcon = screen.getByTestId('instagram-icon');
    expect(instagramIcon).toBeInTheDocument();
  });
});
