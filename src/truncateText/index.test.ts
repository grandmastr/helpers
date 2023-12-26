import {truncateText} from '../index';

describe('truncate text', () => {
  it('should truncate text', () => {
    expect(truncateText('test', 2)).toEqual('te...');
  });
});
