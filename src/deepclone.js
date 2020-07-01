const toString = Object.prototype.toString;

function isArray(target) {
  return toString.call(target) === '[object Array]';
}

function isPlainObject(target) {
  return toString.call(target) === '[object Object]';
}

/**
 * 深拷贝
 */
function deepclone(target) {
  let result;
  
  if (isPlainObject(target)) {
    result = {};

    for (const key in target) {
      result[key] = deepclone(target[key]);
    }
  } else if (isArray(target)) {
    result = [];

    const len = target.length;
    for (let i = 0; i < len; i++) {
      result.push(deepclone(target[i]));
    }
  } else {
    result = target;
  }

  return result;
}

export default deepclone;