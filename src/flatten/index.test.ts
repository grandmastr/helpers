import {flatten} from '../index';

describe('flatten', () => {
  it('should flatten an array', () => {
    expect(flatten([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('should flatten an object', () => {
    expect(flatten({a: 1, b: {c: 2, d: {e: 3}}})).toEqual({a: 1, c: 2, e: 3});
  });
  it('should flatten an array of arrays', () => {
    expect(flatten([[1], [2], [3]])).toEqual([1, 2, 3]);
  });
  it('should flatten an object of objects', () => {
    expect(flatten({a: {b: 1}, c: {d: 2}, e: {f: 3}})).toEqual({b: 1, d: 2, f: 3});
  });
  it('should flatten an array of arrays and arrays', () => {
    expect(flatten([[1], [2], [3], [4]])).toEqual([1, 2, 3, 4]);
  });
});
