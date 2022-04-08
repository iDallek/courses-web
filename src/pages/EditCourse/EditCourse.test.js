import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EditCourse from './EditCourse';

describe('<EditCourse />', () => {
  test('it should render the component', () => {
    render(<MemoryRouter><EditCourse /></MemoryRouter>);
    expect(screen.getByTestId('edit-course-component')).toBeInTheDocument();
  });
});
