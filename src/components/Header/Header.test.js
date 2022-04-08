import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

  test('ensure Header renders buttons according to the received props', () => {
    const fakeProps = {
      title: 'any title',
      buttons: [
        { label: 'button 1', onClick: jest.fn() },
        { label: 'button 2', onClick: jest.fn() },
      ],
    };

    render(<Header props={fakeProps} />);
    const buttons = screen.getAllByRole('button');

    expect(buttons).toHaveLength(fakeProps.buttons.length);

    expect(buttons[0]).toHaveTextContent(fakeProps.buttons[0].label);
    expect(buttons[1]).toHaveTextContent(fakeProps.buttons[1].label);

    fakeProps.buttons.forEach((button, index) => {
      fireEvent.click(buttons[index]);
      expect(button.onClick).toHaveBeenCalledTimes(1);
    });
  });
});
