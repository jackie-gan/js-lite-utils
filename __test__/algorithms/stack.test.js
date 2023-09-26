import { Stack } from '../../src/algorithms/stack';

describe('test Stack', () => {
    it('test empty stack', () => {
        const stack = new Stack();
        expect(stack.stack).toEqual([]);
    });

    it('test push', () => {
        const stack = new Stack();
        stack.push(1);

        expect(stack.stack).toEqual([1]);
    });

    it('test pop', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.pop();

        expect(stack.stack).toEqual([1]);
    });

    it('test peek', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);

        expect(stack.peek()).toBe(2);
        expect(stack.stack).toEqual([1, 2]);
    });

    it('test isEmpty', () => {
        const stack = new Stack();
        stack.push(1);
        stack.pop();

        expect(stack.isEmpty()).toBeTruthy();
    });

    it('test toString', () => {
        const stack = new Stack();
        stack.push(1);
        stack.push(2);

        expect(stack.toString()).toBe('1,2');
    });
});
