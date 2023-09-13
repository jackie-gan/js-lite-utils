/**
 * @link https://github.com/rxaviers/async-pool
 * @link https://juejin.cn/post/6976028030770610213
 */
export async function asyncPool(cocurrency, iterables, iteratorFn) {
    const rets = [];
    const executings = [];

    for (const item of iterables) {
        const p = Promise.resolve().then(() => iteratorFn(item, iterables));
        rets.push(p);

        if (cocurrency <= iterables.length) {
            const end = p.then(() => {
                return executings.splice(executings.indexOf(end), 1)
            });
            executings.push(end);

            if (executings.length >= cocurrency) {
                await Promise.race(executings);
            }
        }
    }

    return Promise.all(rets);
}