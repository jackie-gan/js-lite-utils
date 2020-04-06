class EventEmitter {
  constructor() {
    this.subscribers = {};
  }

  on(event, callback) {
    const callbacks = this.subscribers[event] || (this.subscribers[event] = []);

    typeof callback === 'function' && callbacks.push(callback);
    return this;
  }

  emit(event) {
    const callbacks = this.subscribers[event];

    const args = [].slice.call(arguments, 1);
    callbacks.forEach(callback => {
      callback(...args);
    });

    return this
  }
}

export default EventEmitter;