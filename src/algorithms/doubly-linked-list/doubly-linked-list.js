import { DoublyLinkedListNode } from './doubly-linked-list-node';

export class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const node = new DoublyLinkedListNode(value);

        if (this.head) {
            node.previous = this.tail;
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = this.tail = node;
        }
    }

    prepend(value) {
        const node = new DoublyLinkedListNode(value);

        if (this.head) {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        } else {
            this.head = this.tail = node;
        }
    }

    insert(value, position) {

    }

    toArray() {
        const arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.value);
            current = current.next;
        }

        return arr;
    }

    toString() {
        return this.toArray().toString();
    }
}