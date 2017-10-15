const eventFactory = (itm, constructor) => {
      switch(constructor) {
        case 'MouseEvent':
          if(itm.type === 'mousemove') {
            document.getElementById('pb_cursor').style.left = itm.pageX
            document.getElementById('pb_cursor').style.top = itm.pageY
          }
          return new MouseEvent(itm.type, {bubbles: itm.bubbles})
        break
        case 'KeyboardEvent': return new KeyboardEvent(itm.type, {bubbles: itm.bubbles, code: itm.code})
        break
      }
    }
    const arr = [].forEach((itm, idx) => {
      setTimeout((itm => {
        const constructor = [][idx].constructor
        document.querySelector(itm.target).dispatchEvent(eventFactory(itm, constructor))
        console.log(itm.target, itm.type, itm.timeStamp)
      }).bind(this, itm, idx), itm.timeStamp)
    })
    
    const moveMouse = () => {
      
    }
    