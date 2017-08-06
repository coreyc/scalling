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

  xhr.send(JSON.stringify({
    x: body.screenX,
    y: body.screenY
  }))
}