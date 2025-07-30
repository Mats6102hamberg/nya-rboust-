// Example test file

describe('Example test', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});

describe('exampleService', () => {
  it('should return correct message', () => {
    const { exampleService } = require('../src/services/exampleService');
    expect(exampleService()).toBe('Service is working!');
  });
});
