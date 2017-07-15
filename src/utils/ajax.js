const methods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'PATCH']

export default sendAjaxRequest = (method, url, cb) => {
  const xmlHttp = new XMLHttpRequest()

  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === XMLHttpRequest.DONE ) {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
        callback(xmlHttp.responseText);
      }
    }
  }

  xmlHttp.open(method, url, true)
  xmlHttp.send()
}