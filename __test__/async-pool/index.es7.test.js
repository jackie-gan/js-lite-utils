import { asyncPool } from "../../src/async-pool/index.es7";

describe('test async pool es6', function() {
    let ret = [];

    const asyncTask = (i) => new Promise((resolve) =>
        setTimeout(() => {
            resolve();
            ret.push(i);
        }, i)
    );

    it('cocurrency is less than iterable array', async function() {
        ret = [];
        await asyncPool(2, [100, 500, 300, 200], asyncTask);
        expect(ret).toEqual([100, 300, 500, 200]);
    });

    it('cocurrency is greater than iterable array', async function() {
        ret = [];
        await asyncPool(5, [100, 500, 300, 200], asyncTask);
        expect(ret).toEqual([100, 200, 300, 500]);
    });

    it('run not promise task', async function() {
        ret = [];
        await asyncPool(2, [100, 500, 300, 200], (i) => {
            ret.push(i);
        });
        expect(ret).toEqual([100, 500, 300, 200]);
    });
});
