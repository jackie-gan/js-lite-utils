/**
 * @link https://github.com/rxaviers/async-pool
 * @link https://juejin.cn/post/6976028030770610213
 */
export function asyncPool(concurrency, iterables, iteratorFn) {
    const rets = [];
    const executings = [];
    let i = 0;

    function enqueue() {
        if (i === iterables.length) {
            return Promise.resolve();
        }

        const item = iterables[i++];
        const p = Promise.resolve().then(() => iteratorFn(item, iterables));
        rets.push(p);

        let r = Promise.resolve();

        if (concurrency <= iterables.length) {
            const end = p.then(() => executings.splice(executings.indexOf(end), 1));
            executings.push(end);

            if (executings.length >= concurrency) {
                r = Promise.race(executings);
            }
        }

        return r.then(() => enqueue());
    }

    return enqueue().then(() => Promise.all(rets));
}