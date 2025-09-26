import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PromptInput from './PromptInput';

describe('PromptInput', () => {
  const mockOnChange = jest.fn();
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders correctly with initial value', () => {
    render(
      <PromptInput
        value="initial prompt"
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        isLoading={false}
      />
    );
    expect(screen.getByLabelText('Prompt Input')).toHaveValue('initial prompt');
    expect(screen.getByRole('button', { name: /generate/i })).toBeEnabled();
  });

  test('calls onChange when textarea value changes', () => {
    render(
      <PromptInput
        value=""
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        isLoading={false}
      />
    );
    fireEvent.change(screen.getByLabelText('Prompt Input'), { target: { value: 'new prompt' } });
    expect(mockOnChange).toHaveBeenCalledWith('new prompt');
  });

  test('calls onSubmit when button is clicked', () => {
    render(
      <PromptInput
        value="test prompt"
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        isLoading={false}
      />
    );
    fireEvent.click(screen.getByRole('button', { name: /generate/i }));
    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
  });

  test('disables input and button when isLoading is true', () => {
    render(
      <PromptInput
        value=""
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        isLoading={true}
      />
    );
    expect(screen.getByLabelText('Prompt Input')).toBeDisabled();
    expect(screen.getByRole('button', { name: /generating.../i })).toBeDisabled();
  });

  test('button text changes to "Generating..." when isLoading is true', () => {
    render(
      <PromptInput
        value=""
        onChange={mockOnChange}
        onSubmit={mockOnSubmit}
        isLoading={true}
      />
    );
    expect(screen.getByRole('button', { name: /generating.../i })).toBeInTheDocument();
  });
});
