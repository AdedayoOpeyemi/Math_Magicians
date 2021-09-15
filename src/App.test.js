import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const calculatorElement = screen.getByClass('.calc-container');
  expect(calculatorElementt).toBeInTheDocument();
});
