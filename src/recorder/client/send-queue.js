// POST queue to endpoint, 
// create new queue at same time as POST
// keep old queue in memory on client until get successful call back
// then delete the old queue
// add retry logic in case it fails, then delete on success
import sendAjaxRequest from '../../utils/ajax'

const postQueue = queue => {
  sendAjaxRequest('POST', 'http://localhost:3000/recordings', queue, res => {
    console.log('res:', res)
  })
}

export default postQueue