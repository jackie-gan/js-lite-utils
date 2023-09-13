/**
 * @link https://github.com/rxaviers/async-pool
 * @link https://juejin.cn/post/6976028030770610213
 */
export function asyncPool(concurrency, iterables, iteratorFn) {
    const rets = [];
    const executings = new Set();
    let i = 0;

    function enqueue() {
        if (i === iterables.length) {
            return Promise.resolve();
        }

        const item = iterables[i++];
        const p = Promise.resolve().then(() => iteratorFn(item, iterables));
        const clean = () => executings.delete(p);
        p.then(clean).catch(clean);

        rets.push(p);
        executings.add(p);

        let r = Promise.resolve();

        if (executings.size >= concurrency) {
            r = Promise.race(executings);
        }

        return r.then(() => enqueue());
    }

    return enqueue().then(() => Promise.all(rets));
}