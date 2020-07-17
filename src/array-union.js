//****
// 数组合并，将两个数组的元素合并，且元素各不相同
// 
// 步骤：
// 1、合并
// 2、去重
//****

/**
 * es6解法
 */
function arrayunion(...args) {
  return [...new Set([].concat(...args))];
}

/**
 * es6解法
 */
function ArrayUnion(...args) {
  return Array.from(new Set([].concat(...args)));
}

/**
 * es5解法
 */
function arrayUnion() {
  const args = [].slice.call(arguments);
  let unionArr = [];

  args.forEach(element => {
    unionArr = unionArr.concat(element);    
  });

  const ret = [];

  unionArr.forEach(element => {
    if (ret.indexOf(element) === -1) {
      ret.push(element);
    }
  })

  return ret;
}

export default arrayUnion;