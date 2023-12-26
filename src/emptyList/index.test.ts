import {emptyList} from '../index';

describe('create an empty list with fixed length', () => {
  it('should create an empty list with length 2', () => {
    expect(emptyList(2)).toEqual([undefined, undefined]);
  });
});
