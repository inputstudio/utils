import { formatCurrency } from './formatCurrency';
import { test, expect } from 'vitest';

test('formatCurrency function should format the given value to a currency', () => {
  const value = 1234;
  const currency = 'XOF';
  const expected = /1\s234\s\F\sCFA/; // Intl.NumberFormat use small non-breaking space (\u202f) instead of normal space (\u0020), so we use a regex to match any space character.
  const actual = formatCurrency(value, currency);
  expect(actual).toMatch(expected);
});

test('formatCurrency function should format the given value to a currency using specified locale', () => {
  const value = 1234.56;
  const currency = 'EUR';
  const locale = 'de-DE';
  const expected = /1.234,56\s€/;
  const actual = formatCurrency(value, currency, locale);
  expect(actual).toMatch(expected);
});

test('formatCurrency function should format the given value to a currency with zero decimal places', () => {
  const value = 1234.56;
  const currency = 'JPY';
  const expected = /1\s235\sJPY/;
  const actual = formatCurrency(value, currency);
  expect(actual).toMatch(expected);
});
