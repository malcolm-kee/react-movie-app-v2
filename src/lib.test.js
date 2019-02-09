import { classNames } from './lib';

test('classNames', () => {
  expect(classNames('btn', 'btn--default')).toBe('btn btn--default');
  expect(
    classNames('btn', true && 'btn--default', false && 'btn--raised', null)
  ).toBe('btn btn--default');
  expect(classNames(['btn', null, 'btn--default'])).toBe('btn btn--default');
});
