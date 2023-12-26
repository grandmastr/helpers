import {isKindOf} from '../index';

describe('a hacky alternative to typeof', () => {
  it('should return the constructor.name', () => {
    expect(isKindOf(null)).toEqual('null');
    expect(isKindOf(undefined)).toEqual('undefined');
    expect(isKindOf({})).toEqual('Object');
    expect(isKindOf([])).toEqual('Array');
  })
})
