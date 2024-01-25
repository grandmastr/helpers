import {truncateText} from '../index';

describe('truncate text', () => {
  it('should truncate a text', () => {
    expect(truncateText('foo bar baz', 3, 3)).toEqual('foo...baz');
  })
});
