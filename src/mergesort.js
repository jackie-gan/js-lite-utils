function compare(left, right) {
    const lLen = left.length, rLen = right.length;
    let i = 0, j = 0;
    const result = [];
    while (i < lLen && j < rLen) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    while (i < lLen) result.push(left[i++]);
    while (j < rLen) result.push(right[j++]);
    return result;
}

export function mergesort(target) {
    if (target.length < 2) return target;

    const divide = Math.floor(target.length / 2);
    const left = target.slice(0, divide);
    const right = target.slice(divide);

    return compare(mergesort(left), mergesort(right));
}