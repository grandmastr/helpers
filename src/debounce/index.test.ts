import {debounce} from '../index';

describe('debounce', () => {
  jest.useFakeTimers();

  it('should call the function after the specified delay', () => {
    const mockFn = jest.fn();
    const debouncedFn: Function  = debounce(mockFn, 1000);

    debouncedFn();

    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalled();
  });
});
