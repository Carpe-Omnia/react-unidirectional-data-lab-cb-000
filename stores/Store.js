'use strict';
const EventEmitter = require('events').EventEmitter;

export default class Store extends EventEmitter {
  constructor (initialState) {
    super();
    this.state = initialState;
  }
  addListener (listener) {
    EventEmitter.prototype.addListener.call(this, 'change', listener)
  }

  removeListener (listener) {
    EventEmitter.prototype.removeListener.call(this, 'change', listener)
  }

  setState (state) {
    this.emit('change', state);
    this.state = state;
  }

  getState () {
    return this.state;
  }
}
