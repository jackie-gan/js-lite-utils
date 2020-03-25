/**
 * throttole是指在某一个阈值内只运行一次
 */
function throttle(func, wait, immediate) {
  let context;
  let timeout;

  const throttled = function(...args) {
    context = this;
    const callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(function () {
        if (!immediate) {
          func.apply(context, args);
          context = null;
        }
        clearTimeout(timeout);
        timeout = null;
      }, wait);
    }

    if (callNow) {
      func.apply(context, args);
      context = null;
      args = null;
    }
  };

  return throttled;
}

export default throttle;
