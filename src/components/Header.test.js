import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('<Header />', () => {
  test('it should mount', () => {
    const fakeProps = {
      label: 'any label',
      buttons: [
        { label: 'button 1', onClick: () => {} },
        { label: 'button 2', onClick: () => {} },
      ],
    };
    const { container } = render(<Header props={fakeProps} />);

    const header = container.querySelector('header');

    expect(header).toBeInTheDocument();
  });
});
