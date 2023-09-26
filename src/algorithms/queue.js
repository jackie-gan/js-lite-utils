// 队列
export class Queue {
    constructor(){
        this.queue = [];
    }
    
    enqueue(element){
        this.queue.push(element);
    }

    dequeue(){
        return this.queue.shift();
    }

    isEmpty() {
        return !this.queue.length;
    }

    peek(){
        return this.queue[0];
    }

    toString() {
        return this.queue.toString();
    }
}
