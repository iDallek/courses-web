import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';
import * as helperAxios from '../../helper/axios';

const factoryMockedApiCourse = (times) => {
  const data = [...Array(times).keys()].map((i) => ({
    idcurso: i + 1,
    ds_titulo: 'any_title',
    ds_descricao: 'any_description',
    onClick: jest.fn(),
  }));

  return data;
};

describe('<HomePage />', () => {
  test('it should mount', () => {
    render(<MemoryRouter><HomePage /></MemoryRouter>);

    const homePage = screen.getByTestId('HomePage');

    expect(homePage).toBeInTheDocument();
  });

  test('ensure HomePage renders all cards', async () => {
    jest.spyOn(helperAxios, 'fetchData').mockReturnValue(factoryMockedApiCourse(20));

    render(<MemoryRouter><HomePage /></MemoryRouter>);

    const cards = await screen.findAllByRole('article');

    expect(cards).toHaveLength(20);
  });
});
