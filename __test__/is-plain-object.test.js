import isPlainObject from '../src/is-plain-object';

describe('test is plain object', () => {
  it('test case 1', () => {
    const target = {};

    expect(isPlainObject(target)).toBeTruthy();
  });

  it('test case 2', () => {
    const target = new Object();

    expect(isPlainObject(target)).toBeTruthy();
  });

  it('test case 3', () => {
    const target = Object.create(null);

    expect(isPlainObject(target)).toBeTruthy();
  });

  it('test case 4', () => {
    const target = new Date;

    expect(isPlainObject(target)).toBeFalsy();
  });
});