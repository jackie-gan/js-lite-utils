import { Queue } from '../../src/data-structure/queue';

describe('test queue', () => {
    it('test empy queue', () => {
        const queue = new Queue();
        expect(queue.queue).toEqual([]);
    });

    it('test enqueue', () => {
        const queue = new Queue();
        queue.enqueue(1);

        expect(queue.queue).toEqual([1]);
    });

    it('test dequeue', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        const element = queue.dequeue();
        expect(element).toEqual(1);
        expect(queue.queue).toEqual([2]);
    });

    it('test peek and toString', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);

        expect(queue.peek()).toEqual(1);
        expect(queue.toString()).toEqual('1,2')
    });

    it('test isEmpty', () => {
        const queue = new Queue();
        queue.enqueue(1);
        queue.dequeue();

        expect(queue.isEmpty()).toEqual(true);
    });
});