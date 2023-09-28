// 哈希表
import { LinkedList } from './linked-list/linked-list';

export class HashTable {
    constructor(size = 64) {
        this.table = new Array(size).fill(null).map(() => {
            return new LinkedList();
        });

        this.keys = {};
    }

    hash(key) {
        const hash = Array.from(key).reduce((acc, char) => {
            return acc + char.charCodeAt(0);
        }, 0);

        return hash % this.table.length;
    }

    set(key, value) {
        const tableIndex = this.hash(key);
        const list = this.table[tableIndex];
        this.keys[key] = tableIndex;

        const finded = list.find((nodeValue) => {
            return nodeValue.key === key;
        });

        if (!finded) {
            list.add({ key, value });
        } else {
            finded.value.value = value;
        }
    }

    get(key) {
        const tableIndex = this.hash(key);
        const list = this.table[tableIndex];

        const finded = list.find((nodeValue) => {
            return nodeValue.key === key;
        });

        return finded ? finded.value.value : null;
    }

    delete(key) {
        delete this.keys[key];
        const tableIndex = this.hash(key);
        const list = this.table[tableIndex];

        const finded = list.find((nodeValue) => {
            return nodeValue.key === key;
        });

        if (finded) {
            return list.delete(finded);
        }

        return null;
    }

    has(key) {
        return Object.hasOwnProperty.call(this.keys, key);
    }
}