import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText(/count is/i);
    expect(headline).toBeInTheDocument();
  });

  it('increments count on button click', () => {
    render(<App />);
    const button = screen.getByText(/count is/i);
    fireEvent.click(button);
    const updatedButton = screen.getByText(/count is 1/i);
    expect(updatedButton).toBeInTheDocument();
  });

  it('increments count on multiple button clicks', () => {
    render(<App />);
    const button = screen.getByText(/count is/i);
    fireEvent.click(button);
    fireEvent.click(button);
    const updatedButton = screen.getByText(/count is 2/i);
    expect(updatedButton).toBeInTheDocument();
  });
});
