import { describe, it, expect } from 'vitest';
import { cleanup } from './index';

describe('cleanup', () => {
  it('should remove specified properties from an object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const properties = ['a', 'c'];
    const expected = { b: 2 };

    const result = cleanup(obj, properties);

    expect(result).toEqual(expected);
  });

  it('should return a new object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const properties = ['a', 'c'];

    const result = cleanup(obj, properties);

    expect(result).not.toBe(obj);
  });

  it('should not modify the original object', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const properties = ['a', 'c'];

    cleanup(obj, properties);

    expect(obj).toEqual({ a: 1, b: 2, c: 3 });
  });
});
