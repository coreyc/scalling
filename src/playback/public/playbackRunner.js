const arr = [].forEach(itm => {
      setTimeout((itm => {
        document.querySelector(itm.target).dispatchEvent(new KeyboardEvent(itm.type, {bubbles: itm.bubbles}))
        console.log(itm.target, itm.type, itm.timeStamp)
      }).bind(this, itm), itm.timeStamp)
    })