/**
 * debounce是指在函数触发后，在一个阈值后再执行
 * 再次被触发后，清楚上一次的计时器，重新执行计时器
 */
function debounce(func, wait) {
  let timeout;
  let context;

  const debounced = function(...args) {
    context = this;
    if (timeout) clearTimeout(timeout);

    timeout = setTimeout(function() {
      func.apply(context, args);
      clearTimeout(timeout);
    }, wait);
  };

  return debounced;
}

export default debounce;
