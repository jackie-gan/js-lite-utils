import { HashTable } from '../../src/data-structure/hash-table';

describe('test hash table', () => {
    it('test empty hash table', () => {
        const table = new HashTable();
        expect(table.table.length).toBe(64);
    })

    it('test hash', () => {
        const table = new HashTable();
        expect(table.hash('A')).toBe(1);
        expect(table.hash('A1')).toBe(50);
    });

    it('test set get', () => {
        const table = new HashTable();
        table.set('A', 'A');
        expect(table.get('A')).toBe('A');

        table.set('A', 'a');
        expect(table.get('A')).toBe('a');
    });

    it('test delete', () => {
        const table = new HashTable();
        table.set('A', 'A');
        table.set('B', 'B');

        expect(table.has('A')).toBeTruthy();

        table.delete('A');

        expect(table.has('A')).toBeFalsy();
    });
});