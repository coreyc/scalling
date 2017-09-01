const observeDomChanges = () => {
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      console.log(mutation.type)
    })
  })
  
  // Notify me of everything!
  const observerConfig = {
    attributes: true,
    childList: true,
    characterData: true
  }
  
  // Node, config
  // In this case we'll listen to all changes to body and child nodes
  const targetNode = document.body
  observer.observe(targetNode, observerConfig)
}

export default observeDomChanges