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

	
	/* styles */
	__webpack_require__(2)
	
	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(22),
	  /* scopeId */
	  "data-v-4a2297bc",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("5df4de20", content, true);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/css-loader/index.js?minimize!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4a2297bc&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue", function() {
	     var newContent = require("!!../node_modules/css-loader/index.js?minimize!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-4a2297bc&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./input.vue");
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
	exports.push([module.id, ".tags-input[data-v-4a2297bc]{display:flex;flex-direction:row;align-items:center;flex-wrap:wrap;box-shadow:0 0 .15rem rgba(0,0,0,.3);font-size:.75rem;padding:.1rem 0}.placeholder[data-v-4a2297bc]{display:inline-block;color:#a9a9a9;line-height:2em;white-space:nowrap}", ""]);
	
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
	  Modified by Evan You @yyx990803
	*/
	
	var hasDocument = typeof document !== 'undefined'
	
	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}
	
	var listToStyles = __webpack_require__(6)
	
	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}
	
	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/
	
	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}
	
	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
	
	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction
	
	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)
	
	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}
	
	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}
	
	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}
	
	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}
	
	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null
	
	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }
	
	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  if (!hasSSR) {
	    update(obj)
	  }
	
	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}
	
	var replaceText = (function () {
	  var textStore = []
	
	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()
	
	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}
	
	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap
	
	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	
	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuept = __webpack_require__(9);
	
	var _lib = __webpack_require__(10);
	
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
	    tag: __webpack_require__(11),
	    typing: __webpack_require__(17)
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	var types = {
	  num: Number,
	  str: String,
	  bool: Boolean,
	  func: Function,
	  obj: Object,
	  arr: Array,
	  any: null
	};
	
	var props = {
	  validator: function validator(func) {
	    return { validator: func };
	  }
	};
	var proto = {
	  get required() {
	    return {
	      type: this._type,
	      required: true
	    };
	  },
	  default: function _default(_default2) {
	    return {
	      type: this._type,
	      default: _default2
	    };
	  }
	};
	
	Object.keys(types).forEach(function (t) {
	  props[t] = Object.create(proto, {
	    _type: {
	      value: types[t]
	    }
	  });
	});
	
	module.exports = props;


/***/ },
/* 10 */
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(12)
	
	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(14),
	  /* template */
	  __webpack_require__(16),
	  /* scopeId */
	  "data-v-bf3d33e8",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("77babb28", content, true);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/css-loader/index.js?minimize!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bf3d33e8&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue", function() {
	     var newContent = require("!!../node_modules/css-loader/index.js?minimize!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-bf3d33e8&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./tag.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, ".tag[data-v-bf3d33e8]{border:1px solid #e0e0e0;border-radius:3px;color:#858585;font-weight:400;font-size:1.1em;padding:0 .5ch;vertical-align:middle}.tag[invalid][data-v-bf3d33e8]{border:1px solid red}.hl-click[data-v-bf3d33e8]{width:10px;cursor:pointer}.hl-click[data-v-bf3d33e8]:hover:active{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}", ""]);
	
	// exports


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuept = __webpack_require__(9);
	
	var CROSS_ICON = __webpack_require__(15); //
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
	    text: _vuept.str.required,
	    remove: [Function, null],
	    invalid: _vuept.bool.default(false)
	  },
	  data: function data() {
	    return { crossIcon: CROSS_ICON };
	  },
	
	  computed: {
	    klass: function klass() {
	      return this.$parent.klass;
	    }
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjMDAwMDAwIiBoZWlnaHQ9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    class: _vm.klass.tag,
	    attrs: {
	      "invalid": _vm.invalid
	    }
	  }, [_vm._v("\n  " + _vm._s(_vm.text) + "\n  "), (_vm.remove) ? _c('img', {
	    staticClass: "hl-click",
	    attrs: {
	      "src": _vm.crossIcon,
	      "alt": "close"
	    },
	    on: {
	      "click": _vm.remove
	    }
	  }) : _vm._e()])
	},staticRenderFns: []}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(18)
	
	var Component = __webpack_require__(7)(
	  /* script */
	  __webpack_require__(20),
	  /* template */
	  __webpack_require__(21),
	  /* scopeId */
	  "data-v-5643ad75",
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(5)("f1542044", content, true);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../node_modules/css-loader/index.js?minimize!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5643ad75&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./typing.vue", function() {
	     var newContent = require("!!../node_modules/css-loader/index.js?minimize!../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-5643ad75&scoped=true!../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./typing.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports
	
	
	// module
	exports.push([module.id, "input.input[data-v-5643ad75]{outline:none;box-shadow:none;border:none;background-color:transparent;font-family:monospace;padding:0 .5ch;line-height:2em}.gap[data-v-5643ad75]:last-child{flex:1}", ""]);
	
	// exports


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vuept = __webpack_require__(9);
	
	var _lib = __webpack_require__(10);
	
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
	        var _index = this.index + 1;
	        this.addTag() && this.$nextTick(function () {
	          return _this2.activeOther(_index);
	        });
	      } else native = true;
	
	      !native && e.preventDefault();
	    }
	  }
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    class: _vm.klass.gap,
	    on: {
	      "click": function($event) {
	        _vm.$emit('click')
	      }
	    }
	  }, [_c('input', {
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
	  }), _vm._v(" "), (!_vm.typing) ? _vm._t("default") : _vm._e()], 2)
	},staticRenderFns: []}

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    class: _vm.klass.container
	  }, [_vm._l((_vm.normalizeTagItems), function(item, index) {
	    return [_c('typing', {
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
	    }, [_c('span', {
	      directives: [{
	        name: "show",
	        rawName: "v-show",
	        value: (index === _vm.length && _vm.showPlaceholder),
	        expression: "index === length && showPlaceholder"
	      }],
	      class: _vm.klass.placeholder
	    }, [_vm._v(_vm._s(_vm.placeholder))])]), _vm._v(" "), (index !== _vm.length) ? _c('tag', {
	      attrs: {
	        "text": item.text,
	        "remove": _vm.getRemoveHandle(item, index),
	        "invalid": item.invalid
	      }
	    }) : _vm._e()]
	  })], 2)
	},staticRenderFns: []}

/***/ }
/******/ ])));
//# sourceMappingURL=vue-tagsinput.js.map