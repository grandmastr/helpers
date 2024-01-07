import {isObject} from '../index';

describe('isObject', () => {
  it('should return true for an object', () => {
    expect(isObject({})).toBe(true);
  });
  it('should return false for a string', () => {
    expect(isObject('foo')).toBe(false);
  });
  it('should return false for a number', () => {
    expect(isObject(1)).toBe(false);
  });
  it('should return false for a boolean', () => {
    expect(isObject(true)).toBe(false);
  });
  it('should return false for an array', () => {
    expect(isObject([1, 2, 3])).toBe(false);
  });
  it('should return false for a function', () => {
    expect(isObject(() => {})).toBe(false);
  });
  it('should return false for null', () => {
    expect(isObject(null)).toBe(false);
  });
  it('should return false for undefined', () => {
    expect(isObject(undefined)).toBe(false);
  });
  it('should return false for NaN', () => {
    expect(isObject(NaN)).toBe(false);
  });
  it('should return false for Infinity', () => {
    expect(isObject(Infinity)).toBe(false);
  });
})
