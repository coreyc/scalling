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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ajax = __webpack_require__(3);
	
	var postQueue = function postQueue(queue) {
	  (0, _ajax.sendAjaxRequest)('POST', 'localhost:3000/recordings', queue, function (res) {
	    console.log('res:', res);
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

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map