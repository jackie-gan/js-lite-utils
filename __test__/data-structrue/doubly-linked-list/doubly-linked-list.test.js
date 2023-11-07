import { DoublyLinkedList } from '../../../src/data-structure/doubly-linked-list/doubly-linked-list';

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
    });

    it('prepned node to linked list', () => {
        const dLinkedList = new DoublyLinkedList();

        dLinkedList.prepend(2);
        expect(dLinkedList.head.value).toBe(2);
        expect(dLinkedList.tail.value).toBe(2);

        dLinkedList.prepend(1);
        dLinkedList.add(3);

        expect(dLinkedList.head.next.next).toBe(dLinkedList.tail);
        expect(dLinkedList.head.next).toBe(dLinkedList.tail.previous);
        expect(dLinkedList.head).toBe(dLinkedList.tail.previous.previous);
        expect(dLinkedList.toString()).toBe('1,2,3');
    });

    it('insert node to linked list', () => {
        const dLinkedList = new DoublyLinkedList();

        dLinkedList.add(1);
        dLinkedList.add(3);

        expect(dLinkedList.toString()).toBe('1,3');

        dLinkedList.insert(2, 1);

        expect(dLinkedList.head.next.value).toBe(2);
        expect(dLinkedList.tail.previous.value).toBe(2);
        expect(dLinkedList.toString()).toBe('1,2,3');
    });

    it('delete node from linked list', () => {
        const dLinkedList = new DoublyLinkedList();

        dLinkedList.add(1);
        dLinkedList.add(2);
        dLinkedList.add(3);

        expect(dLinkedList.toString()).toBe('1,2,3');

        const deletedNode = dLinkedList.delete(2);
        expect(dLinkedList.toString()).toBe('1,3');
        expect(deletedNode.value).toBe(2);
    });

    it('find node from linked list', () => {
        const dLinkedList = new DoublyLinkedList();

        dLinkedList.add(1);
        dLinkedList.add(2);
        dLinkedList.add(3);
        
        const finded = dLinkedList.find((nodeValue) => {
            return nodeValue === 2;
        });

        expect(finded.value).toBe(2);

        const notFinded = dLinkedList.find((nodeValue) => {
            return nodeValue === 4;
        });

        expect(notFinded).toBeNull();
    })
});