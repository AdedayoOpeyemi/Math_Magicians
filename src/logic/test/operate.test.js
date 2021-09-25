import operate from '../operate';

test('adds 1 + 2 to equal 3', () => {
  expect(operate(1, 2, '+')).toBe('3');
});

test('Substracts 1 - 2 to equal -1', () => {
  expect(operate(1, 2, '-')).toBe('-1');
});

test('Multiplies 1 x 2 to equal 2', () => {
  expect(operate(1, 2, 'x')).toBe('2');
});

test('Divides 4 / 2 to equal 2', () => {
  expect(operate(4, 2, '÷')).toBe('2');
});

test(' 7 % 5 to equal 2', () => {
  expect(operate(4, 2, '÷')).toBe('2');
});

test('Divides 5 / 0 to equal 2', () => {
  expect(operate(5, 0, '÷')).toBe("Can't divide by 0.");
});

test('Divides 0 / 3 to equal 0', () => {
  expect(operate(0, 3, '÷')).toBe('0');
});
