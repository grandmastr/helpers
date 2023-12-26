import {getExtension} from '../index';

describe('get the extension of a media file', () => {
  it('should get the extension of a media file', () => {
    const testFile1: string = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';
    const testFile2: string = 'test.txt';

    expect(getExtension(testFile1)).toEqual('.png');
    expect(getExtension(testFile2)).toEqual('');
  });
});
