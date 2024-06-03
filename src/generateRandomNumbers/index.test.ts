import generateRandomNumbers from './index';

describe('generateRandomNumbers', () => {
  test('should generate a string of the correct length', () => {
    const length = 10;
    const result = generateRandomNumbers(length);
    expect(result).toHaveLength(length);
  });

  test('should generate different strings for multiple calls with the same length', () => {
    const length = 10;
    const result1 = generateRandomNumbers(length);
    const result2 = generateRandomNumbers(length);
    expect(result1).not.toBe(result2);
  });

  test('should return an empty string when length is zero', () => {
    const length = 0;
    const result = generateRandomNumbers(length);
    expect(result).toBe('');
  });

  test('should throw an error for negative length', () => {
    const length = -5;
    expect(() => generateRandomNumbers(length)).toThrow(
      'Invalid length. Length should be a non-negative number.',
    );
  });

  test('should throw an error if length is not a number', () => {
    expect(() => generateRandomNumbers(undefined as any)).toThrow(
      'Invalid length. Length should be a non-negative number.',
    );
    expect(() => generateRandomNumbers(null as any)).toThrow(
      'Invalid length. Length should be a non-negative number.',
    );
    expect(() => generateRandomNumbers('10' as any)).toThrow(
      'Invalid length. Length should be a non-negative number.',
    );
  });

  test('should generate only numeric characters', () => {
    const length = 100;
    const result = generateRandomNumbers(length);
    expect(result).toMatch(/^[0-9]+$/);
  });
});
