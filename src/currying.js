function currying(func) {
  const args = [].slice.call(arguments, 1);

  return function() {
    const newArgs = args.concat([].slice.call(arguments));
    
    return func.apply(null, newArgs);
  }
}

export default currying;
