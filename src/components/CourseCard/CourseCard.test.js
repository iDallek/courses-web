import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseCard from './CourseCard';

describe('<CourseCard />', () => {
  test('it should mount', () => {
    const fakeProps = {
      id: 'any_id',
      title: 'any_title',
      description: 'any_description',
    };

    render(<CourseCard content={fakeProps} />);

    const courseCard = screen.getByRole('article');

    expect(courseCard).toBeInTheDocument();
  });

  test('ensure CourseCard renders id according to the received props', () => {
    const fakeProps = {
      id: 1,
      title: 'any_title',
      description: 'any_description',
    };

    render(<CourseCard content={fakeProps} />);

    const id = screen.getByRole('heading', { name: 1 });

    expect(id).toBeInTheDocument();
  });
});
