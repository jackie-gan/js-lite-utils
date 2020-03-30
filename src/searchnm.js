function searchnm(arr, n, m) {
  const len = arr.length;
  const res = [];
  for (let i = 0; i < Math.pow(2, len); i++) {
    if (count(i) === n) {
      let s = 0;
      const temp = [];
      for (let j = 0; j < len; j++) {
        if (i & 1 << (len - 1 - j)) {
          s += arr[j];
          temp.push(arr[j]);
        }
      }
      if (s === m) res.push(temp);
    }
  }
  return res;
}

function count(n) {
  let count = 0;
  while (n) {
    if (n & 1) {
      count++;
    }
    n >>= 1;
  }
  return count;
}

export default searchnm;