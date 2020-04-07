/**
 * 数组扁平化
 */
function flattern(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattern(item) : item);
  }, []);
}


function flattern2(arr) {
  const ret = [];

  for (let i = 0; i < arr.length; i++ ) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(flattern2(arr[i]));
    } else {
      ret.push(arr[i]);
    }
  }
  return ret;
}

/**
 * 非递归
 */
function flattern3(arr) {
  const stack = [];
  const res = [];
  
  stack.push(arr);
  while (stack.length > 0) {
    const array = stack.pop();
    while (array.length > 0) {
      const item = array.shift();
      if (!Array.isArray(item)) {
        res.push(item);
      } else {
        stack.push(array);
        stack.push(item);
        break;
      }
    }
  }
  return res;
}

export default flattern;
