import abbreviateNumber from './index';

describe('convertBigNumbers', () => {
  it('should convert numbers in billions correctly', () => {
    expect(abbreviateNumber(1e9)).toBe('1B');
    expect(abbreviateNumber(2.5e9)).toBe('2.5B');
    expect(abbreviateNumber(1234567890)).toBe('1.2B');
  });

  it('should convert numbers in millions correctly', () => {
    expect(abbreviateNumber(1e6)).toBe('1M');
    expect(abbreviateNumber(2.5e6)).toBe('2.5M');
    expect(abbreviateNumber(1234567)).toBe('1.2M');
  });

  it('should convert numbers in thousands correctly', () => {
    expect(abbreviateNumber(1e3)).toBe('1K');
    expect(abbreviateNumber(2500)).toBe('2.5K');
    expect(abbreviateNumber(1234)).toBe('1.2K');
  });

  it('should return the number as a string if less than 1000', () => {
    expect(abbreviateNumber(999)).toBe('999');
    expect(abbreviateNumber(500)).toBe('500');
    expect(abbreviateNumber(1)).toBe('1');
    expect(abbreviateNumber(0)).toBe('0');
  });

  it('should handle edge cases correctly', () => {
    expect(abbreviateNumber(1000)).toBe('1K');
    expect(abbreviateNumber(1000000)).toBe('1M');
    expect(abbreviateNumber(1000000000)).toBe('1B');
  });

  it('should throw an error if the value is not a number', () => {
    // @ts-ignore
    expect(() => abbreviateNumber('1000')).toThrow(TypeError);
    // @ts-ignore
    expect(() => abbreviateNumber(null)).toThrow(TypeError);
    // @ts-ignore
    expect(() => abbreviateNumber(undefined)).toThrow(TypeError);
    // @ts-ignore
    expect(() => abbreviateNumber({})).toThrow(TypeError);
  });

  it('should handle large numbers correctly', () => {
    expect(abbreviateNumber(1e12)).toBe('1000B');
    expect(abbreviateNumber(1e15)).toBe('1000000B');
  });

  it('should handle small numbers correctly', () => {
    expect(abbreviateNumber(0.001)).toBe('0.001');
    expect(abbreviateNumber(0.1)).toBe('0.1');
    expect(abbreviateNumber(999.99)).toBe('999.99');
  });
});
