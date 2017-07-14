'use strict';

export const Queue = () => {

  let queue  = [];
  let offset = 0;

  this.getLength = () => {
    return (queue.length - offset);
  }

  this.isEmpty = () => {
    return (queue.length == 0);
  }

  this.enqueue = item => {
    queue.push(item);
  }

  this.dequeue = () => {
    if (queue.length == 0) return undefined;

    const item = queue[offset];

    if (++ offset * 2 >= queue.length) {
      queue  = queue.slice(offset);
      offset = 0;
    }

    return item;
  }

  this.peek = () => {
    return (queue.length > 0 ? queue[offset] : undefined);
  }

  this.clear = () => {
    if (queue.length !== 0) queue = [];
  }
};