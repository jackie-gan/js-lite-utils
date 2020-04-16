import {
  isUndefined,
  isNull,
  isNumber,
  isBoolean,
  isString,
  isArray,
  isObject,
  isFunction,
  isNativeFunc,
  isInstanceOf
} from '../src/is';

describe('test is', () => {
  it('test case 1', () => {
    expect(isUndefined(undefined)).toBe(true);

    expect(isNull(null)).toBe(true);

    expect(isNumber(1)).toBe(true);

    expect(isBoolean(true)).toBe(true);

    expect(isString('ss')).toBe(true);

    expect(isArray([])).toBe(true);

    expect(isObject({})).toBe(true);

    const noop = function () {};

    expect(isFunction(noop)).toBe(true);

    expect(isNativeFunc(Date)).toBe(true);

    const date = new Date();

    expect(isInstanceOf(date, Date)).toBe(true);
  });
});