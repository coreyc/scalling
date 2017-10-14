const eventFactory = (eventType = '', type, options = {}) => {
      switch(eventType) {
        case 'MouseEvent': return new MouseEvent(type, options)
        break
      }
    }
    const arr = [].forEach((itm, idx) => {
      setTimeout((itm => {
        const constructor = [][idx].constructor.split('()')[0]
        console.log(constructor)
        const eventFromFactory = eventFactory(constructor)
        document.querySelector(itm.target).dispatchEvent(eventFactory(constructor, itm.type, {bubbles: itm.bubbles}))
        console.log(itm.target, itm.type, itm.timeStamp)
      }).bind(this, itm, idx), itm.timeStamp)
    })