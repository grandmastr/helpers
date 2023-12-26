import {slugify} from '../index';

describe('slugify strings', () => {
  it('should slugify a string', () => {
    expect(slugify('foo bar baz')).toEqual('foo-bar-baz');
  })
  it('should slugify an empty string', () => {
    expect(slugify('')).toEqual('');
  })
  it('should slugify a string with numbers', () => {
    expect(slugify('foo bar 123')).toEqual('foo-bar-123');
  })
  it('should slugify a string with special characters', () => {
    expect(slugify('foo bar baz!')).toEqual('foo-bar-baz');
  })
  it('should slugify a string with special characters and numbers', () => {
    expect(slugify('foo bar 123!')).toEqual('foo-bar-123');
  })
  it('should slugify a string with multiple special characters and numbers', () => {
    expect(slugify('foo bar 123!@#')).toEqual('foo-bar-123');
  })
})
