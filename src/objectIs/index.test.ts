import {objectIs} from '../index';

describe('objectIs', () => {
  it('should return true for equal values', () => {
    expect(objectIs(2, 2)).toBe(true);
    expect(objectIs('foo', 'foo')).toBe(true);
    expect(objectIs(true, true)).toBe(true);

    const obj: Object = {};
    expect(objectIs(obj, obj)).toBe(true);
  });

  it('should return false for non-equal values', () => {
    expect(objectIs(0, -0)).toBe(false);
    expect(objectIs(NaN, NaN)).toBe(false);
    expect(objectIs('bar', 'baz')).toBe(false);
  });
});
