import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  test('it should mount', () => {
    render(<HomePage />);

    const homePage = screen.getByTestId('HomePage');

    expect(homePage).toBeInTheDocument();
  });

  test('it should have a title', () => {
    render(<HomePage />);

    const title = screen.getByText('Cursos');

    expect(title).toBeInTheDocument();
  });
});
