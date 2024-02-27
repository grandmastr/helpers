import {capitalize} from '../index';

describe('capitalize', () => {
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('hello world')).toBe('Hello world');
  })
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('foo bar baz')).toBe('Foo bar baz');
  })
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('foo')).toBe('Foo');
  })
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('bar')).toBe('Bar');
  })
  it('should capitalize the first letter of a string', () => {
    expect(capitalize('baz')).toBe('Baz');
  })
})
