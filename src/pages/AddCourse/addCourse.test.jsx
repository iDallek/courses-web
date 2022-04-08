import React from 'react';
import { render, screen } from '@testing-library/react';
import AddCourse from './AddCourse';

describe('<AddCourse />', () => {
  test('it should render the component', () => {
    render(<AddCourse />);
    expect(screen.getByTestId('add-course-component')).toBeInTheDocument();
  });
});
