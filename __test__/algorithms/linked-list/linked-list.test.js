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

    });
});