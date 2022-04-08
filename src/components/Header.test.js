import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('it should mount', () => {
    const fakeProps = {
      title: 'any title',
      buttons: [
        { label: 'button 1', onClick: () => {} },
        { label: 'button 2', onClick: () => {} },
      ],
    };
    const { container } = render(<Header props={fakeProps} />);

    const header = container.querySelector('header');

    expect(header).toBeInTheDocument();
  });

  test('ensure Header renders title according to the received props', () => {
    const fakeProps = {
      title: 'any title',
      buttons: [
        { label: 'button 1', onClick: () => {} },
        { label: 'button 2', onClick: () => {} },
      ],
    };

    render(<Header props={fakeProps} />);
    const title = screen.getByRole('heading');

    expect(title).toHaveTextContent(fakeProps.title);
  });
});
