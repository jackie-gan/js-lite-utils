/**
 * 深拷贝
 */
function deepclone(obj) {
  if (typeof obj !== 'object') return obj;

  const newObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
      newObj[key] = deepclone(obj[key]);
    } else if (Object.prototype.toString.call(obj[key]) === '[object Array]') {
      newObj[key] = deepclone(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

export default deepclone;