(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(2)
	__vue_script__ = __webpack_require__(6)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/input.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(19)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/github/vue-tagsinput/src/input.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-607a9ed3&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./input.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-607a9ed3&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./input.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.tags-input[_v-607a9ed3] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-flex-wrap: wrap;\n        -ms-flex-wrap: wrap;\n            flex-wrap: wrap;\n    box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);\n    min-height: 28px;\n}\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if (media) {
			styleElement.setAttribute("media", media);
		}

		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _events;

	var _templateObject = _taggedTemplateLiteral(['insert'], ['insert']),
	    _templateObject2 = _taggedTemplateLiteral(['activeOther'], ['activeOther']),
	    _templateObject3 = _taggedTemplateLiteral(['active'], ['active']),
	    _templateObject4 = _taggedTemplateLiteral(['remove'], ['remove']);

	var _lib = __webpack_require__(7);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // <template>
	//     <div :class="klass.container" @click.self="inputLast">
	//         <template v-for="(index, item) in tags" :track-by="trackBy">
	//             <typing :index="index"></typing>
	//             <tag
	//                 :text="item | getText"
	//                 :remove="item | getRemoveHandle index">
	//             </tag>
	//         </template>
	//         <typing :index="length"></typing>
	//     </div>
	// </template>
	// <style scoped>
	// .tags-input {
	//     display: flex;
	//     flex-direction: row;
	//     align-items: center;
	//     flex-wrap: wrap;
	//     box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
	//     min-height: 28px;
	// }
	// </style>
	// <script>


	exports.default = {
	    props: {
	        tags: {
	            twoWay: true,
	            type: Array,
	            required: true
	        },
	        klass: {
	            type: Object,
	            default: function _default() {
	                return _lib.klass;
	            }
	        },
	        insert: {
	            type: Function,
	            default: function _default(text) {
	                return text;
	            }
	        },
	        render: {
	            type: Function,
	            default: function _default(item) {
	                return item;
	            }
	        },
	        readOnly: {
	            type: Function,
	            default: function _default(item) {
	                return false;
	            }
	        },
	        trackBy: {
	            type: String,
	            default: '$index'
	        }
	    },
	    computed: {
	        length: function length() {
	            return this.tags.length;
	        }
	    },
	    events: (_events = {}, _defineProperty(_events, (0, _lib.E)(_templateObject), function (index, text) {
	        var tag = this.insert(text);
	        tag && !this.dedupe(tag) && this.tags.splice(index, 0, tag);
	    }), _defineProperty(_events, (0, _lib.E)(_templateObject2), function (index) {
	        index >= 0 && index <= this.length && this.$broadcast((0, _lib.E)(_templateObject3), index);
	    }), _defineProperty(_events, (0, _lib.E)(_templateObject4), 'removeTag'), _events),
	    methods: {
	        removeTag: function removeTag(index) {
	            if (index > -1) {
	                var canRM = !this.readOnly(this.tags[index]);
	                canRM && this.tags.splice(index, 1);
	            }
	        },
	        inputLast: function inputLast() {
	            this.$broadcast((0, _lib.E)(_templateObject3), this.length);
	        },
	        dedupe: function dedupe(tag) {
	            var _this = this;

	            if (this.trackBy === '$index') return this.tags.includes(tag);else {
	                var _ret = function () {
	                    var field = tag[_this.trackBy];
	                    return {
	                        v: _this.tags.some(function (item) {
	                            return item[_this.trackBy] === field;
	                        })
	                    };
	                }();

	                if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	            }
	        }
	    },
	    filters: {
	        getText: function getText(item) {
	            return this.render(item);
	        },
	        getRemoveHandle: function getRemoveHandle(item, index) {
	            return this.readOnly(item) ? null : this.removeTag.bind(this, index);
	        }
	    },
	    components: {
	        tag: __webpack_require__(8),
	        typing: __webpack_require__(13)
	    }
	};
	// </script>

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.E = E;
	var KEY_CODE = exports.KEY_CODE = {
	    LEFT: 37,
	    RIGHT: 39,
	    TAB: 9,
	    BACKSPACE: 8
	};

	//inner event name parser
	function E(str) {
	    return str[0] + '.vue-tagsinput';
	}

	var klass = exports.klass = {
	    container: 'tags-input',
	    input: 'input',
	    gap: 'gap',
	    tag: 'tag'
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(9)
	__vue_script__ = __webpack_require__(11)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/tag.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(12)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/github/vue-tagsinput/src/tag.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-066e46e3&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tag.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-066e46e3&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\n.tag[_v-066e46e3] {\n    border: 1px solid #e0e0e0;\n    border-radius: 3px;\n    color: #858585;\n    font-weight: normal;\n    font-size: 12px;\n    padding: 0 0.5ch;\n}\n.remove[_v-066e46e3] {\n    cursor: pointer;\n}\n.remove[_v-066e46e3]::after{\n    color: rgba(0, 0, 0, 0.6);\n    content: \"\\2A2F\";\n    padding-left: 1px;\n}\n.hl-click[_v-066e46e3]:hover:active {\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n", ""]);

	// exports


/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	// <template>
	//     <span :class="klass.tag">
	//         {{text}}
	//         <span v-if="remove"
	//             class="remove hl-click"
	//             @click="remove">
	//         </span>
	//     </span>
	// </template>
	// <style scoped>
	// .tag {
	//     border: 1px solid #e0e0e0;
	//     border-radius: 3px;
	//     color: #858585;
	//     font-weight: normal;
	//     font-size: 12px;
	//     padding: 0 0.5ch;
	// }
	// .remove {
	//     cursor: pointer;
	// }
	// .remove::after{
	//     color: rgba(0, 0, 0, 0.6);
	//     content: "\2a2f";
	//     padding-left: 1px;
	// }
	// .hl-click:hover:active {
	//     box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
	// }
	// </style>
	// <script>
	exports.default = {
	    props: {
	        text: {
	            type: String,
	            required: true
	        },
	        remove: {
	            type: Function
	        }
	    },
	    computed: {
	        klass: function klass() {
	            return this.$parent.klass;
	        }
	    }
	};
	// </script>

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "\n<span :class=\"klass.tag\" _v-066e46e3=\"\">\n    {{text}}\n    <span v-if=\"remove\" class=\"remove hl-click\" @click=\"remove\" _v-066e46e3=\"\">\n    </span>\n</span>\n";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(14)
	__vue_script__ = __webpack_require__(16)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/typing.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(18)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/home/jxli/github/vue-tagsinput/src/typing.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0aec893e&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./typing.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0aec893e&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./typing.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "\ninput.input[_v-0aec893e] {\n    outline: none;\n    box-shadow: none;\n    border: none;\n    background-color: transparent;\n    font-family: monospace;\n    padding: 0.5ch;\n}\n.gap[_v-0aec893e] {\n    -webkit-flex-basis: 7px;\n        -ms-flex-preferred-size: 7px;\n            flex-basis: 7px;\n}\n", ""]);

	// exports


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _templateObject = _taggedTemplateLiteral(['focus'], ['focus']),
	    _templateObject2 = _taggedTemplateLiteral(['active'], ['active']),
	    _templateObject3 = _taggedTemplateLiteral(['insert'], ['insert']),
	    _templateObject4 = _taggedTemplateLiteral(['blur'], ['blur']),
	    _templateObject5 = _taggedTemplateLiteral(['activeOther'], ['activeOther']),
	    _templateObject6 = _taggedTemplateLiteral(['remove'], ['remove']);

	var _vue = __webpack_require__(17);

	var _vue2 = _interopRequireDefault(_vue);

	var _lib = __webpack_require__(7);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); } // <template>
	//     <input v-if="typing"
	//         :class="klass.input"
	//         v-el:input
	//         type="text"
	//         v-model="text"
	//         @blur="finish"
	//         @keydown="keyPress"
	//         :style="{width: 2 + charLen(text) + 'ch'}" />
	//     <span v-else
	//         :class="klass.gap" @click="begin">&nbsp;</span>
	// </template>
	// <style scoped>
	// input.input {
	//     outline: none;
	//     box-shadow: none;
	//     border: none;
	//     background-color: transparent;
	//     font-family: monospace;
	//     padding: 0.5ch;
	// }
	// .gap {
	//     flex-basis: 7px;
	// }
	// </style>
	// <script>


	exports.default = {
	    props: {
	        index: {
	            type: Number,
	            required: true
	        }
	    },
	    data: function data() {
	        return {
	            typing: false,
	            text: ''
	        };
	    },

	    computed: {
	        klass: function klass() {
	            return this.$parent.klass;
	        }
	    },
	    watch: {
	        typing: function typing(val) {
	            var _this = this;

	            val && _vue2.default.nextTick(function (_) {
	                var $el = _this.$els.input;
	                _this.$dispatch((0, _lib.E)(_templateObject), $el);
	                $el.focus();
	            });
	        }
	    },
	    events: _defineProperty({}, (0, _lib.E)(_templateObject2), function (index) {
	        this.typing = index === this.index;
	    }),
	    methods: {
	        begin: function begin() {
	            this.typing = true;
	        },
	        finish: function finish() {
	            var inactive = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	            var result = this.text.trim();
	            result && this.$dispatch((0, _lib.E)(_templateObject3), this.index, result);
	            this.text = '';
	            this.typing = !inactive;
	            inactive && this.$dispatch((0, _lib.E)(_templateObject4), this.$els.input);
	        },
	        charLen: function charLen(str) {
	            var charNum = 0;
	            for (var i = 0; i < str.length; ++i) {
	                charNum += str.charCodeAt(i) > 127 ? 2 : 1;
	            }
	            return charNum;
	        },
	        keyPress: function keyPress(e) {
	            var $input = this.$els.input;
	            var cursor = $input.selectionStart;
	            var valLen = $input.value.length;
	            var key = e.keyCode;
	            var native = false;

	            if (key === _lib.KEY_CODE.RIGHT && cursor === valLen) {
	                valLen === 0 && this.$dispatch((0, _lib.E)(_templateObject5), this.index + 1);
	            } else if (key === _lib.KEY_CODE.LEFT && cursor === 0) {
	                valLen === 0 && this.$dispatch((0, _lib.E)(_templateObject5), this.index - 1);
	            } else if (key === _lib.KEY_CODE.BACKSPACE && cursor === 0) {
	                this.$dispatch((0, _lib.E)(_templateObject6), this.index - 1);
	            } else if (key === _lib.KEY_CODE.TAB) {
	                this.finish(false);
	            } else native = true;

	            !native && e.preventDefault();
	        }
	    }
	};
	// </script>

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "\n<input v-if=\"typing\" :class=\"klass.input\" v-el:input=\"\" type=\"text\" v-model=\"text\" @blur=\"finish\" @keydown=\"keyPress\" :style=\"{width: 2 + charLen(text) + 'ch'}\" _v-0aec893e=\"\">\n<span v-else=\"\" :class=\"klass.gap\" @click=\"begin\" _v-0aec893e=\"\">&nbsp;</span>\n";

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = "\n<div :class=\"klass.container\" @click.self=\"inputLast\" _v-607a9ed3=\"\">\n    <template v-for=\"(index, item) in tags\" :track-by=\"trackBy\">\n        <typing :index=\"index\" _v-607a9ed3=\"\"></typing>\n        <tag :text=\"item | getText\" :remove=\"item | getRemoveHandle index\" _v-607a9ed3=\"\">\n        </tag>\n    </template>\n    <typing :index=\"length\" _v-607a9ed3=\"\"></typing>\n</div>\n";

/***/ }
/******/ ])));
//# sourceMappingURL=vue-tagsinput.js.map