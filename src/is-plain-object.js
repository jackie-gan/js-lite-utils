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
 * 纯对象一般是指：字面量 {} 、通过Object.create(null)创建的对象、通过new Object()创建的对象
 * 
 * 所以在判断的时候，需要做以下几步
 * 1、先保证目标参数是object类型
 * 2、
 */
function isPlainObject(target) {
    if () {}
}