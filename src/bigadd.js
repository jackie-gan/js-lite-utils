function bigadd(firstNum, secondNum) {
  const firstNumLen = firstNum.length, secondNumLen = secondNum.length;

  const minLen = Math.min(firstNumLen, secondNumLen);
  const maxLen = Math.max(firstNumLen, secondNumLen);
  let mid = 0;
  const result = [];

  for (let i = 0; i < maxLen; i++) {
    if (i < minLen) {
      const addRes = parseInt(firstNum[firstNumLen - 1 - i], 10) + parseInt(secondNum[secondNumLen - 1 - i], 10) + mid;
      result.push(addRes % 10);
      mid = Math.floor(addRes / 10);
    } else {
      const largerNum = firstNumLen > secondNumLen ? firstNum : secondNum;
      const addRes = parseInt(largerNum[maxLen - 1 - i], 10) + mid;
      result.push(addRes % 10);
      mid = Math.floor(addRes / 10);
    }
  }

  if (mid > 0) {
    result.push(mid);
  }

  return result.reverse().join('');
}

export default bigadd;
