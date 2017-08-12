import postQueue from './send-queue'
import Queue from '../../utils/queue'

const queue = new Queue()
const eventListeners = ['keyup', 'click']

eventListeners.map(eventListener => {
  document.addEventListener(eventListener, event => {
    queue.enqueue({event: event, timestamp: Date.now()})
    console.log('event', event)
  })
})

const htmlElementsArray = document.getElementsByTagName('*')
console.log(htmlElementsArray)
window.onload = () => {
  const body = document.body.innerHTML
  console.log(body)
}

setInterval(() => { postQueue(queue.dequeue()) }, 5000)

// should this be 'onbeforeunload'? would we still have access to DOM then?
// window.onbeforeunload(event => {
//   postQueue(queue)
// })