import { LinkedList } from '../linked-list/linked-list';
import { Edge } from './edge';

// 顶点
// 存储方式：邻接表
export class Vertex {
    constructor(value) {
        this.value = value;

        /**
         * @param {Edge} edgeA 
         * @param {Edge} edgeB 
         */
        const compareFunc = (edgeA, edgeB) => {
            if (edgeA.getKey() === edgeB.getKey()) {
                return 0;
            }

            return edgeA.getKey() < edgeB.getKey() ? -1 : 1;
        };

        this.edges = new LinkedList(compareFunc);
    }

    getKey() {
        return this.value;
    }

    addEdge(edge) {
        this.edges.prepend(edge);
    }

    deleteEdge(edge) {
        this.edges.delete(edge);
    }
}
