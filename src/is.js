const objProto = Object.prototype;

const mapFunc = (type) => (target) =>
  objProto.toString.call(target) === `[object ${type}]`;

export const isUndefined = mapFunc('Undefined');

export const isNull = mapFunc('Null');

export const isNumber = mapFunc('Number');

export const isBoolean = mapFunc('Boolean');

export const isString = mapFunc('String');

export const isArray = mapFunc('Array');

export const isObject = mapFunc('Object');

export const isFunction = mapFunc('Function');

export const isNativeFunc = (func) => {
  return isFunction(func) && /native code/.test(func.toString());
};

export const isInstanceOf = function (obj, target) {
  return obj instanceof target;
};
