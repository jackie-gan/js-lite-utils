/**
 * 简单实现柯里化
 * 
 * 参数复用、立即返回、延迟计算；
 */
function currying(func) {
  const args = [].slice.call(arguments, 1);

  return function() {
    const newArgs = args.concat([].slice.call(arguments));
    
    return func.apply(null, newArgs);
  }
}

export default currying;
