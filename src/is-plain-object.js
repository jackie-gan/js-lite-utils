const toString = Object.prototype.toString;

/**
 * 获取类型
 */
function getTag(target) {
    // 兼容低版本IE(<9)、低版本node
    // reference: https://github.com/lodash/lodash/issues/4683
    // reference: https://my.oschina.net/mtyhgmj/blog/1817823
    if (target == null) {
        return target === undefined ? '[object Undefined]' : '[object Null]';
    }
    return toString.call(target);
}

/**
 * 判断是不是纯对象
 * 
 * @description 参考自lodash的实现
 * 
 * 纯对象一般是指：字面量 {} 、通过Object.create(null)创建的对象、通过new Object()创建的对象
 * 
 * 所以在判断的时候，需要做以下几步
 * 1、先保证目标参数是object类型，其他的排除掉
 * 2、判断是否通过Object.create(null)创建的，即没有原型对象的纯对象
 * 3、判断是不是通过 字面量 {} ，new Object()创建的，也就是它是由Object构造函数创建
 */
function isPlainObject(target) {
    if (!target || toString.call(target) !== '[object Object]') return false;

    if (Object.getPrototypeOf(target) === null) return true;

    // 如果获取的顶级proto刚好等于target.prototype，那么它就是Object.prototype
    // 也就是它有Object来创建
    let proto = target;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(target) === proto;
}

export default isPlainObject;