/**
 * @link https://github.com/rxaviers/async-pool
 * @link https://juejin.cn/post/6976028030770610213
 */
export async function asyncPool(cocurrency, iterables, iteratorFn) {
    const rets = [];
    const executings = new Set();

    for (const item of iterables) {
        const p = Promise.resolve().then(() => iteratorFn(item, iterables));
        const clean = () => executings.delete(p);
        p.then(clean).catch(clean);

        rets.push(p);
        executings.add(p);

        if (executings.size >= cocurrency) {
            await Promise.race(executings);
        }
    }

    return Promise.all(rets);
}