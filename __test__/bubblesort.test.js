import bubblesort from '../src/bubblesourt';

describe('test bubblesort', () => {
  it('test case 1', () => {
    const arr = [43, 2, 33, 56, 15, 995, 75, 3];

    const result = bubblesort(arr);

    expect(result).toEqual([2, 3, 15, 33, 43, 56, 75, 995]);
  });
});