(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(2)
	
	/* script */
	__vue_exports__ = __webpack_require__(6)
	
	/* template */
	var __vue_template__ = __webpack_require__(20)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-2a0762c6"
	
	module.exports = __vue_exports__


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
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2a0762c6&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-2a0762c6&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
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
	exports.push([module.id, "\n.tags-input[data-v-2a0762c6] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.3);\n  font-size: 0.75rem;\n  padding: 0.1rem 0\n}\n.placeholder[data-v-2a0762c6] {\n  display: inline-block;\n  color: #A9A9A9;\n  line-height: 2em;\n  white-space: nowrap;\n}\n", ""]);
	
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
	
	var _vuept = __webpack_require__(7);
	
	var _lib = __webpack_require__(9);
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    /**
	     * Array<{
	     *   text: String,
	     *   readOnly: Boolean,
	     *   invalid: Boolean
	     * }>
	     */
	    tags: _vuept.arr.required,
	    placeholder: String,
	    klass: _vuept.obj.default(function () {
	      return _lib.klass;
	    })
	  },
	  data: function data() {
	    return {
	      typingIndex: -1
	    };
	  },
	
	  computed: {
	    normalizeTagItems: function normalizeTagItems() {
	      return this.tags.map(function (item) {
	        return typeof item === 'string' ? { text: item } : item;
	      }).concat(null);
	    },
	    showPlaceholder: function showPlaceholder() {
	      return this.placeholder && this.typingIndex < 0;
	    },
	    length: function length() {
	      return this.tags.length;
	    }
	  },
	  methods: {
	    focus: function focus(index) {
	      if (this.typingIndex === -1) {
	        this.$emit('focus', index);
	      }
	      this.typingIndex = index;
	    },
	    blur: function blur(index) {
	      // it will be false when caused by keyPress events
	      if (index === this.typingIndex) {
	        this.$emit('blur', index);
	        this.typingIndex = -1;
	      }
	    },
	    removeTag: function removeTag(index) {
	      if (index >= 0 && !this.tags[index].readOnly) {
	        this.$emit('tags-change', index, undefined);
	      }
	    },
	    insertTag: function insertTag(index, text) {
	      this.$emit('tags-change', index, text);
	    },
	    activeOther: function activeOther(index) {
	      if (index >= 0 && index <= this.length) {
	        this.typingIndex = index;
	      }
	    },
	    getRemoveHandle: function getRemoveHandle(item, index) {
	      var _this = this;
	
	      return item.readOnly ? null : function () {
	        return _this.removeTag(index);
	      };
	    }
	  },
	  components: {
	    tag: __webpack_require__(10),
	    typing: __webpack_require__(15)
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	const types = __webpack_require__(8)
	
	const props = {
	  validator(func) {
	    return {validator: func}
	  }
	}
	const proto = {
	  get required() {
	    return {
	      type: this._type,
	      required: true
	    }
	  },
	  default(_default) {
	    return {
	      type: this._type,
	      default: _default
	    }
	  }
	}
	
	Object.keys(types).forEach(t => {
	  props[t] = Object.create(proto, {
	    _type: {
	      value: types[t]
	    }
	  })
	})
	
	module.exports = props

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  num: Number,
	  str: String,
	  bool: Boolean,
	  func: Function,
	  obj: Object,
	  arr: Array,
	  any: null
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var KEY_CODE = exports.KEY_CODE = {
	  LEFT: 37,
	  RIGHT: 39,
	  TAB: 9,
	  BACKSPACE: 8
	};
	
	var klass = exports.klass = {
	  container: 'tags-input',
	  input: 'input',
	  gap: 'gap',
	  tag: 'tag',
	  placeholder: 'placeholder'
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(11)
	
	/* script */
	__vue_exports__ = __webpack_require__(13)
	
	/* template */
	var __vue_template__ = __webpack_require__(14)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-34316b96"
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-34316b96&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-34316b96&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.tag[data-v-34316b96] {\n  border: 1px solid #e0e0e0;\n  border-radius: 3px;\n  color: #858585;\n  font-weight: normal;\n  font-size: 1.1em;\n  padding: 0 0.5ch;\n}\n.tag[invalid][data-v-34316b96] {\n  border: 1px solid red;\n}\n.hl-click[data-v-34316b96] {\n  cursor: pointer;\n}\n.hl-click[data-v-34316b96]::after {\n  color: rgba(0, 0, 0, 0.6);\n  content: \"\\2A2F\";\n  padding-left: 1px;\n}\n.hl-click[data-v-34316b96]:hover:active {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n}\n", ""]);
	
	// exports


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuept = __webpack_require__(7);
	
	exports.default = {
	  props: {
	    text: _vuept.str.required,
	    remove: [Function, null],
	    invalid: _vuept.bool.default(false)
	  },
	  computed: {
	    klass: function klass() {
	      return this.$parent.klass;
	    }
	  }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('span', {
	    class: _vm.klass.tag,
	    attrs: {
	      "invalid": _vm.invalid
	    }
	  }, ["\n  " + _vm._s(_vm.text) + "\n  ", (_vm.remove) ? _vm._h('span', {
	    staticClass: "hl-click",
	    on: {
	      "click": _vm.remove
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}
	
	/* styles */
	__webpack_require__(16)
	
	/* script */
	__vue_exports__ = __webpack_require__(18)
	
	/* template */
	var __vue_template__ = __webpack_require__(19)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-72f843ab"
	
	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(17);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-72f843ab&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./typing.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-72f843ab&scoped=true!./../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./typing.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "\ninput.input[data-v-72f843ab] {\n  outline: none;\n  box-shadow: none;\n  border: none;\n  background-color: transparent;\n  font-family: monospace;\n  padding: 0 0.5ch;\n  line-height: 2em;\n}\n.gap[data-v-72f843ab]:last-child {\n  flex: 1;\n}\n", ""]);
	
	// exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuept = __webpack_require__(7);
	
	var _lib = __webpack_require__(9);
	
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports.default = {
	  props: {
	    index: _vuept.num.required,
	    typing: _vuept.bool.required,
	    handleInsert: _vuept.func.required,
	    handleRemove: _vuept.func.required,
	    activeOther: _vuept.func.required
	  },
	  data: function data() {
	    return {
	      text: ''
	    };
	  },
	
	  computed: {
	    baseWidth: function baseWidth() {
	      return this.typing ? 2 : 0;
	    },
	    klass: function klass() {
	      return this.$parent.klass;
	    },
	    trimText: function trimText() {
	      return this.text.trim();
	    }
	  },
	  watch: {
	    typing: function typing(val) {
	      var _this = this;
	
	      val && this.$nextTick(function () {
	        var $el = _this.$refs.input;
	        $el.focus();
	      });
	    }
	  },
	  methods: {
	    preventNativeActive: function preventNativeActive(e) {
	      if (!this.typing) e.preventDefault();
	    },
	    finishEditing: function finishEditing() {
	      this.addTag();
	      this.$emit('blur', this.index);
	    },
	    addTag: function addTag() {
	      var trimText = this.trimText;
	
	      if (trimText) {
	        this.handleInsert(this.index, trimText);
	        this.text = '';
	        return trimText;
	      }
	    },
	    charLen: function charLen(str) {
	      var charNum = 0;
	      for (var i = 0; i < str.length; ++i) {
	        charNum += str.charCodeAt(i) > 127 ? 2 : 1;
	      }
	      return charNum;
	    },
	    keyPress: function keyPress(e) {
	      var _this2 = this;
	
	      var $input = this.$refs.input;
	      var cursor = $input.selectionStart;
	      var valLen = $input.value.length;
	      var key = e.keyCode;
	      var native = false;
	
	      if (key === _lib.KEY_CODE.RIGHT && valLen === 0) {
	        this.activeOther(this.index + 1);
	      } else if (key === _lib.KEY_CODE.LEFT && valLen === 0) {
	        this.activeOther(this.index - 1);
	      } else if (key === _lib.KEY_CODE.BACKSPACE && cursor === 0) {
	        var index = this.index - 1;
	        this.handleRemove(index);
	        this.activeOther(index);
	      } else if (key === _lib.KEY_CODE.TAB) {
	        (function () {
	          var index = _this2.index + 1;
	          _this2.addTag() && _this2.$nextTick(function () {
	            return _this2.activeOther(index);
	          });
	        })();
	      } else native = true;
	
	      !native && e.preventDefault();
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('span', {
	    class: _vm.klass.gap,
	    on: {
	      "click": function($event) {
	        _vm.$emit('click')
	      }
	    }
	  }, [_vm._h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.text),
	      expression: "text"
	    }],
	    ref: "input",
	    class: _vm.klass.input,
	    style: ({
	      width: _vm.baseWidth + _vm.charLen(_vm.text) + 'ch'
	    }),
	    attrs: {
	      "type": "text"
	    },
	    domProps: {
	      "value": _vm._s(_vm.text)
	    },
	    on: {
	      "mousedown": _vm.preventNativeActive,
	      "blur": _vm.finishEditing,
	      "keydown": _vm.keyPress,
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.text = $event.target.value
	      }
	    }
	  }), " ", (!_vm.typing) ? _vm._t("default") : _vm._e()])
	},staticRenderFns: []}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;
	  return _vm._h('div', {
	    class: _vm.klass.container
	  }, [_vm._l((_vm.normalizeTagItems), function(item, index) {
	    return [_vm._h('typing', {
	      attrs: {
	        "index": index,
	        "typing": index === _vm.typingIndex,
	        "handle-insert": _vm.insertTag,
	        "handle-remove": _vm.removeTag,
	        "active-other": _vm.activeOther
	      },
	      on: {
	        "click": function($event) {
	          _vm.focus(index)
	        },
	        "blur": function($event) {
	          _vm.blur(index)
	        }
	      }
	    }, [_vm._h('span', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (index === _vm.length && _vm.showPlaceholder),
	        expression: "index === length && showPlaceholder"
	      }],
	      class: _vm.klass.placeholder
	    }, [_vm._s(_vm.placeholder)])]), " ", (index !== _vm.length) ? _vm._h('tag', {
	      attrs: {
	        "text": item.text,
	        "remove": _vm.getRemoveHandle(item, index),
	        "invalid": item.invalid
	      }
	    }) : _vm._e()]
	  })])
	},staticRenderFns: []}

/***/ }
/******/ ])));
//# sourceMappingURL=vue-tagsinput.js.map