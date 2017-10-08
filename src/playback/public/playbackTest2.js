const arr = [].forEach(itm => {
      setTimeout((itm => {
        console.log(itm.timeStamp)
      }).bind(this, itm), 2000)
    })