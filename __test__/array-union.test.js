import arrayUnion from '../src/array-union';

describe('test array union', () => {
  it('test case 1', () => {
    const result = arrayUnion([1, 1, 2, 3], [2, 3]);

    expect(result).toStrictEqual([1, 2, 3]);
  });

  it('test case 2', () => {
    const result = arrayUnion(['foo', 'foo', 'bar']);

    expect(result).toStrictEqual(["foo", "bar"]);
  });

  it('test case 3', () => {
    const result = arrayUnion(['🐱', '🦄', '🐻'], ['🦄', '🌈']);

    expect(result).toStrictEqual(["🐱", "🦄", "🐻", "🌈"]);
  });

  it('test case 4', () => {
    const result = arrayUnion(['🐱', '🦄'], ['🐻', '🦄'], ['🐶', '🌈', '🌈']);

    expect(result).toStrictEqual(["🐱", "🦄", "🐻", "🐶", "🌈"]);
  });
});