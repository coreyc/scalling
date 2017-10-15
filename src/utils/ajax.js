const methods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'PATCH']

const sendAjaxRequest = (method, url, body, cb) => {
  console.log('body from xhr', body)
  const xhr = new XMLHttpRequest()

  xhr.open(method, url, true)
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.readyState == 4 && xhr.status == 200) {
        cb(xhr.responseText)
      }
    }
  }

  if (body.hasOwnProperty('event')) {
    const sentItem = JSON.stringify(pluckEventProps(body))
    console.log('sentItem:', sentItem)
    xhr.send(sentItem)
  }
  if (body.type === 'initialHtml') {
    xhr.send(JSON.stringify(body))
  }
}

const pluckEventProps = data => {
  const constructor = Object.getPrototypeOf(data.event).constructor.name
  switch (constructor) {
    case 'MouseEvent': return {
      sessionId: data.event.sessionId,
      bubbles: data.event.bubbles,
      cancelBubble: data.event.cancelBubble,
      cancelable: data.event.cancelable,
      constructor: constructor,
      defaultPrevented: data.event.defaultPrevented,
      pageX: data.event.pageX,
      pageY: data.event.pageY,
      srcElement: data.event.srcElement.localName,
      target: data.event.target.localName,
      timeStamp: data.event.timeStamp,
      type: data.event.type,
      isTrusted: data.event.isTrusted
    }
    break

    case 'KeyboardEvent': return {
      sessionId: data.event.sessionId,
      bubbles: data.event.bubbles,
      cancelBubble: data.event.cancelBubble,
      cancelable: data.event.cancelable,
      code: data.event.code,
      constructor: constructor,
      defaultPrevented: data.event.defaultPrevented,
      srcElement: data.event.srcElement.localName,
      target: data.event.target.localName,
      timeStamp: data.event.timeStamp,
      type: data.event.type,
      isTrusted: data.event.isTrusted
    }
    break
  }
}

export default sendAjaxRequest