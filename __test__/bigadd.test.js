import bigadd from '../src/bigadd';

describe('test bigadd', () => {
  it('test case 1', () => {
    const result = bigadd('123', '123');

    expect(result).toBe('246');
  });

  it('test case 2', () => {
    const result = bigadd('999', '1');

    expect(result).toBe('1000');
  });

  it('test case 3', () => {
    const result = bigadd('1', '999');

    expect(result).toBe('1000');
  });

  it('test case 4', () => {
    const result = bigadd('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999', '1');

    expect(result).toBe('1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
  });
});