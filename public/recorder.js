// import { Queue } from '../utils/queue'
// import { postQueue } from './send-queue'

const sendAjaxRequest = (method, url, body, cb) => {
  console.log('body from xhr', body)
  const xhr = new XMLHttpRequest()

  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.readyState == 4 && xhr.status == 200){
        cb(xhr.responseText)
      }
    }
  }

  xhr.send(JSON.stringify({
    x: body.screenX,
    y: body.screenY
  }))
}

function Queue() {

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
}

const postQueue = queue => {
  console.log('queue', queue)
  sendAjaxRequest('POST', 'http://localhost:3000/recordings', queue, res => {
    console.log('res:', res)
  })
}

const queue = new Queue()
const eventListeners = ['keyup', 'click']

eventListeners.map(eventListener => {
  document.addEventListener(eventListener, event => {
    queue.enqueue(event)
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