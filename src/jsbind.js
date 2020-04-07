Function.prototype.jsBind = function () {
  if (typeof this !== "function") {
    throw new TypeError("not a function");
  }

  const oldFunc = this;
  const newContext = arguments[0];
  const args = [].slice.call(arguments, 1);

  function newFunc() {
    const newArgs = args.concat([].slice.call(arguments, 0));
    // 判断是否为new 调用
    const isNew = this instanceof newFunc;
    return oldFunc.apply(isNew ? this : newContext, newArgs); 
  };

  newFunc.prototype = oldFunc.prototype;

  return newFunc;
}
