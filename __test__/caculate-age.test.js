import caculateAge from '../src/caculate-age';

describe('test caculate age', () => {
  it('test case 1', () => {
    const result = caculateAge('1991-9-12');

    expect(result).toStrictEqual('29岁');
  });

  it('test case 2', () => {
    const result = caculateAge('2020-11-8');

    expect(result).toStrictEqual('2天');
  });
});