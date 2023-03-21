import { isURL } from '../src/client/js/isURL';

describe('isURL', () => {
    test('should return true for valid URLs', () => {
      const validURLs = [
        'www.example.com',
        'www.example.com',
        'example.com',
        'example.com',
        'example.com/path',
        'example.com/path?query=value#fragment',
        '127.0.0.1',
        '127.0.0.1:8080',
        'localhost:3000',
      ];
  
      validURLs.forEach((url) => {
        expect(isURL(url)) === true;
      });
    });
  
    test('should return false for invalid URLs', () => {
      const invalidURLs = [
        'example',
        'www.example.com',
        'http://',
        '',
        'http:/example.com',
        'http://example_com',
      ];
  
      invalidURLs.forEach((url) => {
        expect(isURL(url)) === false;
      });
    });
  });