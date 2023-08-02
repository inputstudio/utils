import { formatDate } from './formatDate';
import { test, expect } from 'vitest';

test('formatDate function should format date using default locale', () => {
  const dateString = '2022-01-01T00:00:00.000Z';
  const expected = '01/01/2022';
  const actual = formatDate(dateString);
  expect(actual).toBe(expected);
});

test('formatDate function should format date using specified locale', () => {
  const dateString = '2022-01-01T00:00:00.000Z';
  const locale = 'en-US';
  const expected = '1/1/2022';
  const actual = formatDate(dateString, locale);
  expect(actual).toBe(expected);
});

test('formatDate function should format date without time', () => {
  const dateString = '2022-01-01T00:00:00.000Z';
  const expected = '01/01/2022';
  const actual = formatDate(dateString, 'fr-FR', false);
  expect(actual).toBe(expected);
});

test('formatDate function should format date with time', () => {
  const dateString = '2022-01-01T00:00:00.000Z';
  const expected = '01/01/2022 01:00:00';
  const actual = formatDate(dateString, 'fr-FR', true, true);
  expect(actual).toBe(expected);
});

test('formatDate function should throw an error if the date string is not specified', () => {
  const expectedError = new SyntaxError('The date string should be specified');
  expect(() => formatDate()).toThrow(expectedError);
});
