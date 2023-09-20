import { DoublyLinkedList } from '../../../src/algorithms/doubly-linked-list/doubly-linked-list';

describe('test doubly linked list', () => {
    it('create empty linked list', () => {
        const dLinkedList = new DoublyLinkedList();
        expect(dLinkedList.toString()).toBe('')
    });

    it('add node to linked list', () => {
        const dLinkedList = new DoublyLinkedList();
        expect(dLinkedList.head).toBeNull();
        expect(dLinkedList.tail).toBeNull();

        dLinkedList.add(1);
        dLinkedList.add(2);

        expect(dLinkedList.head.next.value).toBe(2);
        expect(dLinkedList.tail.previous.value).toBe(1);
        expect(dLinkedList.toString()).toBe('1,2');
    })
});