// 单向链表
import { LinkedListNode } from './linked-list-node'

export class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(value) {
        const node = new LinkedListNode(value);
        if (this.head instanceof LinkedListNode) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = node;
        }
    }

    prepend(value) {
        const node = new LinkedListNode(value);
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    }

    insert(value, position) {
        const node = new LinkedListNode(value);
        const index = position < 0 ? 0 : position;
        if (index === 0) {
            this.prepend(value);
        } else {
            let i = 1;
            let current = this.head;

            while (i !== position && current) {
                i++;
                current = current.next;
            }

            if (current) {
                node.next = current.next;
                current.next = node;
            } else {
                if (this.tail) {
                    this.tail.next = node;
                    this.tail = node;
                } else {
                    this.tail = node;
                    this.head = node;
                }
            }
        }
    }

    delete(value) {
        if (!this.head) return null;

        if (this.head.value === value) {
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
            }
            return this.head;
        }

        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }

        if (!current.next) return null;

        if (current.next === this.tail) {
            this.tail = current;
        }
        const deleted = current.next;
        current.next = current.next.next;

        return deleted;
    }

    contains(value) {
        if (!this.head) return false;

        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }

    find(callback) {
        if (!this.head || typeof callback !== 'function') return null;

        let current = this.head;
        while (current) {
            if (callback(current.value)) break;
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