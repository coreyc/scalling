import postQueue from './send-queue'
import Queue from '../../utils/queue'

const eventQueue = new Queue()
const htmlQueue = new Queue()

const eventListeners = ['keydown', 'keyup', 'click', 'mouseover',
  'mousedown', 'mouseup', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'scroll', 'navigate']

eventListeners.map(eventListener => {
  document.addEventListener(eventListener, event => {
    eventQueue.enqueue({event: event, timestamp: Date.now()})
    console.log('event', event)
  })
})

const htmlElementsArray = document.getElementsByTagName('*')
// const htmlElementsArray = document.documentElement // gets root of document, alt to above

console.log(htmlElementsArray)
window.onload = () => {
  const body = document.body.innerHTML
  console.log(body)
  postQueue(htmlQueue.enqueue(body))
}

setInterval(() => {
  if (eventQueue.getLength() >= 1) {
    postQueue(eventQueue.dequeue())
  }
}, 5000)

// should this be 'onbeforeunload'? would we still have access to DOM then?
// window.onbeforeunload(event => {
//   postQueue(queue)
// })