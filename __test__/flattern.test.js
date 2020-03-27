import flattern from '../src/flattern';

describe('test flattern', () => {
  it('test case 1', () => {
    const arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

    const result = flattern(arr);

    expect(result).toEqual([1,2,2,3,4,5,5,6,7,8,9,11,12,12,13,14,10]);
  });
});