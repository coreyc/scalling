import { Queue } from '../utils/queue'

const queue = new Queue()
const eventListeners = ['mousemove', 'keyup', 'click']

eventListeners.map(eventListener => {
  document.addEventListener(eventListener, event => {
    queue.enqueue(event)
    console.log('event', event)
  })
})