// POST queue to endpoint, 
// create new queue at same time as POST
// keep old queue in memory on client until get successful call back
// then delete the old queue
// add retry logic in case it fails, then delete on success