import { render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('renders correctly', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders the changes when the calcultor button is clicked', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('5'));
  const typedElement = screen.getByText('15');
  expect(typedElement.innerHTML).toBe('15');
});

test('renders the changes when the calcultor button is clicked', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  const typedElement = screen.getByText('15 + 3');
  expect(typedElement.innerHTML).toBe('15 + 3');
});

test('renders the changes when the calcultor button is clicked', () => {
  render(<Calculator />);
  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('5'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('3'));
  let typedElement = screen.getByText('15 + 3');
  expect(typedElement.innerHTML).toBe('15 + 3');
  fireEvent.click(screen.getByText('='));
  typedElement = screen.getByText('18');
  expect(typedElement.innerHTML).toBe('18');
});

