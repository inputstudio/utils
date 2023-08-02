import { formatCurrency } from './formatCurrency';
import { test, expect } from 'vitest';

test('formatCurrency function should format the given value to a currency', () => {
  const value = 1234.56;
  const currency = 'USD';
  const expected = '$1,235';
  const actual = formatCurrency(value, currency);
  expect(actual).toBe(expected);
});

test('formatCurrency function should format the given value to a currency using specified locale', () => {
  const value = 1234.56;
  const currency = 'EUR';
  const locale = 'de-DE';
  const expected = '1.234 €';
  const actual = formatCurrency(value, currency, locale);
  expect(actual).toBe(expected);
});

test('formatCurrency function should format the given value to a currency with zero decimal places', () => {
  const value = 1234.56;
  const currency = 'JPY';
  const expected = '¥1,235';
  const actual = formatCurrency(value, currency);
  expect(actual).toBe(expected);
});
