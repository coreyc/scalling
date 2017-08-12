import expect from 'expect.js'
import Queue from '../../src/utils/queue'

describe('QUEUE', () => {
  it('should enqueue an item', () => {
    const queue = new Queue()
    queue.enqueue('an item')
    expect(queue.getLength()).to.equal(1)
  })

  it('should dequeue an item', () => {
    const queue = new Queue()
    queue.enqueue('an item')
    expect(queue.dequeue()).to.equal('an item')
  })

  it('should get length of queue', () => {
    const queue = new Queue()
    queue.enqueue('an item')
    queue.enqueue(5)
    queue.enqueue({prop: 'val'})
    expect(queue.getLength()).to.equal(3)
  })

  it('should return that queue is empty', () => {
    const queue = new Queue()
    queue.enqueue('an item')
    queue.enqueue(5)
    queue.enqueue({prop: 'val'})
    queue.dequeue()
    queue.dequeue()
    queue.dequeue()
    expect(queue.isEmpty()).to.equal(true)
  })

  it('should return that queue is not empty', () => {
    const queue = new Queue()
    queue.enqueue('an item')
    queue.enqueue(5)
    queue.enqueue({prop: 'val'})
    queue.dequeue()
    queue.dequeue()
    expect(queue.isEmpty()).to.equal(false)
  })

  it('should return first item queued', () => {
    const queue = new Queue()
    queue.enqueue('an item')
    queue.enqueue(5)
    queue.enqueue({prop: 'val'})
    expect(queue.peek()).to.equal('an item')
  })

  it('should clear queue', () => {
    const queue = new Queue()
    queue.enqueue('an item')
    queue.enqueue(5)
    queue.enqueue({prop: 'val'})
    queue.clear()
    expect(queue.isEmpty()).to.equal(true)
  })
})