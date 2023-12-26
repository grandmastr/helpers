import {extractLink} from '../index';

describe('extract a link from a string', () => {
  it('should extract a link from a string', () => {
    expect(extractLink('random text with a google link https://www.google.com')).toEqual('https://www.google.com');
  });
});
