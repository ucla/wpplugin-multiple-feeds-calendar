/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/block-library/multiple-feeds-calendar/edit.js":
/*!***********************************************************!*\
  !*** ./src/block-library/multiple-feeds-calendar/edit.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/block-library/multiple-feeds-calendar/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * Test feeds:
 * https://calendar.google.com/calendar/ical/ucla.esat%40gmail.com/public/basic.ics
 * https://calendar.google.com/calendar/ical/eloving%40g.ucla.edu/public/basic.ics
 * https://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics
 * 
 */




const Exit = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    feeds = [],
    className = false
  } = attributes;
  const newFeedNameRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const newFeedUrlRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const [numFeeds, setNumFeeds] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(feeds.length);
  const addFeedHandler = (nameRef, urlRef) => {
    const name = nameRef.current.value;
    const url = urlRef.current.value;
    if (name !== '' && url !== '') {
      feeds.push([name, url]);
      nameRef.current.value = '';
      urlRef.current.value = '';
      setAttributes({
        feeds: feeds
      });
      setNumFeeds(feeds.length);
    } else {
      // empty fields error messaging
    }
  };
  const updateFeedHandler = ref => {};
  const removeFeedHandler = ref => {};
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "feed-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Manage Calender Feeds")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Description of block functionality, etc. goes here."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "feed-list__list-wrapper"
  }, feeds.map(_ref2 => {
    let [name, url] = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(FeedListItem, {
      name: name,
      url: url,
      feedUpdateHandler: updateFeedHandler,
      feedRemoveHandler: removeFeedHandler
    });
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "feed-list__list-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "feed-list__input-feed-name",
    placeholder: "Enter Feed Name",
    ref: newFeedNameRef
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "url",
    className: "feed-list__input-feed-url",
    placeholder: "Enter Feed URL",
    ref: newFeedUrlRef
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    className: "feed-list__btn feed-list__btn-feed-add",
    isPressed: true,
    onClick: function () {
      addFeedHandler(newFeedNameRef, newFeedUrlRef);
    }
  }, "Add"))));
};
const FeedListItem = _ref3 => {
  let {
    updateFeedHandler,
    removeFeedHandler,
    name,
    url
  } = _ref3;
  const nameRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const urlRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: "feed-list__list-item"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    className: "feed-list__input-feed-name",
    placeholder: "Enter Feed Name",
    value: name,
    ref: nameRef
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "url",
    className: "feed-list__input-feed-url",
    placeholder: "Enter Feed URL",
    value: url,
    ref: urlRef
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPressed: true,
    onClick: function () {
      updateFeedHandler(nameRef, urlRef);
    }
  }, "Update"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPressed: true,
    onClick: function () {
      removeFeedHandler(nameRef, urlRef);
    }
  }, " Remove"));
};
/* harmony default export */ __webpack_exports__["default"] = (Exit);

/***/ }),

/***/ "./src/block-library/multiple-feeds-calendar/save.js":
/*!***********************************************************!*\
  !*** ./src/block-library/multiple-feeds-calendar/save.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * 
 * See ./index.php for front-end render.
 * 
 */

const save = attributes => {
  if (attributes.urls) return;

  /** Should never be required.  */
  return null;
};
/* harmony default export */ __webpack_exports__["default"] = (save);

/***/ }),

/***/ "./src/block-library/multiple-feeds-calendar/editor.scss":
/*!***************************************************************!*\
  !*** ./src/block-library/multiple-feeds-calendar/editor.scss ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block-library/multiple-feeds-calendar/block.json":
/*!**************************************************************!*\
  !*** ./src/block-library/multiple-feeds-calendar/block.json ***!
  \**************************************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"ucla-misc-blocks/multiple-feeds-calendar","version":"0.1.0","title":"UCLA: Multiple Feeds Calendar","category":"ucla-misc-blocks","icon":"calendar","description":"UCLA calendar populated with multiple filterable ICS feeds.","supports":{"html":false},"attributes":{"feeds":{"type":"array"}},"textdomain":"ucla-multiple-feeds-calendar","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./view.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************************************!*\
  !*** ./src/block-library/multiple-feeds-calendar/index.js ***!
  \************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/block-library/multiple-feeds-calendar/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/block-library/multiple-feeds-calendar/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/block-library/multiple-feeds-calendar/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/** calendar icon set in block.json is different than this one but use it for now. ESat */
//import { calendar as icon } from '@wordpress/icons';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  //icon,
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map