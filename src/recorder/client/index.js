import postQueue from './send-queue'
import Queue from '../../utils/queue'
import uuid from '../../utils/uuid'
import observeDomChanges from './dom-changes'

let sessionId = ''

const eventQueue = new Queue()
const htmlQueue = new Queue()

const eventListeners = ['keydown', 'keyup', 'click', 'mouseover',
  'mousedown', 'mouseup', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'scroll', 'navigate']

eventListeners.map(eventListener => {
  document.addEventListener(eventListener, event => {
    event.sessionId = sessionId
    eventQueue.enqueue({event: event, timestamp: Date.now()})
    console.log('event:', event)
  })
})

observeDomChanges(htmlQueue)

document.getElementById('buttonToClick').addEventListener('click', () => {
  document.body.appendChild(document.createTextNode( '' ))
})

const htmlElementsArray = document.getElementsByTagName('*')
// const htmlElementsArray = document.documentElement // gets root of document, alt to above

console.log(htmlElementsArray)
window.onload = () => {
  const body = document.body.innerHTML
  console.log(body)
  sessionId = uuid()
  console.log('sessionId', sessionId)
  postQueue(htmlQueue.enqueue(body))
}

setInterval(() => {
  if (eventQueue.getLength() >= 1 && eventQueue.getLength() >= 1) {
    postQueue(eventQueue.dequeue())
    postQueue(htmlQueue.dequeue())
  }
}, 5000)

// should this be 'onbeforeunload'? would we still have access to DOM then?
// window.onbeforeunload(event => {
//   postQueue(queue)
// })