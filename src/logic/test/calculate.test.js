import calculate from '../calculate';

test('To reset the calculator', () => {
  expect(calculate({}, 'AC')).toStrictEqual({ total: null, next: null, operation: null });
});

test('To check which digit key was pressed', () => {
  expect(calculate({ total: '0', next: '0', operation: '+' }, '0')).toStrictEqual({});
});

test('To check if the sign button is working', () => {
  expect(calculate({ total: 1, next: 5, operation: '+/-' }, '+/-')).toStrictEqual({ total: 1, operation: '+/-', next: '-5' });
});
