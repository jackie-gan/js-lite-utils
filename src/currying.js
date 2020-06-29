/**
 * 简单实现柯里化
 * 
 * 参数复用、立即返回、延迟计算；
 */
function currying(func) {
  const args = [].slice.call(arguments, 1);

  return function() {
    const newArgs = args.concat([].slice.call(arguments));

    if (newArgs.length < func.length) {
      // 参数少于形参长度，则将继续接收参数
      return currying.call(this, func, ...newArgs);
    } else {
      return func.apply(this, newArgs);
    }
  }
}

export default currying;
