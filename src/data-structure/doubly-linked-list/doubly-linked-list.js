// 双向链表
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
        const node = new DoublyLinkedListNode(value);

        if (this.head) {
            if (position) {
                let i = 0;
                let current = this.head;
                while(i !== position && current) {
                    i++;
                    current = current.next;
                }

                if (current) {
                    current.previous.next = node;
                    node.previous = current.previous;
                    node.next = current;
                    current.previous = node;
                } else {
                    this.add(value);
                }
            } else {
                this.prepend(value);
            }
        } else {
            this.head = this.tail = node;
        }
    }

    delete(value) {
        if (!this.head) return;

        let deletedNode = undefined;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                deletedNode = current;

                if (this.head === deletedNode) {
                    this.head = deletedNode.next;

                    if (this.head) {
                        this.head.previous = null;
                    }

                    if (this.tail === deletedNode) {
                        this.tail = null;
                    }
                } else if (this.tail === deletedNode) {
                    deletedNode.previous.next = null;
                    this.tail = deletedNode.previous;
                } else {
                    deletedNode.previous.next = deletedNode.next;
                    deletedNode.next.previous = deletedNode.previous;
                }

                break;
            }

            current = current.next;
        }

        return deletedNode;
    }

    contains(value) {
        if (!this.head) return false;

        let current = this.head;
        while(current) {
            if (current.value === value) return true;
            current = current.next;
        }

        return false;
    }

    find(callback) {
        if (!this.head || typeof callback !== 'function') return null;

        let current = this.head;
        while (current) {
            if (callback(current.value)) return current;
            current = current.next;
        }

        return current;
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