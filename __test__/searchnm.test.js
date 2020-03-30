import searchnm from '../src/searchnm';

describe('test searchnm', () => {
  it('test case 1', () => {
    const result = searchnm([1, 2, 3, 4], 2, 5);

    console.log(result);

    expect(result).toEqual([[2, 3], [1, 4]]);
  });
});