/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _sendQueue = __webpack_require__(2);
	
	var _sendQueue2 = _interopRequireDefault(_sendQueue);
	
	var _queue = __webpack_require__(4);
	
	var _queue2 = _interopRequireDefault(_queue);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var queue = new _queue2.default();
	var eventListeners = ['keyup', 'click'];
	
	eventListeners.map(function (eventListener) {
	  document.addEventListener(eventListener, function (event) {
	    queue.enqueue({ event: event, timestamp: Date.now() });
	    console.log('event', event);
	  });
	});
	
	var htmlElementsArray = document.getElementsByTagName('*');
	console.log(htmlElementsArray);
	window.onload = function () {
	  var body = document.body.innerHTML;
	  console.log(body);
	};
	
	setInterval(function () {
	  if (queue.getLength() >= 1) {
	    (0, _sendQueue2.default)(queue.dequeue());
	  }
	}, 5000);
	
	// should this be 'onbeforeunload'? would we still have access to DOM then?
	// window.onbeforeunload(event => {
	//   postQueue(queue)
	// })

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ajax = __webpack_require__(3);
	
	var _ajax2 = _interopRequireDefault(_ajax);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var postQueue = function postQueue(queue) {
	  (0, _ajax2.default)('POST', 'http://localhost:3000/recording', queue, function (res) {
	    console.log('res from postQueue:', res);
	  });
	}; // POST queue to endpoint, 
	// create new queue at same time as POST
	// keep old queue in memory on client until get successful call back
	// then delete the old queue
	// add retry logic in case it fails, then delete on success
	exports.default = postQueue;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var methods = ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'PATCH'];
	
	var sendAjaxRequest = function sendAjaxRequest(method, url, body, cb) {
	  console.log('body from xhr', body);
	  var xhr = new XMLHttpRequest();
	
	  xhr.open(method, url, true);
	  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	  xhr.onreadystatechange = function () {
	    if (xhr.readyState === XMLHttpRequest.DONE) {
	      if (xhr.readyState == 4 && xhr.status == 200) {
	        cb(xhr.responseText);
	      }
	    }
	  };
	
	  xhr.send(JSON.stringify({
	    x: body.screenX,
	    y: body.screenY
	  }));
	};
	
	exports.default = sendAjaxRequest;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Queue;
	function Queue() {
	
	  var queue = [];
	  var offset = 0;
	
	  this.getLength = function () {
	    return queue.length - offset;
	  };
	
	  this.isEmpty = function () {
	    return queue.length == 0;
	  };
	
	  this.enqueue = function (item) {
	    queue.push(item);
	  };
	
	  this.dequeue = function () {
	    if (queue.length == 0) return undefined;
	
	    var item = queue[offset];
	
	    if (++offset * 2 >= queue.length) {
	      queue = queue.slice(offset);
	      offset = 0;
	    }
	
	    return item;
	  };
	
	  this.peek = function () {
	    return queue.length > 0 ? queue[offset] : undefined;
	  };
	
	  this.clear = function () {
	    if (queue.length !== 0) queue = [];
	  };
	};

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map