import { render, screen } from '@testing-library/react';
import App from './App';

test('On load it renders Welcome', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to this Amazing website/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('On load it should have link to homepage', () => {
  render(<App />);
  const homeButton = screen.getByText(/Home/i);
  expect(homeButton).toBeInTheDocument();
});

test('On load it should have link to Calculator', () => {
  render(<App />);
  const calculatorButton = screen.getByText(/Calculator/i);
  expect(calculatorButton).toBeInTheDocument();
});

test('On load it should have link to Quote', () => {
  render(<App />);
  const quoteButton = screen.getByText(/Quote/i);
  expect(quoteButton).toBeInTheDocument();
});
