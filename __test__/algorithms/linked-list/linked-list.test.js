import { LinkedList } from '../../../src/algorithms/linked-list/linked-list';

describe('test linked list', () => {
    it('create empty linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.toString()).toBe('');
    });

    it('add node to linked list', () => {
        const linkedList = new LinkedList();
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();

        linkedList.add(1);
        linkedList.add(2);
        
        expect(linkedList.toString()).toBe('1,2');
        expect(linkedList.tail.next).toBeNull();
    });

    it('prepend node to linked list', () => {
        const linkedList = new LinkedList();
        linkedList.prepend(2);
        expect(linkedList.head.value).toBe(2);
        expect(linkedList.tail.value).toBe(2);
    
        linkedList.add(1);
        linkedList.prepend(3);
    
        expect(linkedList.toString()).toBe('3,2,1');
    });

    it('insert node to linked list', () => {
        const linkedList = new LinkedList();

        linkedList.insert(4, 3);
        expect(linkedList.head.value).toBe(4);
        expect(linkedList.tail.value).toBe(4);
    
        linkedList.insert(3, 2);
        linkedList.insert(2, 1);
        linkedList.insert(1, -7);
        linkedList.insert(10, 9);
    
        expect(linkedList.toString()).toBe('1,4,2,3,10');
    });

    it('find node from linked list', () => {
        const linkedList = new LinkedList();

        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        
        const finded = linkedList.find((nodeValue) => {
            return nodeValue === 2;
        });

        expect(finded.value).toBe(2);

        const notFinded = linkedList.find((nodeValue) => {
            return nodeValue === 4;
        });

        expect(notFinded).toBeNull();
    });

    it('delete node from linked list', () => {
        const linkedList = new LinkedList();
        
        linkedList.add(1);
        linkedList.add(2);
        linkedList.add(3);
        expect(linkedList.toString()).toBe('1,2,3');

        const deleted = linkedList.delete(2);
        expect(linkedList.toString()).toBe('1,3');
        expect(deleted.value).toBe(2);
    });
});