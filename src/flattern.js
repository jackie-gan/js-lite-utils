/**
 * 数组扁平化
 */
function flattern(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattern(item) : item);
  }, []);
}


function flattern2(value) {
  const ret = [];

  for (let i = 0; i < value.length; i++ ) {
    if (Array.isArray(value[i])) {
      ret = ret.concat(flattern(value[i]));
    } else {
      ret.push(value);
    }
  }
  return ret;
}

export default flattern;
