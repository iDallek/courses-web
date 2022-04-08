import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
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

  test('ensure Header renders links according to the received props', () => {
    const fakeProps = {
      title: 'any title',
      links: [
        { label: 'link 1', href: '/any_href_1' },
        { label: 'link 2', href: '/any_href_2' },
      ],
    };

    render(<MemoryRouter><Header props={fakeProps} /></MemoryRouter>);
    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(fakeProps.links.length);

    expect(links[0]).toHaveTextContent(fakeProps.links[0].label);
    expect(links[1]).toHaveTextContent(fakeProps.links[1].label);

    expect(links[0]).toHaveAttribute('href', fakeProps.links[0].href);
    expect(links[1]).toHaveAttribute('href', fakeProps.links[1].href);
  });
});
