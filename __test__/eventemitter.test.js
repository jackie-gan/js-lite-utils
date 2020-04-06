import EventEmitter from '../src/eventemitter';

describe('test eventemitter', () => {
  it('test case 1', () => {
    const eventemitter = new EventEmitter();

    let result1;
    let result2;

    eventemitter.on('test', (a, b) => {
      result1 = a + b;
    });

    eventemitter.on('test', (a, b) => {
      result2 = a - b;
    });

    eventemitter.emit('test', 4, 5);

    expect(result1).toBe(9);
    expect(result2).toBe(-1);
  });
});