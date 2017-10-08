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
    if (body.event.type === 'click') {
      const sentItem = JSON.stringify(baseEvent(body))
      console.log('sentItem:', sentItem)
      xhr.send(sentItem)
    }
  }
  if (body.type === 'initialHtml') {
    xhr.send(JSON.stringify(body))
  }
}

const baseEvent = data => {
  return {
    sessionId: data.event.sessionId,
    bubbles: data.event.bubbles,
    cancelBubble: data.event.cancelBubble,
    cancelable: data.event.cancelable,
    defaultPrevented: data.event.defaultPrevented,
    srcElement: data.event.srcElement.localName,
    target: data.event.target.localName,
    timeStamp: data.event.timeStamp,
    type: data.event.type,
    isTrusted: data.event.isTrusted
  }
}

export default sendAjaxRequest