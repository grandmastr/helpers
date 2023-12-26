import {isObjectEmpty} from '../index';

describe('check if an object is empty', () => {
  it('should return true if the object is empty', () => {
    expect(isObjectEmpty({})).toBe(true);
    expect(isObjectEmpty({test: 'test'})).toBe(false);
  })
})
