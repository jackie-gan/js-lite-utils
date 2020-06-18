export default function newOperator(target) {
  if (typeof target !== 'function') throw 'target should be a function';
  // 获取new 的时候，传入构造函数的参数
  const args = [].slice.call(arguments, 1);
  // 以target的prototype为原型，创建对象，新对象__proto__指向target.prototype
  const newObj = Object.create(target.prototype);
  const targetFuncRet = target.apply(newObj, args);
  // 当构造函数返回了对象或者函数，则返回该结果
  if ((typeof targetFuncRet !== null && typeof targetFuncRet === 'object') || typeof targetFuncRet === 'function') return targetFuncRet;
  else return newObj;
}