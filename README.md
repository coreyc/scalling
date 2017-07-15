# scalling
Architecture will be as follows:
- client side script to place in web page
  - can be hosted yourself or (recommended) on edge-cached CDN
- node server for recording and playback (may split up into two services at some point for perf reasons)
- mongodb instance to spin up on same server for persistence
- analytics UI hosted from node web server