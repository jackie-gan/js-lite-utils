import { Comparator } from '../../../src/data-structure/util/comparator';

describe('test comparator', () => {
    it('test default comparator function', () => {
        const comparator = new Comparator();
        expect(comparator.equal(1, 1)).toBeTruthy();
        expect(comparator.equal(1, 2)).toBeFalsy();
        expect(comparator.equal('a', 'a')).toBeTruthy();
        expect(comparator.lessThan(1, 2)).toBeTruthy();
        expect(comparator.lessThan(-1, 2)).toBeTruthy();
    });
});