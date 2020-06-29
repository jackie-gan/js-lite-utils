/**
 * 快速排序，递归
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

/**
 * 快速排序，非递归
 */
function quickSort(arr) {
  var left = 0, right = arr.length - 1;
  var sortStack = [[left, right]];
  while (sortStack.length > 0) {
      var pointer = sortStack.pop();
      var lp = pointer[0], rp = pointer[1], pivot = pointer[0];

      if (lp >= rp) continue;
      
      while (lp < rp) {
          while (arr[rp] > arr[pivot] && rp > pivot) rp--;
          if (lp >= rp) break;
          while (arr[lp] <= arr[pivot] && lp < rp) lp++;
          var temp = arr[pivot];
          arr[pivot] = arr[rp];
          arr[rp] = arr[lp];
          arr[lp] = temp;
          pivot = lp; 
      }
      sortStack.push([pointer[0], pivot - 1]);
      sortStack.push([pivot + 1, pointer[1]]);
  }
  return arr;
}

export default quickSort;
