import { Queue } from '../utils/queue'
import { postQueue } from './send-queue'

const queue = new Queue()
const eventListeners = ['mousemove', 'keyup', 'click']

eventListeners.map(eventListener => {
  document.addEventListener(eventListener, event => {
    queue.enqueue(event)
    console.log('event', event)
  })
})

setInterval(postQueue(queue), 5000)

// should this be 'onbeforeunload'? would we still have access to DOM then?
window.onunload(event => {
  postQueue(queue)
})