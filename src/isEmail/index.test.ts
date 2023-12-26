import {isEmail} from '../index';

describe('isEmail', () => {
  it('should return true for valid emails', () => {
    expect(isEmail('a@b.com')).toBe(true);
  });
  it('should return false for invalid emails', () => {
    expect(isEmail('a@b.c')).toBe(false);
  });
});
