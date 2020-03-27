/**
 * 快速排序
 */
function quicksort(arr) {
  if (arr.length <= 1) return arr;
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr.splice(pivotIndex, 1)[0];
  const left = [];
  const right = [];

  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quicksort(left).concat([pivot], quicksort(right));
}

export default quicksort;
