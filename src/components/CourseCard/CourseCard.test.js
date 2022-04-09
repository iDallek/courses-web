import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
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

    const id = screen.getByRole('heading', { name: /1/i });

    expect(id).toBeInTheDocument();
  });

  test('ensure CourseCard renders title according to the received props', () => {
    const fakeProps = {
      id: 1,
      title: 'any_title',
      description: 'any_description',
    };

    render(<CourseCard content={fakeProps} />);

    const title = screen.getByRole('heading', { name: 'any_title' });

    expect(title).toBeInTheDocument();
  });

  test('ensure CourseCard renders description according to the received props', () => {
    const fakeProps = {
      id: 1,
      title: 'any_title',
      description: 'any_description',
    };

    render(<CourseCard content={fakeProps} />);

    const description = screen.getByRole('paragraph');

    expect(description).toHaveTextContent('any_description');
  });

  test('ensure CourseCard call onClick function passed by props', () => {
    const fakeProps = {
      id: 1,
      title: 'any_title',
      description: 'any_description',
      onClick: jest.fn(),
    };

    render(<CourseCard content={fakeProps} />);

    const courseCard = screen.getByRole('article');

    fireEvent.click(courseCard);
    expect(fakeProps.onClick).toHaveBeenCalledTimes(1);
  });
});
