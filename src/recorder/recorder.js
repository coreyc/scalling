import { Queue } from '../utils/queue'
import { sendAjaxRequest } from '../utils/ajax'

const queue = new Queue()
const eventListeners = ['mousemove', 'keyup', 'click']

eventListeners.map(eventListener => {
  document.addEventListener(eventListener, event => {
    queue.enqueue(event)
    console.log('event', event)
  })
})

const postQueue = queue => {
  sendAjaxRequest('POST', 'https://www.google.com', () => {
    console.log('posted')
  })
}

setInterval(postQueue, 5000)