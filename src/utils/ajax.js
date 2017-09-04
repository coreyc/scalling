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

  if (body.event.type === 'click') {
    const data = clickType(body)
    const sentItem = JSON.stringify({
      data: data,
      time: body.timestamp
    })
    console.log('sentItem:', sentItem)
    
    xhr.send(sentItem)
  }
}

const clickType = data => {
  return {
    screenX: data.event.screenX,
    screenY: data.event.screenY,
    srcElement: data.event.srcElement,
    target: data.event.target,
    toElement: data.event.toElement
  }
}

export default sendAjaxRequest