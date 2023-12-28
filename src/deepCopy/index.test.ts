import {deepCopy} from '../index';

describe('deep copy', () => {
  it('should deep copy an object', () => {
    expect(deepCopy({a: 1, b: 2})).toEqual({a: 1, b: 2});
  })
  it('should deep copy an empty object', () => {
    expect(deepCopy({})).toEqual({});
  })
  it('should deep copy an array', () => {
    expect(deepCopy([1, 2, 3])).toEqual([1, 2, 3]);
  })
  it('should deep copy an empty array', () => {
    expect(deepCopy([])).toEqual([]);
  })
  it('should deep copy a string', () => {
    expect(deepCopy('foo bar baz')).toEqual('foo bar baz');
  })
})
