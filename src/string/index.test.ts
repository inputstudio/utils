import { secret } from './secret';
import { describe, it, expect } from 'vitest';

describe('secret function', () => {
  it('should hide characters at the start of the string', () => {
    const value = 'password123';
    const expected = 'password***';
    const actual = secret(value, '*', 8, 'start');
    expect(actual).toBe(expected);
  });

  it('should hide characters at the end of the string', () => {
    const value = 'password123';
    const expected = '********123';
    const actual = secret(value, '*', 3, 'end');
    expect(actual).toBe(expected);
  });

  it('should throw an error if the value is empty', () => {
    const value = '';
    const expectedError = new Error('The string value should have a least one character');
    expect(() => secret(value)).toThrow(expectedError);
  });

  it('should throw an error if the char length is greater than 1', () => {
    const value = 'password123';
    const char = '**';
    const expectedError = new Error('The char should be only one character');
    expect(() => secret(value, char)).toThrow(expectedError);
  });

  it('should throw an error if the nbChars is greater than the value length', () => {
    const value = 'password123';
    const nbChars = 20;
    const expectedError = new Error('The number of characters to extract from the former string exceed the string lenght');
    expect(() => secret(value, '*', nbChars)).toThrow(expectedError);
  });
});