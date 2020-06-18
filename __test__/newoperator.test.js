import newOperator from '../src/new-operator';

describe('test new operator', () => {
  it('test case 1', () => {
    const target = 1;

    expect(() => {
      newOperator(target);
    }).toThrow(new Error('target should be a function'));
  });
  
  it('test case 2', () => {
    const target = function () {};

    expect(newOperator(target)).toMatchObject(new target());
  });

  it('test case 3', () => {
    const target = function (name) { this.name = name; };

    expect(newOperator(target, '11')).toMatchObject(new target('11'));
  });
});