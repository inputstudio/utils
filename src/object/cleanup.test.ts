import { test, expect } from 'vitest';
import { cleanup } from './index';

test('should remove specified properties from an object', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const properties = ['a', 'c'];
  const expected = { b: 2 };
  const actual = cleanup(obj, properties);

  expect(actual).toEqual(expected);
});

test('should return a new object', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const properties = ['a', 'c'];
  const actual = cleanup(obj, properties);

  expect(actual).not.toBe(obj);
});

test('should not modify the original object', () => {
  const obj = { a: 1, b: 2, c: 3 };
  const properties = ['a', 'c'];

  cleanup(obj, properties);

  expect(obj).toEqual({ a: 1, b: 2, c: 3 });
});
