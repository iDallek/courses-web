import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AddCourse from './AddCourse';

describe('<AddCourse />', () => {
  test('it should render the component', () => {
    render(<AddCourse />);
    expect(screen.getByTestId('add-course-component')).toBeInTheDocument();
  });

  test('ensure AddCourse submit button is enabled only if all form fields are filled', () => {
    render(<AddCourse />);

    const submitButton = screen.getByRole('button', { name: 'Salvar' });
    expect(submitButton).toBeDisabled();

    const codeInput = screen.getByTestId('id-input');
    fireEvent.change(codeInput, { target: { value: '123' } });
    expect(submitButton).toBeDisabled();

    const titleInput = screen.getByTestId('title-input');
    fireEvent.change(titleInput, { target: { value: 'any_title' } });
    expect(submitButton).toBeDisabled();

    const descriptionInput = screen.getByTestId('description-input');
    fireEvent.change(descriptionInput, { target: { value: 'any_description' } });
    expect(submitButton).not.toBeDisabled();
  });
});
