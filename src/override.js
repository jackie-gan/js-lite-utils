function addMethod(target, method, newFunc) {
  const oldMethod = target[method];

  target[method] = function(...args) {
    if (newFunc.length === args.length) {
      return newFunc.apply(target, args);
    } else {
      return oldMethod.apply(target, args);
    }
  }
}