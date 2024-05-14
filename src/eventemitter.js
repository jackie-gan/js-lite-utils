class EventEmitter {
  constructor() {
    this.subscribers = {};
  }

  on(event, callback) {
    const callbacks = this.subscribers[event] || (this.subscribers[event] = []);

    typeof callback === 'function' && callbacks.push(callback);
    return this;
  }

  off(event, callback) {
    const callbacks = this.subscribers[event] || [];

    if (callback) {
      const index = callbacks.indexOf(callback);
      if (index > -1) callbacks.splice(index, 1);
    } else {
      callbacks.length = 0;
    }

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

  once(event) {
    const callbacks = this.subscribers[event];

    const args = [].slice.call(arguments, 1);
    callbacks.forEach(callback => {
      try {
        callback(...args);
      } finally {
        this.off(event, callback);
      }
    })
  }
}

export default EventEmitter;