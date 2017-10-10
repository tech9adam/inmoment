var query="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)";if(window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(query).matches)for(var images=document.getElementsByClassName("retina"),i=0;i<images.length;i++){var image=images[i].getAttribute("src"),imageWidth=images[i].clientWidth,ext=image.split(".").pop(),updateImage;"png"===ext?updateImage=image.replace(".png","@2x.png"):"jpg"===ext?updateImage=image.replace(".jpg","@2x.jpg"):"jpeg"===ext&&(updateImage=image.replace(".jpeg","@2x.jpeg")),images[i].width=imageWidth,images[i].src=updateImage}
!function(t){"use strict";function r(t,r){var e,p,a,c;"undefined"==typeof document&&"function"==typeof require?(e="file://"+(process.platform.match(/^win/i)?"/":"")+require("fs").realpathSync("."),r&&"/"!==r.charAt(0)&&!r.match(/^\w+:\/\//)&&(r=e+require("path").sep+r),p=require("url").parse(r||e)):(e=document.location.href,p=document.createElement("a"),p.href=r||e),c=(r||e).match(/\/\/(.*?)(?::(.*?))?@/)||[];for(a in s)t[a]=p[s[a]]||"";if(t.protocol=t.protocol.replace(/:$/,""),t.query=t.query.replace(/^\?/,""),t.hash=o(t.hash.replace(/^#/,"")),t.user=o(c[1]||""),t.pass=o(c[2]||""),t.port=h[t.protocol]==t.port||0==t.port?"":t.port,t.protocol||/^([a-z]+:)?\/\/\/?/.test(r))t.path=t.path.replace(/^\/?/,"/");else{var u=new n(e.match(/(.*\/)/)[0]),f=u.path.split("/"),l=t.path.split("/"),y=["protocol","user","pass","host","port"],d=y.length;for(f.pop(),a=0;d>a;a++)t[y[a]]=u[y[a]];for(;".."==l[0];)f.pop(),l.shift();t.path=("/"!=r.charAt(0)?f.join("/"):"")+"/"+l.join("/")}t.paths(("/"==t.path.charAt(0)?t.path.slice(1):t.path).split("/")),t.query=new i(t.query)}function e(t){return encodeURIComponent(t).replace(/'/g,"%27")}function o(t){return t=t.replace(/\+/g," "),t=t.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi,function(t,r,e,o){var i=parseInt(r,16)-224,n=parseInt(e,16)-128;if(0===i&&32>n)return t;var s=parseInt(o,16)-128,h=(i<<12)+(n<<6)+s;return h>65535?t:String.fromCharCode(h)}),t=t.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi,function(t,r,e){var o=parseInt(r,16)-192;if(2>o)return t;var i=parseInt(e,16)-128;return String.fromCharCode((o<<6)+i)}),t.replace(/%([0-7][0-9a-f])/gi,function(t,r){return String.fromCharCode(parseInt(r,16))})}function i(t){for(var r,e=/([^=&]+)(=([^&]*))?/g;r=e.exec(t);){var i=decodeURIComponent(r[1].replace(/\+/g," ")),n=r[3]?o(r[3]):"";void 0!==this[i]&&null!==this[i]?(this[i]instanceof Array||(this[i]=[this[i]]),this[i].push(n)):this[i]=n}}function n(t){r(this,t)}var s={protocol:"protocol",host:"hostname",port:"port",path:"pathname",query:"search",hash:"hash"},h={ftp:21,gopher:70,http:80,https:443,ws:80,wss:443};i.prototype.toString=function(){var t,r,o="",i=e;for(t in this)if(!(this[t]instanceof Function||null===this[t]))if(this[t]instanceof Array){var n=this[t].length;if(n)for(r=0;n>r;r++)o+=o?"&":"",o+=i(t)+"="+i(this[t][r]);else o+=(o?"&":"")+i(t)+"="}else o+=o?"&":"",o+=i(t)+"="+i(this[t]);return o},n.prototype.clearQuery=function(){for(var t in this.query)this.query[t]instanceof Function||delete this.query[t];return this},n.prototype.queryLength=function(){var t,r=0;for(t in this)this[t]instanceof Function||r++;return r},n.prototype.isEmptyQuery=function(){return 0===this.queryLength()},n.prototype.paths=function(t){var r,i="",n=0;if(t&&t.length&&t+""!==t){for(this.isAbsolute()&&(i="/"),r=t.length;r>n;n++)t[n]=!n&&t[n].match(/^\w:$/)?t[n]:e(t[n]);this.path=i+t.join("/")}for(t=("/"===this.path.charAt(0)?this.path.slice(1):this.path).split("/"),n=0,r=t.length;r>n;n++)t[n]=o(t[n]);return t},n.prototype.encode=e,n.prototype.decode=o,n.prototype.isAbsolute=function(){return this.protocol||"/"===this.path.charAt(0)},n.prototype.toString=function(){return(this.protocol&&this.protocol+"://")+(this.user&&e(this.user)+(this.pass&&":"+e(this.pass))+"@")+(this.host&&this.host)+(this.port&&":"+this.port)+(this.path&&this.path)+(this.query.toString()&&"?"+this.query)+(this.hash&&"#"+e(this.hash))},t[t.exports?"exports":"Url"]=n}("undefined"!=typeof module&&module.exports?module:window);
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Pjax=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var clone = _dereq_('./lib/clone.js')
var executeScripts = _dereq_('./lib/execute-scripts.js')

var forEachEls = _dereq_("./lib/foreach-els.js")

var newUid = _dereq_("./lib/uniqueid.js")

var on = _dereq_("./lib/events/on.js")
// var off = require("./lib/events/on.js")
var trigger = _dereq_("./lib/events/trigger.js")


var Pjax = function(options) {
    this.firstrun = true

    var parseOptions = _dereq_("./lib/proto/parse-options.js");
    parseOptions.apply(this,[options])
    this.log("Pjax options", this.options)

    this.maxUid = this.lastUid = newUid()

    this.parseDOM(document)

    on(window, "popstate", function(st) {
      if (st.state) {
        var opt = clone(this.options)
        opt.url = st.state.url
        opt.title = st.state.title
        opt.history = false

        if (st.state.uid < this.lastUid) {
          opt.backward = true
        }
        else {
          opt.forward = true
        }
        this.lastUid = st.state.uid

        // @todo implement history cache here, based on uid
        this.loadUrl(st.state.url, opt)
      }
    }.bind(this))
  }

Pjax.prototype = {
  log: _dereq_("./lib/proto/log.js"),

  getElements: _dereq_("./lib/proto/get-elements.js"),

  parseDOM: _dereq_("./lib/proto/parse-dom.js"),

  refresh: _dereq_("./lib/proto/refresh.js"),

  reload: _dereq_("./lib/reload.js"),

  attachLink: _dereq_("./lib/proto/attach-link.js"),

  forEachSelectors: function(cb, context, DOMcontext) {
    return _dereq_("./lib/foreach-selectors.js").bind(this)(this.options.selectors, cb, context, DOMcontext)
  },

  switchSelectors: function(selectors, fromEl, toEl, options) {
    return _dereq_("./lib/switches-selectors.js").bind(this)(this.options.switches, this.options.switchesOptions, selectors, fromEl, toEl, options)
  },

  // too much problem with the code below
  // + it’s too dangerous
//   switchFallback: function(fromEl, toEl) {
//     this.switchSelectors(["head", "body"], fromEl, toEl)
//     // execute script when DOM is like it should be
//     Pjax.executeScripts(document.querySelector("head"))
//     Pjax.executeScripts(document.querySelector("body"))
//   }

  latestChance: function(href) {
    window.location = href
  },

  onSwitch: function() {
    trigger(window, "resize scroll")
  },

  loadContent: function(html, options) {
    var tmpEl = document.implementation.createHTMLDocument()

    // parse HTML attributes to copy them
    // since we are forced to use documentElement.innerHTML (outerHTML can't be used for <html>)
    var htmlRegex = /<html[^>]+>/gi
    var htmlAttribsRegex = /\s?[a-z:]+(?:\=(?:\'|\")[^\'\">]+(?:\'|\"))*/gi
    var matches = html.match(htmlRegex)
    if (matches && matches.length) {
      matches = matches[0].match(htmlAttribsRegex)
      if (matches.length) {
        matches.shift()
        matches.forEach(function(htmlAttrib) {
          var attr = htmlAttrib.trim().split("=")
          if (attr.length === 1) {
            tmpEl.documentElement.setAttribute(attr[0], true)
          }
          else {
            tmpEl.documentElement.setAttribute(attr[0], attr[1].slice(1, -1))
          }
        })
      }
    }

    tmpEl.documentElement.innerHTML = html
    this.log("load content", tmpEl.documentElement.attributes, tmpEl.documentElement.innerHTML.length)

    // Clear out any focused controls before inserting new page contents.
    // we clear focus on non form elements
    if (document.activeElement && !document.activeElement.value) {
      try {
        document.activeElement.blur()
      } catch (e) { }
    }

    // try {
    this.switchSelectors(this.options.selectors, tmpEl, document, options)

    // FF bug: Won’t autofocus fields that are inserted via JS.
    // This behavior is incorrect. So if theres no current focus, autofocus
    // the last field.
    //
    // http://www.w3.org/html/wg/drafts/html/master/forms.html
    var autofocusEl = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop()
    if (autofocusEl && document.activeElement !== autofocusEl) {
      autofocusEl.focus();
    }

    // execute scripts when DOM have been completely updated
    this.options.selectors.forEach(function(selector) {
      forEachEls(document.querySelectorAll(selector), function(el) {
        executeScripts(el)
      })
    })
    // }
    // catch(e) {
    //   if (this.options.debug) {
    //     this.log("Pjax switch fail: ", e)
    //   }
    //   this.switchFallback(tmpEl, document)
    // }
  },

  doRequest: _dereq_("./lib/request.js"),

  loadUrl: function(href, options) {
    this.log("load href", href, options)

    trigger(document, "pjax:send", options);

    // Do the request
    this.doRequest(href, function(html) {
      // Fail if unable to load HTML via AJAX
      if (html === false) {
        trigger(document,"pjax:complete pjax:error", options)

        return
      }

      // Clear out any focused controls before inserting new page contents.
      document.activeElement.blur()

      try {
        this.loadContent(html, options)
      }
      catch (e) {
        if (!this.options.debug) {
          if (console && console.error) {
            console.error("Pjax switch fail: ", e)
          }
          this.latestChance(href)
          return
        }
        else {
          throw e
        }
      }

      if (options.history) {
        if (this.firstrun) {
          this.lastUid = this.maxUid = newUid()
          this.firstrun = false
          window.history.replaceState({
            url: window.location.href,
            title: document.title,
            uid: this.maxUid
          },
          document.title)
        }

        // Update browser history
        this.lastUid = this.maxUid = newUid()
        window.history.pushState({
          url: href,
          title: options.title,
          uid: this.maxUid
        },
          options.title,
          href)
      }

      this.forEachSelectors(function(el) {
        this.parseDOM(el)
      }, this)

      // Fire Events
      trigger(document,"pjax:complete pjax:success", options)

      options.analytics()

      // Scroll page to top on new page load
      if (options.scrollTo !== false) {
        if (options.scrollTo.length > 1) {
          window.scrollTo(options.scrollTo[0], options.scrollTo[1])
        }
        else {
          window.scrollTo(0, options.scrollTo)
        }
      }
    }.bind(this))
  }
}

Pjax.isSupported = _dereq_("./lib/is-supported.js");

//arguably could do `if( require("./lib/is-supported.js")()) {` but that might be a little to simple
if (Pjax.isSupported()) {
  module.exports = Pjax
}
// if there isn’t required browser functions, returning stupid api
else {
  var stupidPjax = function() {}
  for (var key in Pjax.prototype) {
    if (Pjax.prototype.hasOwnProperty(key) && typeof Pjax.prototype[key] === "function") {
      stupidPjax[key] = stupidPjax
    }
  }

  module.exports = stupidPjax
}

},{"./lib/clone.js":2,"./lib/events/on.js":4,"./lib/events/trigger.js":5,"./lib/execute-scripts.js":6,"./lib/foreach-els.js":7,"./lib/foreach-selectors.js":8,"./lib/is-supported.js":9,"./lib/proto/attach-link.js":11,"./lib/proto/get-elements.js":12,"./lib/proto/log.js":13,"./lib/proto/parse-dom.js":14,"./lib/proto/parse-options.js":16,"./lib/proto/refresh.js":17,"./lib/reload.js":18,"./lib/request.js":19,"./lib/switches-selectors.js":20,"./lib/uniqueid.js":22}],2:[function(_dereq_,module,exports){
module.exports = function(obj) {
  if (null === obj || "object" != typeof obj) {
    return obj
  }
  var copy = obj.constructor()
  for (var attr in obj) {
    if (obj.hasOwnProperty(attr)) {
      copy[attr] = obj[attr]
    }
  }
  return copy
}

},{}],3:[function(_dereq_,module,exports){
module.exports = function(el) {
  // console.log("going to execute script", el)

  var code = (el.text || el.textContent || el.innerHTML || "")
  var head = document.querySelector("head") || document.documentElement
  var script = document.createElement("script")

  if (code.match("document.write")) {
    if (console && console.log) {
      console.log("Script contains document.write. Can’t be executed correctly. Code skipped ", el)
    }
    return false
  }

  script.type = "text/javascript"
  try {
    script.appendChild(document.createTextNode(code))
  }
  catch (e) {
    // old IEs have funky script nodes
    script.text = code
  }

  // execute
  head.insertBefore(script, head.firstChild)
  head.removeChild(script) // avoid pollution

  return true
}

},{}],4:[function(_dereq_,module,exports){
var forEachEls = _dereq_("../foreach-els")

module.exports = function(els, events, listener, useCapture) {
  events = (typeof events === "string" ? events.split(" ") : events)

  events.forEach(function(e) {
    forEachEls(els, function(el) {
      el.addEventListener(e, listener, useCapture)
    })
  })
}

},{"../foreach-els":7}],5:[function(_dereq_,module,exports){
var forEachEls = _dereq_("../foreach-els")

module.exports = function(els, events, opts) {
  events = (typeof events === "string" ? events.split(" ") : events)

  events.forEach(function(e) {
    var event // = new CustomEvent(e) // doesn't everywhere yet
    event = document.createEvent("HTMLEvents")
    event.initEvent(e, true, true)
    event.eventName = e
    if (opts) {
      Object.keys(opts).forEach(function(key) {
        event[key] = opts[key]
      })
    }

    forEachEls(els, function(el) {
      var domFix = false
      if (!el.parentNode && el !== document && el !== window) {
        // THANKS YOU IE (9/10//11 concerned)
        // dispatchEvent doesn't work if element is not in the dom
        domFix = true
        document.body.appendChild(el)
      }
      el.dispatchEvent(event)
      if (domFix) {
        el.parentNode.removeChild(el)
      }
    })
  })
}

},{"../foreach-els":7}],6:[function(_dereq_,module,exports){
var forEachEls = _dereq_("./foreach-els")
var evalScript = _dereq_("./eval-script")
// Finds and executes scripts (used for newly added elements)
// Needed since innerHTML does not run scripts
module.exports = function(el) {
  // console.log("going to execute scripts for ", el)
  forEachEls(el.querySelectorAll("script"), function(script) {
    if (!script.type || script.type.toLowerCase() === "text/javascript") {
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
      evalScript(script)
    }
  })
}

},{"./eval-script":3,"./foreach-els":7}],7:[function(_dereq_,module,exports){
/* global HTMLCollection: true */

module.exports = function(els, fn, context) {
  if (els instanceof HTMLCollection || els instanceof NodeList || els instanceof Array) {
    return Array.prototype.forEach.call(els, fn, context)
  }
  // assume simple dom element
  return fn.call(context, els)
}

},{}],8:[function(_dereq_,module,exports){
var forEachEls = _dereq_("./foreach-els")

module.exports = function(selectors, cb, context, DOMcontext) {
  DOMcontext = DOMcontext || document
  selectors.forEach(function(selector) {
    forEachEls(DOMcontext.querySelectorAll(selector), cb, context)
  })
}

},{"./foreach-els":7}],9:[function(_dereq_,module,exports){
module.exports = function() {
  // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
  return window.history &&
    window.history.pushState &&
    window.history.replaceState &&
    // pushState isn’t reliable on iOS until 5.
    !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)
}

},{}],10:[function(_dereq_,module,exports){
if (!Function.prototype.bind) {
  Function.prototype.bind = function(oThis) {
    if (typeof this !== "function") {
      // closest thing possible to the ECMAScript 5 internal IsCallable function
      throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
    }

    var aArgs = Array.prototype.slice.call(arguments, 1)
    var that = this
    var Fnoop = function() {}
    var fBound = function() {
      return that.apply(this instanceof Fnoop && oThis ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)))
    }

    Fnoop.prototype = this.prototype
    fBound.prototype = new Fnoop()

    return fBound
  }
}

},{}],11:[function(_dereq_,module,exports){
_dereq_("../polyfills/Function.prototype.bind")

var on = _dereq_("../events/on")
var clone = _dereq_("../clone")

var attrClick = "data-pjax-click-state"
var attrKey = "data-pjax-keyup-state"

var linkAction = function(el, event) {
  // Don’t break browser special behavior on links (like page in new window)
  if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    el.setAttribute(attrClick, "modifier")
    return
  }

  // we do test on href now to prevent unexpected behavior if for some reason
  // user have href that can be dynamically updated

  // Ignore external links.
  if (el.protocol !== window.location.protocol || el.host !== window.location.host) {
    el.setAttribute(attrClick, "external")
    return
  }

  // Ignore click if we are on an anchor on the same page
  if (el.pathname === window.location.pathname && el.hash.length > 0) {
    el.setAttribute(attrClick, "anchor-present")
    return
  }

  // Ignore anchors on the same page (keep native behavior)
  if (el.hash && el.href.replace(el.hash, "") === window.location.href.replace(location.hash, "")) {
    el.setAttribute(attrClick, "anchor")
    return
  }

  // Ignore empty anchor "foo.html#"
  if (el.href === window.location.href.split("#")[0] + "#") {
    el.setAttribute(attrClick, "anchor-empty")
    return
  }

  event.preventDefault()

  // don’t do "nothing" if user try to reload the page by clicking the same link twice
  if (
    this.options.currentUrlFullReload &&
    el.href === window.location.href.split("#")[0]
  ) {
    el.setAttribute(attrClick, "reload")
    this.reload()
    return
  }

  el.setAttribute(attrClick, "load")
  this.loadUrl(el.href, clone(this.options))
}

var isDefaultPrevented = function(event) {
  return event.defaultPrevented || event.returnValue === false;
}

module.exports = function(el) {
  var that = this

  on(el, "click", function(event) {
    if (isDefaultPrevented(event)) {
      return
    }

    linkAction.call(that, el, event)
  })

  on(el, "keyup", function(event) {
    if (isDefaultPrevented(event)) {
      return
    }

    // Don’t break browser special behavior on links (like page in new window)
    if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      el.setAttribute(attrKey, "modifier")
      return
    }

    if (event.keyCode == 13) {
      linkAction.call(that, el, event)
    }
  }.bind(this))
}

},{"../clone":2,"../events/on":4,"../polyfills/Function.prototype.bind":10}],12:[function(_dereq_,module,exports){
module.exports = function(el) {
  return el.querySelectorAll(this.options.elements)
}

},{}],13:[function(_dereq_,module,exports){
module.exports = function() {
  if (this.options.debug && console) {
    if (typeof console.log === "function") {
      console.log.apply(console, arguments);
    }
    // ie is weird
    else if (console.log) {
      console.log(arguments);
    }
  }
}

},{}],14:[function(_dereq_,module,exports){
var forEachEls = _dereq_("../foreach-els")

var parseElement = _dereq_("./parse-element")

module.exports = function(el) {
  forEachEls(this.getElements(el), parseElement, this)
}

},{"../foreach-els":7,"./parse-element":15}],15:[function(_dereq_,module,exports){
module.exports = function(el) {
  switch (el.tagName.toLowerCase()) {
  case "a":
    // only attach link if el does not already have link attached
    if (!el.hasAttribute('data-pjax-click-state')) {
      this.attachLink(el)
    }
    break

  case "form":
    throw "Pjax doesnt support <form> yet."
    break

  default:
    throw "Pjax can only be applied on <a> or <form> submit"
  }
}

},{}],16:[function(_dereq_,module,exports){
/* global _gaq: true, ga: true */

module.exports = function(options){
  this.options = options
  this.options.elements = this.options.elements || "a[href], form[action]"
  this.options.selectors = this.options.selectors || ["title", ".js-Pjax"]
  this.options.switches = this.options.switches || {}
  this.options.switchesOptions = this.options.switchesOptions || {}
  this.options.history = this.options.history || true
  this.options.analytics = this.options.analytics || function() {
    // options.backward or options.foward can be true or undefined
    // by default, we do track back/foward hit
    // https://productforums.google.com/forum/#!topic/analytics/WVwMDjLhXYk
    if (window._gaq) {
      _gaq.push(["_trackPageview"])
    }
    if (window.ga) {
      ga("send", "pageview", {page: location.pathname, title: document.title})
    }
  }
  this.options.scrollTo = (typeof this.options.scrollTo === 'undefined') ? 0 : this.options.scrollTo;
  this.options.cacheBust = (typeof this.options.cacheBust === 'undefined') ? true : this.options.cacheBust
  this.options.debug = this.options.debug || false

  // we can’t replace body.outerHTML or head.outerHTML
  // it create a bug where new body or new head are created in the dom
  // if you set head.outerHTML, a new body tag is appended, so the dom get 2 body
  // & it break the switchFallback which replace head & body
  if (!this.options.switches.head) {
    this.options.switches.head = this.switchElementsAlt
  }
  if (!this.options.switches.body) {
    this.options.switches.body = this.switchElementsAlt
  }
  if (typeof options.analytics !== "function") {
    options.analytics = function() {}
  }
}
},{}],17:[function(_dereq_,module,exports){
module.exports = function(el) {
  this.parseDOM(el || document)
}

},{}],18:[function(_dereq_,module,exports){
module.exports = function() {
  window.location.reload()
}

},{}],19:[function(_dereq_,module,exports){
module.exports = function(location, callback) {
  var request = new XMLHttpRequest()

  request.onreadystatechange = function() {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(request.responseText, request)
      }
      else {
        callback(null, request)
      }
    }
  }

  // Add a timestamp as part of the query string if cache busting is enabled
  if (this.options.cacheBust) {
    location += (!/[?&]/.test(location) ? "?" : "&") + new Date().getTime()
  }

  request.open("GET", location, true)
  request.setRequestHeader("X-Requested-With", "XMLHttpRequest")
  request.send(null)
  return request
}

},{}],20:[function(_dereq_,module,exports){
var forEachEls = _dereq_("./foreach-els")

var defaultSwitches = _dereq_("./switches")

module.exports = function(switches, switchesOptions, selectors, fromEl, toEl, options) {
  selectors.forEach(function(selector) {
    var newEls = fromEl.querySelectorAll(selector)
    var oldEls = toEl.querySelectorAll(selector)
    if (this.log) {
      this.log("Pjax switch", selector, newEls, oldEls)
    }
    if (newEls.length !== oldEls.length) {
      // forEachEls(newEls, function(el) {
      //   this.log("newEl", el, el.outerHTML)
      // }, this)
      // forEachEls(oldEls, function(el) {
      //   this.log("oldEl", el, el.outerHTML)
      // }, this)
      throw "DOM doesn’t look the same on new loaded page: ’" + selector + "’ - new " + newEls.length + ", old " + oldEls.length
    }

    forEachEls(newEls, function(newEl, i) {
      var oldEl = oldEls[i]
      if (this.log) {
        this.log("newEl", newEl, "oldEl", oldEl)
      }
      if (switches[selector]) {
        switches[selector].bind(this)(oldEl, newEl, options, switchesOptions[selector])
      }
      else {
        defaultSwitches.outerHTML.bind(this)(oldEl, newEl, options)
      }
    }, this)
  }, this)
}

},{"./foreach-els":7,"./switches":21}],21:[function(_dereq_,module,exports){
var on = _dereq_("./events/on.js")
// var off = require("./lib/events/on.js")
// var trigger = require("./lib/events/trigger.js")


module.exports = {
  outerHTML: function(oldEl, newEl) {
    oldEl.outerHTML = newEl.outerHTML
    this.onSwitch()
  },

  innerHTML: function(oldEl, newEl) {
    oldEl.innerHTML = newEl.innerHTML
    oldEl.className = newEl.className
    this.onSwitch()
  },

  sideBySide: function(oldEl, newEl, options, switchOptions) {
    var forEach = Array.prototype.forEach
    var elsToRemove = []
    var elsToAdd = []
    var fragToAppend = document.createDocumentFragment()
    // height transition are shitty on safari
    // so commented for now (until I found something ?)
    // var relevantHeight = 0
    var animationEventNames = "animationend webkitAnimationEnd MSAnimationEnd oanimationend"
    var animatedElsNumber = 0
    var sexyAnimationEnd = function(e) {
          if (e.target != e.currentTarget) {
            // end triggered by an animation on a child
            return
          }

          animatedElsNumber--
          if (animatedElsNumber <= 0 && elsToRemove) {
            elsToRemove.forEach(function(el) {
              // browsing quickly can make the el
              // already removed by last page update ?
              if (el.parentNode) {
                el.parentNode.removeChild(el)
              }
            })

            elsToAdd.forEach(function(el) {
              el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "")
              el.removeAttribute("data-pjax-classes")
              // Pjax.off(el, animationEventNames, sexyAnimationEnd, true)
            })

            elsToAdd = null // free memory
            elsToRemove = null // free memory

            // assume the height is now useless (avoid bug since there is overflow hidden on the parent)
            // oldEl.style.height = "auto"

            // this is to trigger some repaint (example: picturefill)
            this.onSwitch()
            // Pjax.trigger(window, "scroll")
          }
        }.bind(this)

    // Force height to be able to trigger css animation
    // here we get the relevant height
    // oldEl.parentNode.appendChild(newEl)
    // relevantHeight = newEl.getBoundingClientRect().height
    // oldEl.parentNode.removeChild(newEl)
    // oldEl.style.height = oldEl.getBoundingClientRect().height + "px"

    switchOptions = switchOptions || {}

    forEach.call(oldEl.childNodes, function(el) {
      elsToRemove.push(el)
      if (el.classList && !el.classList.contains("js-Pjax-remove")) {
        // for fast switch, clean element that just have been added, & not cleaned yet.
        if (el.hasAttribute("data-pjax-classes")) {
          el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "")
          el.removeAttribute("data-pjax-classes")
        }
        el.classList.add("js-Pjax-remove")
        if (switchOptions.callbacks && switchOptions.callbacks.removeElement) {
          switchOptions.callbacks.removeElement(el)
        }
        if (switchOptions.classNames) {
          el.className += " " + switchOptions.classNames.remove + " " + (options.backward ? switchOptions.classNames.backward : switchOptions.classNames.forward)
        }
        animatedElsNumber++
        on(el, animationEventNames, sexyAnimationEnd, true)
      }
    })

    forEach.call(newEl.childNodes, function(el) {
      if (el.classList) {
        var addClasses = ""
        if (switchOptions.classNames) {
          addClasses = " js-Pjax-add " + switchOptions.classNames.add + " " + (options.backward ? switchOptions.classNames.forward : switchOptions.classNames.backward)
        }
        if (switchOptions.callbacks && switchOptions.callbacks.addElement) {
          switchOptions.callbacks.addElement(el)
        }
        el.className += addClasses
        el.setAttribute("data-pjax-classes", addClasses)
        elsToAdd.push(el)
        fragToAppend.appendChild(el)
        animatedElsNumber++
        on(el, animationEventNames, sexyAnimationEnd, true)
      }
    })

    // pass all className of the parent
    oldEl.className = newEl.className
    oldEl.appendChild(fragToAppend)

    // oldEl.style.height = relevantHeight + "px"
  }
}

},{"./events/on.js":4}],22:[function(_dereq_,module,exports){
module.exports = (function() {
  var counter = 0
  return function() {
    var id = ("pjax" + (new Date().getTime())) + "_" + counter
    counter++
    return id
  }
})()

},{}]},{},[1])
(1)
});
/*
 * jQuery FlexSlider v2.6.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */!function($){var e=!0;$.flexslider=function(t,a){var n=$(t);n.vars=$.extend({},$.flexslider.defaults,a);var i=n.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,r=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&n.vars.touch,o="click touchend MSPointerUp keyup",l="",c,d="vertical"===n.vars.direction,u=n.vars.reverse,v=n.vars.itemWidth>0,p="fade"===n.vars.animation,m=""!==n.vars.asNavFor,f={};$.data(t,"flexslider",n),f={init:function(){n.animating=!1,n.currentSlide=parseInt(n.vars.startAt?n.vars.startAt:0,10),isNaN(n.currentSlide)&&(n.currentSlide=0),n.animatingTo=n.currentSlide,n.atEnd=0===n.currentSlide||n.currentSlide===n.last,n.containerSelector=n.vars.selector.substr(0,n.vars.selector.search(" ")),n.slides=$(n.vars.selector,n),n.container=$(n.containerSelector,n),n.count=n.slides.length,n.syncExists=$(n.vars.sync).length>0,"slide"===n.vars.animation&&(n.vars.animation="swing"),n.prop=d?"top":"marginLeft",n.args={},n.manualPause=!1,n.stopped=!1,n.started=!1,n.startTimeout=null,n.transitions=!n.vars.video&&!p&&n.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var a in t)if(void 0!==e.style[t[a]])return n.pfx=t[a].replace("Perspective","").toLowerCase(),n.prop="-"+n.pfx+"-transform",!0;return!1}(),n.ensureAnimationEnd="",""!==n.vars.controlsContainer&&(n.controlsContainer=$(n.vars.controlsContainer).length>0&&$(n.vars.controlsContainer)),""!==n.vars.manualControls&&(n.manualControls=$(n.vars.manualControls).length>0&&$(n.vars.manualControls)),""!==n.vars.customDirectionNav&&(n.customDirectionNav=2===$(n.vars.customDirectionNav).length&&$(n.vars.customDirectionNav)),n.vars.randomize&&(n.slides.sort(function(){return Math.round(Math.random())-.5}),n.container.empty().append(n.slides)),n.doMath(),n.setup("init"),n.vars.controlNav&&f.controlNav.setup(),n.vars.directionNav&&f.directionNav.setup(),n.vars.keyboard&&(1===$(n.containerSelector).length||n.vars.multipleKeyboard)&&$(document).bind("keyup",function(e){var t=e.keyCode;if(!n.animating&&(39===t||37===t)){var a=39===t?n.getTarget("next"):37===t?n.getTarget("prev"):!1;n.flexAnimate(a,n.vars.pauseOnAction)}}),n.vars.mousewheel&&n.bind("mousewheel",function(e,t,a,i){e.preventDefault();var s=0>t?n.getTarget("next"):n.getTarget("prev");n.flexAnimate(s,n.vars.pauseOnAction)}),n.vars.pausePlay&&f.pausePlay.setup(),n.vars.slideshow&&n.vars.pauseInvisible&&f.pauseInvisible.init(),n.vars.slideshow&&(n.vars.pauseOnHover&&n.hover(function(){n.manualPlay||n.manualPause||n.pause()},function(){n.manualPause||n.manualPlay||n.stopped||n.play()}),n.vars.pauseInvisible&&f.pauseInvisible.isHidden()||(n.vars.initDelay>0?n.startTimeout=setTimeout(n.play,n.vars.initDelay):n.play())),m&&f.asNav.setup(),r&&n.vars.touch&&f.touch(),(!p||p&&n.vars.smoothHeight)&&$(window).bind("resize orientationchange focus",f.resize),n.find("img").attr("draggable","false"),setTimeout(function(){n.vars.start(n)},200)},asNav:{setup:function(){n.asNav=!0,n.animatingTo=Math.floor(n.currentSlide/n.move),n.currentItem=n.currentSlide,n.slides.removeClass(i+"active-slide").eq(n.currentItem).addClass(i+"active-slide"),s?(t._slider=n,n.slides.each(function(){var e=this;e._gesture=new MSGesture,e._gesture.target=e,e.addEventListener("MSPointerDown",function(e){e.preventDefault(),e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1),e.addEventListener("MSGestureTap",function(e){e.preventDefault();var t=$(this),a=t.index();$(n.vars.asNavFor).data("flexslider").animating||t.hasClass("active")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})})):n.slides.on(o,function(e){e.preventDefault();var t=$(this),a=t.index(),s=t.offset().left-$(n).scrollLeft();0>=s&&t.hasClass(i+"active-slide")?n.flexAnimate(n.getTarget("prev"),!0):$(n.vars.asNavFor).data("flexslider").animating||t.hasClass(i+"active-slide")||(n.direction=n.currentItem<a?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){n.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var e="thumbnails"===n.vars.controlNav?"control-thumbs":"control-paging",t=1,a,s;if(n.controlNavScaffold=$('<ol class="'+i+"control-nav "+i+e+'"></ol>'),n.pagingCount>1)for(var r=0;r<n.pagingCount;r++){if(s=n.slides.eq(r),void 0===s.attr("data-thumb-alt")&&s.attr("data-thumb-alt",""),altText=""!==s.attr("data-thumb-alt")?altText=' alt="'+s.attr("data-thumb-alt")+'"':"",a="thumbnails"===n.vars.controlNav?'<img src="'+s.attr("data-thumb")+'"'+altText+"/>":'<a href="#">'+t+"</a>","thumbnails"===n.vars.controlNav&&!0===n.vars.thumbCaptions){var c=s.attr("data-thumbcaption");""!==c&&void 0!==c&&(a+='<span class="'+i+'caption">'+c+"</span>")}n.controlNavScaffold.append("<li>"+a+"</li>"),t++}n.controlsContainer?$(n.controlsContainer).append(n.controlNavScaffold):n.append(n.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),n.controlNavScaffold.delegate("a, img",o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(n.direction=a>n.currentSlide?"next":"prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},setupManual:function(){n.controlNav=n.manualControls,f.controlNav.active(),n.controlNav.bind(o,function(e){if(e.preventDefault(),""===l||l===e.type){var t=$(this),a=n.controlNav.index(t);t.hasClass(i+"active")||(a>n.currentSlide?n.direction="next":n.direction="prev",n.flexAnimate(a,n.vars.pauseOnAction))}""===l&&(l=e.type),f.setToClearWatchedEvent()})},set:function(){var e="thumbnails"===n.vars.controlNav?"img":"a";n.controlNav=$("."+i+"control-nav li "+e,n.controlsContainer?n.controlsContainer:n)},active:function(){n.controlNav.removeClass(i+"active").eq(n.animatingTo).addClass(i+"active")},update:function(e,t){n.pagingCount>1&&"add"===e?n.controlNavScaffold.append($('<li><a href="#">'+n.count+"</a></li>")):1===n.pagingCount?n.controlNavScaffold.find("li").remove():n.controlNav.eq(t).closest("li").remove(),f.controlNav.set(),n.pagingCount>1&&n.pagingCount!==n.controlNav.length?n.update(t,e):f.controlNav.active()}},directionNav:{setup:function(){var e=$('<ul class="'+i+'direction-nav"><li class="'+i+'nav-prev"><a class="'+i+'prev" href="#">'+n.vars.prevText+'</a></li><li class="'+i+'nav-next"><a class="'+i+'next" href="#">'+n.vars.nextText+"</a></li></ul>");n.customDirectionNav?n.directionNav=n.customDirectionNav:n.controlsContainer?($(n.controlsContainer).append(e),n.directionNav=$("."+i+"direction-nav li a",n.controlsContainer)):(n.append(e),n.directionNav=$("."+i+"direction-nav li a",n)),f.directionNav.update(),n.directionNav.bind(o,function(e){e.preventDefault();var t;(""===l||l===e.type)&&(t=$(this).hasClass(i+"next")?n.getTarget("next"):n.getTarget("prev"),n.flexAnimate(t,n.vars.pauseOnAction)),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";1===n.pagingCount?n.directionNav.addClass(e).attr("tabindex","-1"):n.vars.animationLoop?n.directionNav.removeClass(e).removeAttr("tabindex"):0===n.animatingTo?n.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):n.animatingTo===n.last?n.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):n.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var e=$('<div class="'+i+'pauseplay"><a href="#"></a></div>');n.controlsContainer?(n.controlsContainer.append(e),n.pausePlay=$("."+i+"pauseplay a",n.controlsContainer)):(n.append(e),n.pausePlay=$("."+i+"pauseplay a",n)),f.pausePlay.update(n.vars.slideshow?i+"pause":i+"play"),n.pausePlay.bind(o,function(e){e.preventDefault(),(""===l||l===e.type)&&($(this).hasClass(i+"pause")?(n.manualPause=!0,n.manualPlay=!1,n.pause()):(n.manualPause=!1,n.manualPlay=!0,n.play())),""===l&&(l=e.type),f.setToClearWatchedEvent()})},update:function(e){"play"===e?n.pausePlay.removeClass(i+"pause").addClass(i+"play").html(n.vars.playText):n.pausePlay.removeClass(i+"play").addClass(i+"pause").html(n.vars.pauseText)}},touch:function(){function e(e){e.stopPropagation(),n.animating?e.preventDefault():(n.pause(),t._gesture.addPointer(e.pointerId),T=0,c=d?n.h:n.w,f=Number(new Date),l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c)}function a(e){e.stopPropagation();var a=e.target._slider;if(a){var n=-e.translationX,i=-e.translationY;return T+=d?i:n,m=T,x=d?Math.abs(T)<Math.abs(-n):Math.abs(T)<Math.abs(-i),e.detail===e.MSGESTURE_FLAG_INERTIA?void setImmediate(function(){t._gesture.stop()}):void((!x||Number(new Date)-f>500)&&(e.preventDefault(),!p&&a.transitions&&(a.vars.animationLoop||(m=T/(0===a.currentSlide&&0>T||a.currentSlide===a.last&&T>0?Math.abs(T)/c+2:1)),a.setProps(l+m,"setTouch"))))}}function i(e){e.stopPropagation();var t=e.target._slider;if(t){if(t.animatingTo===t.currentSlide&&!x&&null!==m){var a=u?-m:m,n=a>0?t.getTarget("next"):t.getTarget("prev");t.canAdvance(n)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?t.flexAnimate(n,t.vars.pauseOnAction):p||t.flexAnimate(t.currentSlide,t.vars.pauseOnAction,!0)}r=null,o=null,m=null,l=null,T=0}}var r,o,l,c,m,f,g,h,S,x=!1,y=0,b=0,T=0;s?(t.style.msTouchAction="none",t._gesture=new MSGesture,t._gesture.target=t,t.addEventListener("MSPointerDown",e,!1),t._slider=n,t.addEventListener("MSGestureChange",a,!1),t.addEventListener("MSGestureEnd",i,!1)):(g=function(e){n.animating?e.preventDefault():(window.navigator.msPointerEnabled||1===e.touches.length)&&(n.pause(),c=d?n.h:n.w,f=Number(new Date),y=e.touches[0].pageX,b=e.touches[0].pageY,l=v&&u&&n.animatingTo===n.last?0:v&&u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:v&&n.currentSlide===n.last?n.limit:v?(n.itemW+n.vars.itemMargin)*n.move*n.currentSlide:u?(n.last-n.currentSlide+n.cloneOffset)*c:(n.currentSlide+n.cloneOffset)*c,r=d?b:y,o=d?y:b,t.addEventListener("touchmove",h,!1),t.addEventListener("touchend",S,!1))},h=function(e){y=e.touches[0].pageX,b=e.touches[0].pageY,m=d?r-b:r-y,x=d?Math.abs(m)<Math.abs(y-o):Math.abs(m)<Math.abs(b-o);var t=500;(!x||Number(new Date)-f>t)&&(e.preventDefault(),!p&&n.transitions&&(n.vars.animationLoop||(m/=0===n.currentSlide&&0>m||n.currentSlide===n.last&&m>0?Math.abs(m)/c+2:1),n.setProps(l+m,"setTouch")))},S=function(e){if(t.removeEventListener("touchmove",h,!1),n.animatingTo===n.currentSlide&&!x&&null!==m){var a=u?-m:m,i=a>0?n.getTarget("next"):n.getTarget("prev");n.canAdvance(i)&&(Number(new Date)-f<550&&Math.abs(a)>50||Math.abs(a)>c/2)?n.flexAnimate(i,n.vars.pauseOnAction):p||n.flexAnimate(n.currentSlide,n.vars.pauseOnAction,!0)}t.removeEventListener("touchend",S,!1),r=null,o=null,m=null,l=null},t.addEventListener("touchstart",g,!1))},resize:function(){!n.animating&&n.is(":visible")&&(v||n.doMath(),p?f.smoothHeight():v?(n.slides.width(n.computedW),n.update(n.pagingCount),n.setProps()):d?(n.viewport.height(n.h),n.setProps(n.h,"setTotal")):(n.vars.smoothHeight&&f.smoothHeight(),n.newSlides.width(n.computedW),n.setProps(n.computedW,"setTotal")))},smoothHeight:function(e){if(!d||p){var t=p?n:n.viewport;e?t.animate({height:n.slides.eq(n.animatingTo).height()},e):t.height(n.slides.eq(n.animatingTo).height())}},sync:function(e){var t=$(n.vars.sync).data("flexslider"),a=n.animatingTo;switch(e){case"animate":t.flexAnimate(a,n.vars.pauseOnAction,!1,!0);break;case"play":t.playing||t.asNav||t.play();break;case"pause":t.pause()}},uniqueID:function(e){return e.filter("[id]").add(e.find("[id]")).each(function(){var e=$(this);e.attr("id",e.attr("id")+"_clone")}),e},pauseInvisible:{visProp:null,init:function(){var e=f.pauseInvisible.getHiddenProp();if(e){var t=e.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(t,function(){f.pauseInvisible.isHidden()?n.startTimeout?clearTimeout(n.startTimeout):n.pause():n.started?n.play():n.vars.initDelay>0?setTimeout(n.play,n.vars.initDelay):n.play()})}},isHidden:function(){var e=f.pauseInvisible.getHiddenProp();return e?document[e]:!1},getHiddenProp:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}},setToClearWatchedEvent:function(){clearTimeout(c),c=setTimeout(function(){l=""},3e3)}},n.flexAnimate=function(e,t,a,s,o){if(n.vars.animationLoop||e===n.currentSlide||(n.direction=e>n.currentSlide?"next":"prev"),m&&1===n.pagingCount&&(n.direction=n.currentItem<e?"next":"prev"),!n.animating&&(n.canAdvance(e,o)||a)&&n.is(":visible")){if(m&&s){var l=$(n.vars.asNavFor).data("flexslider");if(n.atEnd=0===e||e===n.count-1,l.flexAnimate(e,!0,!1,!0,o),n.direction=n.currentItem<e?"next":"prev",l.direction=n.direction,Math.ceil((e+1)/n.visible)-1===n.currentSlide||0===e)return n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),!1;n.currentItem=e,n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),e=Math.floor(e/n.visible)}if(n.animating=!0,n.animatingTo=e,t&&n.pause(),n.vars.before(n),n.syncExists&&!o&&f.sync("animate"),n.vars.controlNav&&f.controlNav.active(),v||n.slides.removeClass(i+"active-slide").eq(e).addClass(i+"active-slide"),n.atEnd=0===e||e===n.last,n.vars.directionNav&&f.directionNav.update(),e===n.last&&(n.vars.end(n),n.vars.animationLoop||n.pause()),p)r?(n.slides.eq(n.currentSlide).css({opacity:0,zIndex:1}),n.slides.eq(e).css({opacity:1,zIndex:2}),n.wrapup(c)):(n.slides.eq(n.currentSlide).css({zIndex:1}).animate({opacity:0},n.vars.animationSpeed,n.vars.easing),n.slides.eq(e).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing,n.wrapup));else{var c=d?n.slides.filter(":first").height():n.computedW,g,h,S;v?(g=n.vars.itemMargin,S=(n.itemW+g)*n.move*n.animatingTo,h=S>n.limit&&1!==n.visible?n.limit:S):h=0===n.currentSlide&&e===n.count-1&&n.vars.animationLoop&&"next"!==n.direction?u?(n.count+n.cloneOffset)*c:0:n.currentSlide===n.last&&0===e&&n.vars.animationLoop&&"prev"!==n.direction?u?0:(n.count+1)*c:u?(n.count-1-e+n.cloneOffset)*c:(e+n.cloneOffset)*c,n.setProps(h,"",n.vars.animationSpeed),n.transitions?(n.vars.animationLoop&&n.atEnd||(n.animating=!1,n.currentSlide=n.animatingTo),n.container.unbind("webkitTransitionEnd transitionend"),n.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(n.ensureAnimationEnd),n.wrapup(c)}),clearTimeout(n.ensureAnimationEnd),n.ensureAnimationEnd=setTimeout(function(){n.wrapup(c)},n.vars.animationSpeed+100)):n.container.animate(n.args,n.vars.animationSpeed,n.vars.easing,function(){n.wrapup(c)})}n.vars.smoothHeight&&f.smoothHeight(n.vars.animationSpeed)}},n.wrapup=function(e){p||v||(0===n.currentSlide&&n.animatingTo===n.last&&n.vars.animationLoop?n.setProps(e,"jumpEnd"):n.currentSlide===n.last&&0===n.animatingTo&&n.vars.animationLoop&&n.setProps(e,"jumpStart")),n.animating=!1,n.currentSlide=n.animatingTo,n.vars.after(n)},n.animateSlides=function(){!n.animating&&e&&n.flexAnimate(n.getTarget("next"))},n.pause=function(){clearInterval(n.animatedSlides),n.animatedSlides=null,n.playing=!1,n.vars.pausePlay&&f.pausePlay.update("play"),n.syncExists&&f.sync("pause")},n.play=function(){n.playing&&clearInterval(n.animatedSlides),n.animatedSlides=n.animatedSlides||setInterval(n.animateSlides,n.vars.slideshowSpeed),n.started=n.playing=!0,n.vars.pausePlay&&f.pausePlay.update("pause"),n.syncExists&&f.sync("play")},n.stop=function(){n.pause(),n.stopped=!0},n.canAdvance=function(e,t){var a=m?n.pagingCount-1:n.last;return t?!0:m&&n.currentItem===n.count-1&&0===e&&"prev"===n.direction?!0:m&&0===n.currentItem&&e===n.pagingCount-1&&"next"!==n.direction?!1:e!==n.currentSlide||m?n.vars.animationLoop?!0:n.atEnd&&0===n.currentSlide&&e===a&&"next"!==n.direction?!1:n.atEnd&&n.currentSlide===a&&0===e&&"next"===n.direction?!1:!0:!1},n.getTarget=function(e){return n.direction=e,"next"===e?n.currentSlide===n.last?0:n.currentSlide+1:0===n.currentSlide?n.last:n.currentSlide-1},n.setProps=function(e,t,a){var i=function(){var a=e?e:(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo,i=function(){if(v)return"setTouch"===t?e:u&&n.animatingTo===n.last?0:u?n.limit-(n.itemW+n.vars.itemMargin)*n.move*n.animatingTo:n.animatingTo===n.last?n.limit:a;switch(t){case"setTotal":return u?(n.count-1-n.currentSlide+n.cloneOffset)*e:(n.currentSlide+n.cloneOffset)*e;case"setTouch":return u?e:e;case"jumpEnd":return u?e:n.count*e;case"jumpStart":return u?n.count*e:e;default:return e}}();return-1*i+"px"}();n.transitions&&(i=d?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)",a=void 0!==a?a/1e3+"s":"0s",n.container.css("-"+n.pfx+"-transition-duration",a),n.container.css("transition-duration",a)),n.args[n.prop]=i,(n.transitions||void 0===a)&&n.container.css(n.args),n.container.css("transform",i)},n.setup=function(e){if(p)n.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===e&&(r?n.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+n.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(n.currentSlide).css({opacity:1,zIndex:2}):0==n.vars.fadeFirstSlide?n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).css({opacity:1}):n.slides.css({opacity:0,display:"block",zIndex:1}).eq(n.currentSlide).css({zIndex:2}).animate({opacity:1},n.vars.animationSpeed,n.vars.easing)),n.vars.smoothHeight&&f.smoothHeight();else{var t,a;"init"===e&&(n.viewport=$('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(n).append(n.container),n.cloneCount=0,n.cloneOffset=0,u&&(a=$.makeArray(n.slides).reverse(),n.slides=$(a),n.container.empty().append(n.slides))),n.vars.animationLoop&&!v&&(n.cloneCount=2,n.cloneOffset=1,"init"!==e&&n.container.find(".clone").remove(),n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden","true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden","true"))),n.newSlides=$(n.vars.selector,n),t=u?n.count-1-n.currentSlide+n.cloneOffset:n.currentSlide+n.cloneOffset,d&&!v?(n.container.height(200*(n.count+n.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){n.newSlides.css({display:"block"}),n.doMath(),n.viewport.height(n.h),n.setProps(t*n.h,"init")},"init"===e?100:0)):(n.container.width(200*(n.count+n.cloneCount)+"%"),n.setProps(t*n.computedW,"init"),setTimeout(function(){n.doMath(),n.newSlides.css({width:n.computedW,marginRight:n.computedM,"float":"left",display:"block"}),n.vars.smoothHeight&&f.smoothHeight()},"init"===e?100:0))}v||n.slides.removeClass(i+"active-slide").eq(n.currentSlide).addClass(i+"active-slide"),n.vars.init(n)},n.doMath=function(){var e=n.slides.first(),t=n.vars.itemMargin,a=n.vars.minItems,i=n.vars.maxItems;n.w=void 0===n.viewport?n.width():n.viewport.width(),n.h=e.height(),n.boxPadding=e.outerWidth()-e.width(),v?(n.itemT=n.vars.itemWidth+t,n.itemM=t,n.minW=a?a*n.itemT:n.w,n.maxW=i?i*n.itemT-t:n.w,n.itemW=n.minW>n.w?(n.w-t*(a-1))/a:n.maxW<n.w?(n.w-t*(i-1))/i:n.vars.itemWidth>n.w?n.w:n.vars.itemWidth,n.visible=Math.floor(n.w/n.itemW),n.move=n.vars.move>0&&n.vars.move<n.visible?n.vars.move:n.visible,n.pagingCount=Math.ceil((n.count-n.visible)/n.move+1),n.last=n.pagingCount-1,n.limit=1===n.pagingCount?0:n.vars.itemWidth>n.w?n.itemW*(n.count-1)+t*(n.count-1):(n.itemW+t)*n.count-n.w-t):(n.itemW=n.w,n.itemM=t,n.pagingCount=n.count,n.last=n.count-1),n.computedW=n.itemW-n.boxPadding,n.computedM=n.itemM},n.update=function(e,t){n.doMath(),v||(e<n.currentSlide?n.currentSlide+=1:e<=n.currentSlide&&0!==e&&(n.currentSlide-=1),n.animatingTo=n.currentSlide),n.vars.controlNav&&!n.manualControls&&("add"===t&&!v||n.pagingCount>n.controlNav.length?f.controlNav.update("add"):("remove"===t&&!v||n.pagingCount<n.controlNav.length)&&(v&&n.currentSlide>n.last&&(n.currentSlide-=1,n.animatingTo-=1),f.controlNav.update("remove",n.last))),n.vars.directionNav&&f.directionNav.update()},n.addSlide=function(e,t){var a=$(e);n.count+=1,n.last=n.count-1,d&&u?void 0!==t?n.slides.eq(n.count-t).after(a):n.container.prepend(a):void 0!==t?n.slides.eq(t).before(a):n.container.append(a),n.update(t,"add"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.added(n)},n.removeSlide=function(e){var t=isNaN(e)?n.slides.index($(e)):e;n.count-=1,n.last=n.count-1,isNaN(e)?$(e,n.slides).remove():d&&u?n.slides.eq(n.last).remove():n.slides.eq(e).remove(),n.doMath(),n.update(t,"remove"),n.slides=$(n.vars.selector+":not(.clone)",n),n.setup(),n.vars.removed(n)},f.init()},$(window).blur(function(t){e=!1}).focus(function(t){e=!0}),$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,fadeFirstSlide:!0,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",customDirectionNav:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},$.fn.flexslider=function(e){if(void 0===e&&(e={}),"object"==typeof e)return this.each(function(){var t=$(this),a=e.selector?e.selector:".slides > li",n=t.find(a);1===n.length&&e.allowOneSlide===!0||0===n.length?(n.fadeIn(400),e.start&&e.start(t)):void 0===t.data("flexslider")&&new $.flexslider(this,e)});var t=$(this).data("flexslider");switch(e){case"play":t.play();break;case"pause":t.pause();break;case"stop":t.stop();break;case"next":t.flexAnimate(t.getTarget("next"),!0);break;case"prev":case"previous":t.flexAnimate(t.getTarget("prev"),!0);break;default:"number"==typeof e&&t.flexAnimate(e,!0)}}}(jQuery);
//
// Dropdown Menu
// =====================================================================
;(function($) {

    $.fn.dropit = function(method) {

        var methods = {

            init : function(options) {
                this.dropit.settings = $.extend({}, this.dropit.defaults, options);
                return this.each(function() {
                    var $el = $(this),
                         el = this,
                         settings = $.fn.dropit.settings;

                    // Hide initial submenus
                    $el.addClass('dropit')
                    .find('>'+ settings.triggerParentEl +':has('+ settings.submenuEl +')').addClass('dropit-trigger')
                    .find(settings.submenuEl).addClass('dropit-submenu').hide();

                    // Open on click
                    $el.off(settings.action).on(settings.action, settings.triggerParentEl +':has('+ settings.submenuEl +') > '+ settings.triggerEl +'', function(){
                        // Close click menu's if clicked again
                        if(settings.action == 'click' && $(this).parents(settings.triggerParentEl).hasClass('dropit-open')){
                            settings.beforeHide.call(this);
                            $(this).parents(settings.triggerParentEl).removeClass('dropit-open').find(settings.submenuEl).hide();
                            settings.afterHide.call(this);
                            return false;
                        }

                        // Hide open menus
                        settings.beforeHide.call(this);
                        $('.dropit-open').removeClass('dropit-open').find('.dropit-submenu').hide();
                        settings.afterHide.call(this);

                        // Open this menu
                        settings.beforeShow.call(this);
                        $(this).parents(settings.triggerParentEl).addClass('dropit-open').find(settings.submenuEl).show();
                        settings.afterShow.call(this);

                        return false;
                    });

                    // Close if outside click
                    $(document).on('click', function(){
                        settings.beforeHide.call(this);
                        $('.dropit-open').removeClass('dropit-open').find('.dropit-submenu').hide();
                        settings.afterHide.call(this);
                    });

                    // If hover
                    if(settings.action == 'mouseenter'){
                        $el.on('mouseleave', '.dropit-open', function(){
                            settings.beforeHide.call(this);
                            $(this).removeClass('dropit-open').find(settings.submenuEl).hide();
                            settings.afterHide.call(this);
                        });
                    }

                    settings.afterLoad.call(this);
                });
            }

        };

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error( 'Method "' +  method + '" does not exist in dropit plugin!');
        }

    };

    $.fn.dropit.defaults = {
        action: 'click', // The open action for the trigger
        submenuEl: 'ul', // The submenu element
        triggerEl: 'a', // The trigger element
        triggerParentEl: 'li', // The trigger parent element
        afterLoad: function(){}, // Triggers when plugin has loaded
        beforeShow: function(){}, // Triggers before submenu is shown
        afterShow: function(){}, // Triggers after submenu is shown
        beforeHide: function(){}, // Triggers before submenu is hidden
        afterHide: function(){} // Triggers before submenu is hidden
    };

    $.fn.dropit.settings = {};

})(jQuery);
//
// Aside
// =====================================================================
(function(window, $) {
  var $aside_menu_trigger = $('.aside-trigger'),
      $content_wrapper = $('main'),
      $aside_links = $('aside li:not(.has-sub-menu) a'),
      $header = $('header'),
      $nav = $('nav'),
      $body = $('body');

  // Open-close aside menu clicking on the menu icon
  $aside_menu_trigger.on('click', function(event) {
    if (!$(event.currentTarget).hasClass('aside-trigger') && $aside_menu_trigger.hasClass('is-clicked')) return;
    event.preventDefault();

    $aside_menu_trigger.toggleClass('is-clicked');
    $header.toggleClass('aside-is-open');

    if (window.matchMedia && window.matchMedia("(max-width: 64em)").matches) {
      $nav.toggleClass('aside-is-open');
      $('aside').toggleClass('aside-is-open');
    }

    // $overlay.toggleClass('is-visible');
    $content_wrapper.toggleClass('aside-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
    // Firefox transitions break when parent overflow is changed,
    // so we need to wait for the end of the trasition to
    // give the body an overflow hidden
    $body.toggleClass('overflow-hidden');
    });

    // Check if transitions are not supported - i.e. in IE9
    if($('html').hasClass('no-csstransitions')) {
      $body.toggleClass('is-fixed');
    }

    $body.toggleClass('is-fixed');

    $('aside .has-sub-menu.sub-menu-open').trigger('click')
  });

  $('main.aside-is-open').on('click', function(event) {
    $('a.aside-trigger').trigger('click');
  });

}(window, jQuery || $));
//
// Blog
// ====================================================================
(function(window, $) {

  function addArgumentToUrl(name, value) {
    var url = new Url(document.location.href);
    url.path = '/library/';
    url.query[name] = value;
    return url.toString();
  }

  function removeArgumentFromUrl(name) {
    var url = new Url(document.location.href);
    url.path = '/library/';
    if (name in url.query) {
      delete url.query[name];
    }
    return url.toString();
  }

  var categorySelect = $('.select-category');
  categorySelect.on('change', function (e) {
    var categorySlug = categorySelect.val();
    if (!!categorySlug) {
      document.location = addArgumentToUrl('category', categorySlug);
    } else {
      document.location = removeArgumentFromUrl('category');
    }
  });

  var tagSelect = $('.select-tag');
  tagSelect.on('change', function (e) {
    var tagSlug = tagSelect.val();
    if (!!tagSlug) {
      document.location = addArgumentToUrl('tag', tagSlug);
    } else {
      document.location = removeArgumentFromUrl('tag');
    }
  });

  var blogSearchForm = $('#blog-search-form');
  blogSearchForm.on('submit', function(e) {
    e.preventDefault();
    var query = blogSearchForm.find('.search').val();
    if (!!query) {
      document.location = addArgumentToUrl('search', query);
    } else {
      document.location = removeArgumentFromUrl('search');
    }
  });

  new Pjax({
    elements: ['a.load-more-posts'],
    selectors: ['.section-blog-list'],
    switches: {
      '.section-blog-list': function(oldEl, newEl, options) {
        var $oldEl = $(oldEl);
        var $newEl = $(newEl);
        var newLoadMore = $newEl.find('a.load-more-posts');
        var oldLoadMore = $oldEl.find('a.load-more-posts');
        if (newLoadMore.length === 1) {
          var url = new Url(oldLoadMore.attr('href'));
          url.query.page = 1 + parseInt(url.query.page || 1);
          oldLoadMore.attr('href', url.toString());
        } else {
          oldLoadMore.remove();
        }
        $oldEl.find('ul.the-loop').append($newEl.find('ul.the-loop li'));
        this.onSwitch();
      }
    },
    scrollTo: false
  });
}(window, jQuery || $));
//
// Contact Page
// ====================================================================
(function(window, $) {
  var contactPage = $('.template-contact');
  if (contactPage.length === 0) {
    return;
  }

  var officesMenuEl = contactPage.find('.offices-menu');
  if (officesMenuEl.find('ul').length === 0) {
    contactPage.find('.office-location-details').css('display', 'block');
  } else {
    officesMenuEl.dropit({
      triggerEl: 'h1 a'
    });

    var officeMenuLabel = officesMenuEl.find('h1 .country-name');
    var officeItems = officesMenuEl.find(' ul li > a');
    officeItems.on('click', function(e) {
      e.preventDefault();

      var newData = $(e.currentTarget).data();
      officeMenuLabel.html(newData.countryName);
      contactPage.find('.office-location-details').css('display', 'none');
      contactPage.find('.office-location-' + newData.countryCode).css('display', 'block');
    });
    $(officeItems[0]).click();
  }
}(window, jQuery || $));
//
// Modal
// ====================================================================
(function($) {

  var modals = [],
      getCurrent = function() {
        return modals.length ? modals[modals.length - 1] : null;
      },
      selectCurrent = function() {
        var i,
            selected = false;
        for (i=modals.length-1; i>=0; i--) {
          if (modals[i].$blocker) {
            modals[i].$blocker.toggleClass('current',!selected).toggleClass('behind',selected);
            selected = true;
          }
        }
      };

  $.modal = function(el, options) {
    var remove, target;
    this.$body = $('body');
    this.options = $.extend({}, $.modal.defaults, options);
    this.options.doFade = !isNaN(parseInt(this.options.fadeDuration, 10));
    this.$blocker = null;
    if (this.options.closeExisting)
      while ($.modal.isActive())
        $.modal.close(); // Close any open modals.
    modals.push(this);
    if (el.is('a')) {
      target = el.attr('href');
      //Select element by id from href
      if (/^#/.test(target)) {
        this.$elm = $(target);
        if (this.$elm.length !== 1) return null;
        this.$body.append(this.$elm);
        this.open();
      //AJAX
      } else {
        this.$elm = $('<div>');
        this.$body.append(this.$elm);
        remove = function(event, modal) { modal.elm.remove(); };
        this.showSpinner();
        el.trigger($.modal.AJAX_SEND);
        $.get(target).done(function(html) {
          if (!$.modal.isActive()) return;
          el.trigger($.modal.AJAX_SUCCESS);
          var current = getCurrent();
          current.$elm.empty().append(html).on($.modal.CLOSE, remove);
          current.hideSpinner();
          current.open();
          el.trigger($.modal.AJAX_COMPLETE);
        }).fail(function() {
          el.trigger($.modal.AJAX_FAIL);
          var current = getCurrent();
          current.hideSpinner();
          modals.pop(); // remove expected modal from the list
          el.trigger($.modal.AJAX_COMPLETE);
        });
      }
    } else {
      this.$elm = el;
      this.$body.append(this.$elm);
      this.open();
    }
  };

  $.modal.prototype = {
    constructor: $.modal,

    open: function() {
      var m = this;
      this.block();
      if(this.options.doFade) {
        setTimeout(function() {
          m.show();
        }, this.options.fadeDuration * this.options.fadeDelay);
      } else {
        this.show();
      }
      $(document).off('keydown.modal').on('keydown.modal', function(event) {
        var current = getCurrent();
        if (event.which == 27 && current.options.escapeClose) current.close();
      });
      if (this.options.clickClose)
        this.$blocker.click(function(e) {
          if (e.target==this)
            $.modal.close();
        });
    },

    close: function() {
      modals.pop();
      this.unblock();
      this.hide();
      if (!$.modal.isActive())
        $(document).off('keydown.modal');
    },

    block: function() {
      this.$elm.trigger($.modal.BEFORE_BLOCK, [this._ctx()]);
      this.$body.css('overflow','hidden');
      this.$blocker = $('<div class="jquery-modal blocker current"></div>').appendTo(this.$body);
      selectCurrent();
      if(this.options.doFade) {
        this.$blocker.css('opacity',0).animate({opacity: 1}, this.options.fadeDuration);
      }
      this.$elm.trigger($.modal.BLOCK, [this._ctx()]);
    },

    unblock: function(now) {
      if (!now && this.options.doFade)
        this.$blocker.fadeOut(this.options.fadeDuration, this.unblock.bind(this,true));
      else {
        this.$blocker.children().appendTo(this.$body);
        this.$blocker.remove();
        this.$blocker = null;
        selectCurrent();
        if (!$.modal.isActive())
          this.$body.css('overflow','');
      }
    },

    show: function() {
      this.$elm.trigger($.modal.BEFORE_OPEN, [this._ctx()]);
      if (this.options.showClose) {
        this.closeButton = $('<a href="#close-modal" rel="modal:close" class="close-modal ' + this.options.closeClass + '">' + this.options.closeText + '</a>');
        this.$elm.append(this.closeButton);
      }
      this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker);
      if(this.options.doFade) {
        this.$elm.css({
          'opacity': 0,
          'display': 'inline-block'
        }).animate({opacity: 1}, this.options.fadeDuration);
      } else {
        this.$elm.css('display', 'inline-block');
      }
      this.$elm.trigger($.modal.OPEN, [this._ctx()]);
    },

    hide: function() {
      this.$elm.trigger($.modal.BEFORE_CLOSE, [this._ctx()]);
      if (this.closeButton) this.closeButton.remove();
      var _this = this;
      if(this.options.doFade) {
        this.$elm.fadeOut(this.options.fadeDuration, function () {
          _this.$elm.trigger($.modal.AFTER_CLOSE, [_this._ctx()]);
        });
      } else {
        this.$elm.hide(0, function () {
          _this.$elm.trigger($.modal.AFTER_CLOSE, [_this._ctx()]);
        });
      }
      this.$elm.trigger($.modal.CLOSE, [this._ctx()]);
    },

    showSpinner: function() {
      if (!this.options.showSpinner) return;
      this.spinner = this.spinner || $('<div class="' + this.options.modalClass + '-spinner"></div>')
        .append(this.options.spinnerHtml);
      this.$body.append(this.spinner);
      this.spinner.show();
    },

    hideSpinner: function() {
      if (this.spinner) this.spinner.remove();
    },

    //Return context for custom events
    _ctx: function() {
      return { elm: this.$elm, $blocker: this.$blocker, options: this.options };
    }
  };

  $.modal.close = function(event) {
    if (!$.modal.isActive()) return;
    if (event) event.preventDefault();
    var current = getCurrent();
    current.close();
    return current.$elm;
  };

  // Returns if there currently is an active modal
  $.modal.isActive = function () {
    return modals.length > 0;
  }

  $.modal.defaults = {
    closeExisting: true,
    escapeClose: true,
    clickClose: true,
    closeText: '',
    closeClass: '',
    modalClass: "modal",
    spinnerHtml: null,
    showSpinner: true,
    showClose: true,
    fadeDuration: 400,   // Number of milliseconds the fade animation takes.
    fadeDelay: 0.5        // Point during the overlay's fade-in that the modal begins to fade in (.5 = 50%, 1.5 = 150%, etc.)
  };

  // Event constants
  $.modal.BEFORE_BLOCK = 'modal:before-block';
  $.modal.BLOCK = 'modal:block';
  $.modal.BEFORE_OPEN = 'modal:before-open';
  $.modal.OPEN = 'modal:open';
  $.modal.BEFORE_CLOSE = 'modal:before-close';
  $.modal.CLOSE = 'modal:close';
  $.modal.AFTER_CLOSE = 'modal:after-close';
  $.modal.AJAX_SEND = 'modal:ajax:send';
  $.modal.AJAX_SUCCESS = 'modal:ajax:success';
  $.modal.AJAX_FAIL = 'modal:ajax:fail';
  $.modal.AJAX_COMPLETE = 'modal:ajax:complete';

  $.fn.modal = function(options){
    if (this.length === 1) {
      new $.modal(this, options);
    }
    return this;
  };

  // Automatically bind links with rel="modal:close" to, well, close the modal.
  $(document).on('click.modal', 'a[rel="modal:close"]', $.modal.close);
  $(document).on('click.modal', 'a[rel="modal:open"]', function(event) {
    event.preventDefault();
    $(this).modal();
  });
})(jQuery);
/*************************************************************************************
/ retina-img
/ largely based on inline-retina.js, but specifically altered for wagtail behavior
/ if the media query indicates a retina display, looks for img tags with class='retina-img'
/ and swaps the image with a corresponding 2x image (using the suffix '-2x') that exists in
/ the original_images folder. This assumes a standard deployment of django/wagtail.
/*************************************************************************************/
var query="(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-device-pixel-ratio: 1.5),(min-resolution: 144dpi),(min-resolution: 1.5dppx)",
    imgPathRegex = /.+\/(.*)\.(jpg|jpeg|png)/,
    procImgNameRegex = /(.*)(\.max.+|\.min-.+|\.width.+|\.height.+|\.fill.+|\.original)/,
    retinaImgPath = '/media/original_images/',
    retinaImgSuffix = '-2x';
if(window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(query).matches)
    for(var images=document.getElementsByClassName("retina-img"),i=0;i<images.length;i++){
        var image=images[i].getAttribute("src"),
            imageWidth=images[i].clientWidth,
            updateImage;
        var imgPathCaptures = imgPathRegex.exec(image);
        //if an img src path matches, this img is eligible for swapping with a retina version
        if(imgPathCaptures && imgPathCaptures.length >= 2){ 
            var imageName = imgPathCaptures[1], //the filename
                ext = imgPathCaptures[2]; //the extension
            var procImgNameCaptures = procImgNameRegex.exec(imageName);
            //if imgName matches a processed image name convention, extrapolate the root name
            if(procImgNameCaptures && procImgNameCaptures.length >= 2)
                imageName = procImgNameCaptures[1];
            //update the image src with the matching image name and appropriate retina img suffix (-2x).
            //look in the original_images folder for it, (this is the behavior, since there's not 
            //likely to be a corresponding retina image in the (processed) images folder.)
            updateImage = retinaImgPath + imageName + retinaImgSuffix + '.' + ext;
            images[i].width=imageWidth;
            images[i].src=updateImage;
        }
        
    }
//
// Slides
// ====================================================================
(function(window, $) {
  $('.slides-container').flexslider({
    animation: 'slide',
    smoothHeight: true,
    controlsContainer: '.slides-nav'
  });
}(window, jQuery || $));
//
// Tabs
// ====================================================================
(function(window, $) {
  var tabs = $('.tabs-container');

  tabs.each(function(){
    var tab = $(this),
      tabItems = tab.find('ul.tabs-nav'),
      tabContentWrapper = tab.children('ul.tabs-content'),
      tabNavigation = tab.find('nav');

    tabItems.on('click', 'a', function(event){
      event.preventDefault();
      var selectedItem = $(this);
      if( !selectedItem.hasClass('selected') ) {
        var selectedTab = selectedItem.data('content'),
          selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
          slectedContentHeight = selectedContent.innerHeight();

        tabItems.find('a.selected').removeClass('selected');
        selectedItem.addClass('selected');
        selectedContent.addClass('selected').siblings('li').removeClass('selected');
        // animate tabContentWrapper height when content changes
        tabContentWrapper.animate({
          'height': slectedContentHeight
        }, 200);
      }
    });

    // hide the .tabs-container::after element when tabbed navigation has scrolled to the end (mobile version)
    checkScrolling(tabNavigation);
    tabNavigation.on('scroll', function(){
      checkScrolling($(this));
    });
  });

  $(window).on('resize', function(){
    tabs.each(function(){
      var tab = $(this);
      checkScrolling(tab.find('nav'));
      tab.find('.tabs-content').css('height', 'auto');
    });
  });

  function checkScrolling(tabs){
    var totalTabWidth = parseInt(tabs.children('.tabs-nav').width()),
      tabsViewport = parseInt(tabs.width());
    if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
      tabs.parent('.tabs-container').addClass('is-ended');
    } else {
      tabs.parent('.tabs-container').removeClass('is-ended');
    }
  }
}(window, jQuery || $));
//
// WOW
// ====================================================================
(function(window, $) {
  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       100,        // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
        $(box).find('video').each(function(index, element) {
          element.play();
        });
      }
    }
  );
  wow.init();
}(window, jQuery || $));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlubGluZS1yZXRpbmEubWluLmpzIiwidXJsLm1pbi5qcyIsInBqYXguanMiLCJqcXVlcnkuZmxleHNsaWRlci1taW4uanMiLCIwX2Ryb3Bkb3duLmpzIiwiYXNpZGUuanMiLCJibG9nLmpzIiwiY29udGFjdF9wYWdlLmpzIiwibW9kYWwuanMiLCJyZXRpbmEtaW1nLmpzIiwic2xpZGVzLmpzIiwidGFicy5qcyIsIndvdy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvd0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3JPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHF1ZXJ5PVwiKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSwobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLCgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzLzIpLChtaW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLChtaW4tcmVzb2x1dGlvbjogMTQ0ZHBpKSwobWluLXJlc29sdXRpb246IDEuNWRwcHgpXCI7aWYod2luZG93LmRldmljZVBpeGVsUmF0aW8+MXx8d2luZG93Lm1hdGNoTWVkaWEmJndpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKWZvcih2YXIgaW1hZ2VzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZXRpbmFcIiksaT0wO2k8aW1hZ2VzLmxlbmd0aDtpKyspe3ZhciBpbWFnZT1pbWFnZXNbaV0uZ2V0QXR0cmlidXRlKFwic3JjXCIpLGltYWdlV2lkdGg9aW1hZ2VzW2ldLmNsaWVudFdpZHRoLGV4dD1pbWFnZS5zcGxpdChcIi5cIikucG9wKCksdXBkYXRlSW1hZ2U7XCJwbmdcIj09PWV4dD91cGRhdGVJbWFnZT1pbWFnZS5yZXBsYWNlKFwiLnBuZ1wiLFwiQDJ4LnBuZ1wiKTpcImpwZ1wiPT09ZXh0P3VwZGF0ZUltYWdlPWltYWdlLnJlcGxhY2UoXCIuanBnXCIsXCJAMnguanBnXCIpOlwianBlZ1wiPT09ZXh0JiYodXBkYXRlSW1hZ2U9aW1hZ2UucmVwbGFjZShcIi5qcGVnXCIsXCJAMnguanBlZ1wiKSksaW1hZ2VzW2ldLndpZHRoPWltYWdlV2lkdGgsaW1hZ2VzW2ldLnNyYz11cGRhdGVJbWFnZX0iLCIhZnVuY3Rpb24odCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gcih0LHIpe3ZhciBlLHAsYSxjO1widW5kZWZpbmVkXCI9PXR5cGVvZiBkb2N1bWVudCYmXCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZT8oZT1cImZpbGU6Ly9cIisocHJvY2Vzcy5wbGF0Zm9ybS5tYXRjaCgvXndpbi9pKT9cIi9cIjpcIlwiKStyZXF1aXJlKFwiZnNcIikucmVhbHBhdGhTeW5jKFwiLlwiKSxyJiZcIi9cIiE9PXIuY2hhckF0KDApJiYhci5tYXRjaCgvXlxcdys6XFwvXFwvLykmJihyPWUrcmVxdWlyZShcInBhdGhcIikuc2VwK3IpLHA9cmVxdWlyZShcInVybFwiKS5wYXJzZShyfHxlKSk6KGU9ZG9jdW1lbnQubG9jYXRpb24uaHJlZixwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpLHAuaHJlZj1yfHxlKSxjPShyfHxlKS5tYXRjaCgvXFwvXFwvKC4qPykoPzo6KC4qPykpP0AvKXx8W107Zm9yKGEgaW4gcyl0W2FdPXBbc1thXV18fFwiXCI7aWYodC5wcm90b2NvbD10LnByb3RvY29sLnJlcGxhY2UoLzokLyxcIlwiKSx0LnF1ZXJ5PXQucXVlcnkucmVwbGFjZSgvXlxcPy8sXCJcIiksdC5oYXNoPW8odC5oYXNoLnJlcGxhY2UoL14jLyxcIlwiKSksdC51c2VyPW8oY1sxXXx8XCJcIiksdC5wYXNzPW8oY1syXXx8XCJcIiksdC5wb3J0PWhbdC5wcm90b2NvbF09PXQucG9ydHx8MD09dC5wb3J0P1wiXCI6dC5wb3J0LHQucHJvdG9jb2x8fC9eKFthLXpdKzopP1xcL1xcL1xcLz8vLnRlc3QocikpdC5wYXRoPXQucGF0aC5yZXBsYWNlKC9eXFwvPy8sXCIvXCIpO2Vsc2V7dmFyIHU9bmV3IG4oZS5tYXRjaCgvKC4qXFwvKS8pWzBdKSxmPXUucGF0aC5zcGxpdChcIi9cIiksbD10LnBhdGguc3BsaXQoXCIvXCIpLHk9W1wicHJvdG9jb2xcIixcInVzZXJcIixcInBhc3NcIixcImhvc3RcIixcInBvcnRcIl0sZD15Lmxlbmd0aDtmb3IoZi5wb3AoKSxhPTA7ZD5hO2ErKyl0W3lbYV1dPXVbeVthXV07Zm9yKDtcIi4uXCI9PWxbMF07KWYucG9wKCksbC5zaGlmdCgpO3QucGF0aD0oXCIvXCIhPXIuY2hhckF0KDApP2Yuam9pbihcIi9cIik6XCJcIikrXCIvXCIrbC5qb2luKFwiL1wiKX10LnBhdGhzKChcIi9cIj09dC5wYXRoLmNoYXJBdCgwKT90LnBhdGguc2xpY2UoMSk6dC5wYXRoKS5zcGxpdChcIi9cIikpLHQucXVlcnk9bmV3IGkodC5xdWVyeSl9ZnVuY3Rpb24gZSh0KXtyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHQpLnJlcGxhY2UoLycvZyxcIiUyN1wiKX1mdW5jdGlvbiBvKHQpe3JldHVybiB0PXQucmVwbGFjZSgvXFwrL2csXCIgXCIpLHQ9dC5yZXBsYWNlKC8lKFtlZl1bMC05YS1mXSklKFs4OWFiXVswLTlhLWZdKSUoWzg5YWJdWzAtOWEtZl0pL2dpLGZ1bmN0aW9uKHQscixlLG8pe3ZhciBpPXBhcnNlSW50KHIsMTYpLTIyNCxuPXBhcnNlSW50KGUsMTYpLTEyODtpZigwPT09aSYmMzI+bilyZXR1cm4gdDt2YXIgcz1wYXJzZUludChvLDE2KS0xMjgsaD0oaTw8MTIpKyhuPDw2KStzO3JldHVybiBoPjY1NTM1P3Q6U3RyaW5nLmZyb21DaGFyQ29kZShoKX0pLHQ9dC5yZXBsYWNlKC8lKFtjZF1bMC05YS1mXSklKFs4OWFiXVswLTlhLWZdKS9naSxmdW5jdGlvbih0LHIsZSl7dmFyIG89cGFyc2VJbnQociwxNiktMTkyO2lmKDI+bylyZXR1cm4gdDt2YXIgaT1wYXJzZUludChlLDE2KS0xMjg7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoKG88PDYpK2kpfSksdC5yZXBsYWNlKC8lKFswLTddWzAtOWEtZl0pL2dpLGZ1bmN0aW9uKHQscil7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQociwxNikpfSl9ZnVuY3Rpb24gaSh0KXtmb3IodmFyIHIsZT0vKFtePSZdKykoPShbXiZdKikpPy9nO3I9ZS5leGVjKHQpOyl7dmFyIGk9ZGVjb2RlVVJJQ29tcG9uZW50KHJbMV0ucmVwbGFjZSgvXFwrL2csXCIgXCIpKSxuPXJbM10/byhyWzNdKTpcIlwiO3ZvaWQgMCE9PXRoaXNbaV0mJm51bGwhPT10aGlzW2ldPyh0aGlzW2ldaW5zdGFuY2VvZiBBcnJheXx8KHRoaXNbaV09W3RoaXNbaV1dKSx0aGlzW2ldLnB1c2gobikpOnRoaXNbaV09bn19ZnVuY3Rpb24gbih0KXtyKHRoaXMsdCl9dmFyIHM9e3Byb3RvY29sOlwicHJvdG9jb2xcIixob3N0OlwiaG9zdG5hbWVcIixwb3J0OlwicG9ydFwiLHBhdGg6XCJwYXRobmFtZVwiLHF1ZXJ5Olwic2VhcmNoXCIsaGFzaDpcImhhc2hcIn0saD17ZnRwOjIxLGdvcGhlcjo3MCxodHRwOjgwLGh0dHBzOjQ0Myx3czo4MCx3c3M6NDQzfTtpLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciB0LHIsbz1cIlwiLGk9ZTtmb3IodCBpbiB0aGlzKWlmKCEodGhpc1t0XWluc3RhbmNlb2YgRnVuY3Rpb258fG51bGw9PT10aGlzW3RdKSlpZih0aGlzW3RdaW5zdGFuY2VvZiBBcnJheSl7dmFyIG49dGhpc1t0XS5sZW5ndGg7aWYobilmb3Iocj0wO24+cjtyKyspbys9bz9cIiZcIjpcIlwiLG8rPWkodCkrXCI9XCIraSh0aGlzW3RdW3JdKTtlbHNlIG8rPShvP1wiJlwiOlwiXCIpK2kodCkrXCI9XCJ9ZWxzZSBvKz1vP1wiJlwiOlwiXCIsbys9aSh0KStcIj1cIitpKHRoaXNbdF0pO3JldHVybiBvfSxuLnByb3RvdHlwZS5jbGVhclF1ZXJ5PWZ1bmN0aW9uKCl7Zm9yKHZhciB0IGluIHRoaXMucXVlcnkpdGhpcy5xdWVyeVt0XWluc3RhbmNlb2YgRnVuY3Rpb258fGRlbGV0ZSB0aGlzLnF1ZXJ5W3RdO3JldHVybiB0aGlzfSxuLnByb3RvdHlwZS5xdWVyeUxlbmd0aD1mdW5jdGlvbigpe3ZhciB0LHI9MDtmb3IodCBpbiB0aGlzKXRoaXNbdF1pbnN0YW5jZW9mIEZ1bmN0aW9ufHxyKys7cmV0dXJuIHJ9LG4ucHJvdG90eXBlLmlzRW1wdHlRdWVyeT1mdW5jdGlvbigpe3JldHVybiAwPT09dGhpcy5xdWVyeUxlbmd0aCgpfSxuLnByb3RvdHlwZS5wYXRocz1mdW5jdGlvbih0KXt2YXIgcixpPVwiXCIsbj0wO2lmKHQmJnQubGVuZ3RoJiZ0K1wiXCIhPT10KXtmb3IodGhpcy5pc0Fic29sdXRlKCkmJihpPVwiL1wiKSxyPXQubGVuZ3RoO3I+bjtuKyspdFtuXT0hbiYmdFtuXS5tYXRjaCgvXlxcdzokLyk/dFtuXTplKHRbbl0pO3RoaXMucGF0aD1pK3Quam9pbihcIi9cIil9Zm9yKHQ9KFwiL1wiPT09dGhpcy5wYXRoLmNoYXJBdCgwKT90aGlzLnBhdGguc2xpY2UoMSk6dGhpcy5wYXRoKS5zcGxpdChcIi9cIiksbj0wLHI9dC5sZW5ndGg7cj5uO24rKyl0W25dPW8odFtuXSk7cmV0dXJuIHR9LG4ucHJvdG90eXBlLmVuY29kZT1lLG4ucHJvdG90eXBlLmRlY29kZT1vLG4ucHJvdG90eXBlLmlzQWJzb2x1dGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcm90b2NvbHx8XCIvXCI9PT10aGlzLnBhdGguY2hhckF0KDApfSxuLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybih0aGlzLnByb3RvY29sJiZ0aGlzLnByb3RvY29sK1wiOi8vXCIpKyh0aGlzLnVzZXImJmUodGhpcy51c2VyKSsodGhpcy5wYXNzJiZcIjpcIitlKHRoaXMucGFzcykpK1wiQFwiKSsodGhpcy5ob3N0JiZ0aGlzLmhvc3QpKyh0aGlzLnBvcnQmJlwiOlwiK3RoaXMucG9ydCkrKHRoaXMucGF0aCYmdGhpcy5wYXRoKSsodGhpcy5xdWVyeS50b1N0cmluZygpJiZcIj9cIit0aGlzLnF1ZXJ5KSsodGhpcy5oYXNoJiZcIiNcIitlKHRoaXMuaGFzaCkpfSx0W3QuZXhwb3J0cz9cImV4cG9ydHNcIjpcIlVybFwiXT1ufShcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGU6d2luZG93KTsiLCIhZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShlKTtlbHNle3ZhciBmO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/Zj13aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9mPWdsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKGY9c2VsZiksZi5QamF4PWUoKX19KGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGNsb25lID0gX2RlcmVxXygnLi9saWIvY2xvbmUuanMnKVxudmFyIGV4ZWN1dGVTY3JpcHRzID0gX2RlcmVxXygnLi9saWIvZXhlY3V0ZS1zY3JpcHRzLmpzJylcblxudmFyIGZvckVhY2hFbHMgPSBfZGVyZXFfKFwiLi9saWIvZm9yZWFjaC1lbHMuanNcIilcblxudmFyIG5ld1VpZCA9IF9kZXJlcV8oXCIuL2xpYi91bmlxdWVpZC5qc1wiKVxuXG52YXIgb24gPSBfZGVyZXFfKFwiLi9saWIvZXZlbnRzL29uLmpzXCIpXG4vLyB2YXIgb2ZmID0gcmVxdWlyZShcIi4vbGliL2V2ZW50cy9vbi5qc1wiKVxudmFyIHRyaWdnZXIgPSBfZGVyZXFfKFwiLi9saWIvZXZlbnRzL3RyaWdnZXIuanNcIilcblxuXG52YXIgUGpheCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB0aGlzLmZpcnN0cnVuID0gdHJ1ZVxuXG4gICAgdmFyIHBhcnNlT3B0aW9ucyA9IF9kZXJlcV8oXCIuL2xpYi9wcm90by9wYXJzZS1vcHRpb25zLmpzXCIpO1xuICAgIHBhcnNlT3B0aW9ucy5hcHBseSh0aGlzLFtvcHRpb25zXSlcbiAgICB0aGlzLmxvZyhcIlBqYXggb3B0aW9uc1wiLCB0aGlzLm9wdGlvbnMpXG5cbiAgICB0aGlzLm1heFVpZCA9IHRoaXMubGFzdFVpZCA9IG5ld1VpZCgpXG5cbiAgICB0aGlzLnBhcnNlRE9NKGRvY3VtZW50KVxuXG4gICAgb24od2luZG93LCBcInBvcHN0YXRlXCIsIGZ1bmN0aW9uKHN0KSB7XG4gICAgICBpZiAoc3Quc3RhdGUpIHtcbiAgICAgICAgdmFyIG9wdCA9IGNsb25lKHRoaXMub3B0aW9ucylcbiAgICAgICAgb3B0LnVybCA9IHN0LnN0YXRlLnVybFxuICAgICAgICBvcHQudGl0bGUgPSBzdC5zdGF0ZS50aXRsZVxuICAgICAgICBvcHQuaGlzdG9yeSA9IGZhbHNlXG5cbiAgICAgICAgaWYgKHN0LnN0YXRlLnVpZCA8IHRoaXMubGFzdFVpZCkge1xuICAgICAgICAgIG9wdC5iYWNrd2FyZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBvcHQuZm9yd2FyZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RVaWQgPSBzdC5zdGF0ZS51aWRcblxuICAgICAgICAvLyBAdG9kbyBpbXBsZW1lbnQgaGlzdG9yeSBjYWNoZSBoZXJlLCBiYXNlZCBvbiB1aWRcbiAgICAgICAgdGhpcy5sb2FkVXJsKHN0LnN0YXRlLnVybCwgb3B0KVxuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSlcbiAgfVxuXG5QamF4LnByb3RvdHlwZSA9IHtcbiAgbG9nOiBfZGVyZXFfKFwiLi9saWIvcHJvdG8vbG9nLmpzXCIpLFxuXG4gIGdldEVsZW1lbnRzOiBfZGVyZXFfKFwiLi9saWIvcHJvdG8vZ2V0LWVsZW1lbnRzLmpzXCIpLFxuXG4gIHBhcnNlRE9NOiBfZGVyZXFfKFwiLi9saWIvcHJvdG8vcGFyc2UtZG9tLmpzXCIpLFxuXG4gIHJlZnJlc2g6IF9kZXJlcV8oXCIuL2xpYi9wcm90by9yZWZyZXNoLmpzXCIpLFxuXG4gIHJlbG9hZDogX2RlcmVxXyhcIi4vbGliL3JlbG9hZC5qc1wiKSxcblxuICBhdHRhY2hMaW5rOiBfZGVyZXFfKFwiLi9saWIvcHJvdG8vYXR0YWNoLWxpbmsuanNcIiksXG5cbiAgZm9yRWFjaFNlbGVjdG9yczogZnVuY3Rpb24oY2IsIGNvbnRleHQsIERPTWNvbnRleHQpIHtcbiAgICByZXR1cm4gX2RlcmVxXyhcIi4vbGliL2ZvcmVhY2gtc2VsZWN0b3JzLmpzXCIpLmJpbmQodGhpcykodGhpcy5vcHRpb25zLnNlbGVjdG9ycywgY2IsIGNvbnRleHQsIERPTWNvbnRleHQpXG4gIH0sXG5cbiAgc3dpdGNoU2VsZWN0b3JzOiBmdW5jdGlvbihzZWxlY3RvcnMsIGZyb21FbCwgdG9FbCwgb3B0aW9ucykge1xuICAgIHJldHVybiBfZGVyZXFfKFwiLi9saWIvc3dpdGNoZXMtc2VsZWN0b3JzLmpzXCIpLmJpbmQodGhpcykodGhpcy5vcHRpb25zLnN3aXRjaGVzLCB0aGlzLm9wdGlvbnMuc3dpdGNoZXNPcHRpb25zLCBzZWxlY3RvcnMsIGZyb21FbCwgdG9FbCwgb3B0aW9ucylcbiAgfSxcblxuICAvLyB0b28gbXVjaCBwcm9ibGVtIHdpdGggdGhlIGNvZGUgYmVsb3dcbiAgLy8gKyBpdOKAmXMgdG9vIGRhbmdlcm91c1xuLy8gICBzd2l0Y2hGYWxsYmFjazogZnVuY3Rpb24oZnJvbUVsLCB0b0VsKSB7XG4vLyAgICAgdGhpcy5zd2l0Y2hTZWxlY3RvcnMoW1wiaGVhZFwiLCBcImJvZHlcIl0sIGZyb21FbCwgdG9FbClcbi8vICAgICAvLyBleGVjdXRlIHNjcmlwdCB3aGVuIERPTSBpcyBsaWtlIGl0IHNob3VsZCBiZVxuLy8gICAgIFBqYXguZXhlY3V0ZVNjcmlwdHMoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRcIikpXG4vLyAgICAgUGpheC5leGVjdXRlU2NyaXB0cyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKSlcbi8vICAgfVxuXG4gIGxhdGVzdENoYW5jZTogZnVuY3Rpb24oaHJlZikge1xuICAgIHdpbmRvdy5sb2NhdGlvbiA9IGhyZWZcbiAgfSxcblxuICBvblN3aXRjaDogZnVuY3Rpb24oKSB7XG4gICAgdHJpZ2dlcih3aW5kb3csIFwicmVzaXplIHNjcm9sbFwiKVxuICB9LFxuXG4gIGxvYWRDb250ZW50OiBmdW5jdGlvbihodG1sLCBvcHRpb25zKSB7XG4gICAgdmFyIHRtcEVsID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KClcblxuICAgIC8vIHBhcnNlIEhUTUwgYXR0cmlidXRlcyB0byBjb3B5IHRoZW1cbiAgICAvLyBzaW5jZSB3ZSBhcmUgZm9yY2VkIHRvIHVzZSBkb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MIChvdXRlckhUTUwgY2FuJ3QgYmUgdXNlZCBmb3IgPGh0bWw+KVxuICAgIHZhciBodG1sUmVnZXggPSAvPGh0bWxbXj5dKz4vZ2lcbiAgICB2YXIgaHRtbEF0dHJpYnNSZWdleCA9IC9cXHM/W2EtejpdKyg/OlxcPSg/OlxcJ3xcXFwiKVteXFwnXFxcIj5dKyg/OlxcJ3xcXFwiKSkqL2dpXG4gICAgdmFyIG1hdGNoZXMgPSBodG1sLm1hdGNoKGh0bWxSZWdleClcbiAgICBpZiAobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgbWF0Y2hlcyA9IG1hdGNoZXNbMF0ubWF0Y2goaHRtbEF0dHJpYnNSZWdleClcbiAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICBtYXRjaGVzLnNoaWZ0KClcbiAgICAgICAgbWF0Y2hlcy5mb3JFYWNoKGZ1bmN0aW9uKGh0bWxBdHRyaWIpIHtcbiAgICAgICAgICB2YXIgYXR0ciA9IGh0bWxBdHRyaWIudHJpbSgpLnNwbGl0KFwiPVwiKVxuICAgICAgICAgIGlmIChhdHRyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdG1wRWwuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyWzBdLCB0cnVlKVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRtcEVsLmRvY3VtZW50RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0clswXSwgYXR0clsxXS5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHRtcEVsLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwgPSBodG1sXG4gICAgdGhpcy5sb2coXCJsb2FkIGNvbnRlbnRcIiwgdG1wRWwuZG9jdW1lbnRFbGVtZW50LmF0dHJpYnV0ZXMsIHRtcEVsLmRvY3VtZW50RWxlbWVudC5pbm5lckhUTUwubGVuZ3RoKVxuXG4gICAgLy8gQ2xlYXIgb3V0IGFueSBmb2N1c2VkIGNvbnRyb2xzIGJlZm9yZSBpbnNlcnRpbmcgbmV3IHBhZ2UgY29udGVudHMuXG4gICAgLy8gd2UgY2xlYXIgZm9jdXMgb24gbm9uIGZvcm0gZWxlbWVudHNcbiAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAhZG9jdW1lbnQuYWN0aXZlRWxlbWVudC52YWx1ZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKClcbiAgICAgIH0gY2F0Y2ggKGUpIHsgfVxuICAgIH1cblxuICAgIC8vIHRyeSB7XG4gICAgdGhpcy5zd2l0Y2hTZWxlY3RvcnModGhpcy5vcHRpb25zLnNlbGVjdG9ycywgdG1wRWwsIGRvY3VtZW50LCBvcHRpb25zKVxuXG4gICAgLy8gRkYgYnVnOiBXb27igJl0IGF1dG9mb2N1cyBmaWVsZHMgdGhhdCBhcmUgaW5zZXJ0ZWQgdmlhIEpTLlxuICAgIC8vIFRoaXMgYmVoYXZpb3IgaXMgaW5jb3JyZWN0LiBTbyBpZiB0aGVyZXMgbm8gY3VycmVudCBmb2N1cywgYXV0b2ZvY3VzXG4gICAgLy8gdGhlIGxhc3QgZmllbGQuXG4gICAgLy9cbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9odG1sL3dnL2RyYWZ0cy9odG1sL21hc3Rlci9mb3Jtcy5odG1sXG4gICAgdmFyIGF1dG9mb2N1c0VsID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIlthdXRvZm9jdXNdXCIpKS5wb3AoKVxuICAgIGlmIChhdXRvZm9jdXNFbCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBhdXRvZm9jdXNFbCkge1xuICAgICAgYXV0b2ZvY3VzRWwuZm9jdXMoKTtcbiAgICB9XG5cbiAgICAvLyBleGVjdXRlIHNjcmlwdHMgd2hlbiBET00gaGF2ZSBiZWVuIGNvbXBsZXRlbHkgdXBkYXRlZFxuICAgIHRoaXMub3B0aW9ucy5zZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgICAgZm9yRWFjaEVscyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgZXhlY3V0ZVNjcmlwdHMoZWwpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLy8gfVxuICAgIC8vIGNhdGNoKGUpIHtcbiAgICAvLyAgIGlmICh0aGlzLm9wdGlvbnMuZGVidWcpIHtcbiAgICAvLyAgICAgdGhpcy5sb2coXCJQamF4IHN3aXRjaCBmYWlsOiBcIiwgZSlcbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuc3dpdGNoRmFsbGJhY2sodG1wRWwsIGRvY3VtZW50KVxuICAgIC8vIH1cbiAgfSxcblxuICBkb1JlcXVlc3Q6IF9kZXJlcV8oXCIuL2xpYi9yZXF1ZXN0LmpzXCIpLFxuXG4gIGxvYWRVcmw6IGZ1bmN0aW9uKGhyZWYsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmxvZyhcImxvYWQgaHJlZlwiLCBocmVmLCBvcHRpb25zKVxuXG4gICAgdHJpZ2dlcihkb2N1bWVudCwgXCJwamF4OnNlbmRcIiwgb3B0aW9ucyk7XG5cbiAgICAvLyBEbyB0aGUgcmVxdWVzdFxuICAgIHRoaXMuZG9SZXF1ZXN0KGhyZWYsIGZ1bmN0aW9uKGh0bWwpIHtcbiAgICAgIC8vIEZhaWwgaWYgdW5hYmxlIHRvIGxvYWQgSFRNTCB2aWEgQUpBWFxuICAgICAgaWYgKGh0bWwgPT09IGZhbHNlKSB7XG4gICAgICAgIHRyaWdnZXIoZG9jdW1lbnQsXCJwamF4OmNvbXBsZXRlIHBqYXg6ZXJyb3JcIiwgb3B0aW9ucylcblxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gQ2xlYXIgb3V0IGFueSBmb2N1c2VkIGNvbnRyb2xzIGJlZm9yZSBpbnNlcnRpbmcgbmV3IHBhZ2UgY29udGVudHMuXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKVxuXG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLmxvYWRDb250ZW50KGh0bWwsIG9wdGlvbnMpXG4gICAgICB9XG4gICAgICBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQamF4IHN3aXRjaCBmYWlsOiBcIiwgZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5sYXRlc3RDaGFuY2UoaHJlZilcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuaGlzdG9yeSkge1xuICAgICAgICBpZiAodGhpcy5maXJzdHJ1bikge1xuICAgICAgICAgIHRoaXMubGFzdFVpZCA9IHRoaXMubWF4VWlkID0gbmV3VWlkKClcbiAgICAgICAgICB0aGlzLmZpcnN0cnVuID0gZmFsc2VcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe1xuICAgICAgICAgICAgdXJsOiB3aW5kb3cubG9jYXRpb24uaHJlZixcbiAgICAgICAgICAgIHRpdGxlOiBkb2N1bWVudC50aXRsZSxcbiAgICAgICAgICAgIHVpZDogdGhpcy5tYXhVaWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvY3VtZW50LnRpdGxlKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlIGJyb3dzZXIgaGlzdG9yeVxuICAgICAgICB0aGlzLmxhc3RVaWQgPSB0aGlzLm1heFVpZCA9IG5ld1VpZCgpXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7XG4gICAgICAgICAgdXJsOiBocmVmLFxuICAgICAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlLFxuICAgICAgICAgIHVpZDogdGhpcy5tYXhVaWRcbiAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zLnRpdGxlLFxuICAgICAgICAgIGhyZWYpXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZm9yRWFjaFNlbGVjdG9ycyhmdW5jdGlvbihlbCkge1xuICAgICAgICB0aGlzLnBhcnNlRE9NKGVsKVxuICAgICAgfSwgdGhpcylcblxuICAgICAgLy8gRmlyZSBFdmVudHNcbiAgICAgIHRyaWdnZXIoZG9jdW1lbnQsXCJwamF4OmNvbXBsZXRlIHBqYXg6c3VjY2Vzc1wiLCBvcHRpb25zKVxuXG4gICAgICBvcHRpb25zLmFuYWx5dGljcygpXG5cbiAgICAgIC8vIFNjcm9sbCBwYWdlIHRvIHRvcCBvbiBuZXcgcGFnZSBsb2FkXG4gICAgICBpZiAob3B0aW9ucy5zY3JvbGxUbyAhPT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuc2Nyb2xsVG8ubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbyhvcHRpb25zLnNjcm9sbFRvWzBdLCBvcHRpb25zLnNjcm9sbFRvWzFdKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBvcHRpb25zLnNjcm9sbFRvKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKVxuICB9XG59XG5cblBqYXguaXNTdXBwb3J0ZWQgPSBfZGVyZXFfKFwiLi9saWIvaXMtc3VwcG9ydGVkLmpzXCIpO1xuXG4vL2FyZ3VhYmx5IGNvdWxkIGRvIGBpZiggcmVxdWlyZShcIi4vbGliL2lzLXN1cHBvcnRlZC5qc1wiKSgpKSB7YCBidXQgdGhhdCBtaWdodCBiZSBhIGxpdHRsZSB0byBzaW1wbGVcbmlmIChQamF4LmlzU3VwcG9ydGVkKCkpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBQamF4XG59XG4vLyBpZiB0aGVyZSBpc27igJl0IHJlcXVpcmVkIGJyb3dzZXIgZnVuY3Rpb25zLCByZXR1cm5pbmcgc3R1cGlkIGFwaVxuZWxzZSB7XG4gIHZhciBzdHVwaWRQamF4ID0gZnVuY3Rpb24oKSB7fVxuICBmb3IgKHZhciBrZXkgaW4gUGpheC5wcm90b3R5cGUpIHtcbiAgICBpZiAoUGpheC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgUGpheC5wcm90b3R5cGVba2V5XSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICBzdHVwaWRQamF4W2tleV0gPSBzdHVwaWRQamF4XG4gICAgfVxuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBzdHVwaWRQamF4XG59XG5cbn0se1wiLi9saWIvY2xvbmUuanNcIjoyLFwiLi9saWIvZXZlbnRzL29uLmpzXCI6NCxcIi4vbGliL2V2ZW50cy90cmlnZ2VyLmpzXCI6NSxcIi4vbGliL2V4ZWN1dGUtc2NyaXB0cy5qc1wiOjYsXCIuL2xpYi9mb3JlYWNoLWVscy5qc1wiOjcsXCIuL2xpYi9mb3JlYWNoLXNlbGVjdG9ycy5qc1wiOjgsXCIuL2xpYi9pcy1zdXBwb3J0ZWQuanNcIjo5LFwiLi9saWIvcHJvdG8vYXR0YWNoLWxpbmsuanNcIjoxMSxcIi4vbGliL3Byb3RvL2dldC1lbGVtZW50cy5qc1wiOjEyLFwiLi9saWIvcHJvdG8vbG9nLmpzXCI6MTMsXCIuL2xpYi9wcm90by9wYXJzZS1kb20uanNcIjoxNCxcIi4vbGliL3Byb3RvL3BhcnNlLW9wdGlvbnMuanNcIjoxNixcIi4vbGliL3Byb3RvL3JlZnJlc2guanNcIjoxNyxcIi4vbGliL3JlbG9hZC5qc1wiOjE4LFwiLi9saWIvcmVxdWVzdC5qc1wiOjE5LFwiLi9saWIvc3dpdGNoZXMtc2VsZWN0b3JzLmpzXCI6MjAsXCIuL2xpYi91bmlxdWVpZC5qc1wiOjIyfV0sMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaikge1xuICBpZiAobnVsbCA9PT0gb2JqIHx8IFwib2JqZWN0XCIgIT0gdHlwZW9mIG9iaikge1xuICAgIHJldHVybiBvYmpcbiAgfVxuICB2YXIgY29weSA9IG9iai5jb25zdHJ1Y3RvcigpXG4gIGZvciAodmFyIGF0dHIgaW4gb2JqKSB7XG4gICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgY29weVthdHRyXSA9IG9ialthdHRyXVxuICAgIH1cbiAgfVxuICByZXR1cm4gY29weVxufVxuXG59LHt9XSwzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgLy8gY29uc29sZS5sb2coXCJnb2luZyB0byBleGVjdXRlIHNjcmlwdFwiLCBlbClcblxuICB2YXIgY29kZSA9IChlbC50ZXh0IHx8IGVsLnRleHRDb250ZW50IHx8IGVsLmlubmVySFRNTCB8fCBcIlwiKVxuICB2YXIgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudFxuICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKVxuXG4gIGlmIChjb2RlLm1hdGNoKFwiZG9jdW1lbnQud3JpdGVcIikpIHtcbiAgICBpZiAoY29uc29sZSAmJiBjb25zb2xlLmxvZykge1xuICAgICAgY29uc29sZS5sb2coXCJTY3JpcHQgY29udGFpbnMgZG9jdW1lbnQud3JpdGUuIENhbuKAmXQgYmUgZXhlY3V0ZWQgY29ycmVjdGx5LiBDb2RlIHNraXBwZWQgXCIsIGVsKVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIlxuICB0cnkge1xuICAgIHNjcmlwdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjb2RlKSlcbiAgfVxuICBjYXRjaCAoZSkge1xuICAgIC8vIG9sZCBJRXMgaGF2ZSBmdW5reSBzY3JpcHQgbm9kZXNcbiAgICBzY3JpcHQudGV4dCA9IGNvZGVcbiAgfVxuXG4gIC8vIGV4ZWN1dGVcbiAgaGVhZC5pbnNlcnRCZWZvcmUoc2NyaXB0LCBoZWFkLmZpcnN0Q2hpbGQpXG4gIGhlYWQucmVtb3ZlQ2hpbGQoc2NyaXB0KSAvLyBhdm9pZCBwb2xsdXRpb25cblxuICByZXR1cm4gdHJ1ZVxufVxuXG59LHt9XSw0OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBmb3JFYWNoRWxzID0gX2RlcmVxXyhcIi4uL2ZvcmVhY2gtZWxzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWxzLCBldmVudHMsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKSB7XG4gIGV2ZW50cyA9ICh0eXBlb2YgZXZlbnRzID09PSBcInN0cmluZ1wiID8gZXZlbnRzLnNwbGl0KFwiIFwiKSA6IGV2ZW50cylcblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgZm9yRWFjaEVscyhlbHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGxpc3RlbmVyLCB1c2VDYXB0dXJlKVxuICAgIH0pXG4gIH0pXG59XG5cbn0se1wiLi4vZm9yZWFjaC1lbHNcIjo3fV0sNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZm9yRWFjaEVscyA9IF9kZXJlcV8oXCIuLi9mb3JlYWNoLWVsc1wiKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVscywgZXZlbnRzLCBvcHRzKSB7XG4gIGV2ZW50cyA9ICh0eXBlb2YgZXZlbnRzID09PSBcInN0cmluZ1wiID8gZXZlbnRzLnNwbGl0KFwiIFwiKSA6IGV2ZW50cylcblxuICBldmVudHMuZm9yRWFjaChmdW5jdGlvbihlKSB7XG4gICAgdmFyIGV2ZW50IC8vID0gbmV3IEN1c3RvbUV2ZW50KGUpIC8vIGRvZXNuJ3QgZXZlcnl3aGVyZSB5ZXRcbiAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiSFRNTEV2ZW50c1wiKVxuICAgIGV2ZW50LmluaXRFdmVudChlLCB0cnVlLCB0cnVlKVxuICAgIGV2ZW50LmV2ZW50TmFtZSA9IGVcbiAgICBpZiAob3B0cykge1xuICAgICAgT2JqZWN0LmtleXMob3B0cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgZXZlbnRba2V5XSA9IG9wdHNba2V5XVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBmb3JFYWNoRWxzKGVscywgZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciBkb21GaXggPSBmYWxzZVxuICAgICAgaWYgKCFlbC5wYXJlbnROb2RlICYmIGVsICE9PSBkb2N1bWVudCAmJiBlbCAhPT0gd2luZG93KSB7XG4gICAgICAgIC8vIFRIQU5LUyBZT1UgSUUgKDkvMTAvLzExIGNvbmNlcm5lZClcbiAgICAgICAgLy8gZGlzcGF0Y2hFdmVudCBkb2Vzbid0IHdvcmsgaWYgZWxlbWVudCBpcyBub3QgaW4gdGhlIGRvbVxuICAgICAgICBkb21GaXggPSB0cnVlXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG4gICAgICB9XG4gICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgaWYgKGRvbUZpeCkge1xuICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59XG5cbn0se1wiLi4vZm9yZWFjaC1lbHNcIjo3fV0sNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZm9yRWFjaEVscyA9IF9kZXJlcV8oXCIuL2ZvcmVhY2gtZWxzXCIpXG52YXIgZXZhbFNjcmlwdCA9IF9kZXJlcV8oXCIuL2V2YWwtc2NyaXB0XCIpXG4vLyBGaW5kcyBhbmQgZXhlY3V0ZXMgc2NyaXB0cyAodXNlZCBmb3IgbmV3bHkgYWRkZWQgZWxlbWVudHMpXG4vLyBOZWVkZWQgc2luY2UgaW5uZXJIVE1MIGRvZXMgbm90IHJ1biBzY3JpcHRzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIC8vIGNvbnNvbGUubG9nKFwiZ29pbmcgdG8gZXhlY3V0ZSBzY3JpcHRzIGZvciBcIiwgZWwpXG4gIGZvckVhY2hFbHMoZWwucXVlcnlTZWxlY3RvckFsbChcInNjcmlwdFwiKSwgZnVuY3Rpb24oc2NyaXB0KSB7XG4gICAgaWYgKCFzY3JpcHQudHlwZSB8fCBzY3JpcHQudHlwZS50b0xvd2VyQ2FzZSgpID09PSBcInRleHQvamF2YXNjcmlwdFwiKSB7XG4gICAgICBpZiAoc2NyaXB0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KVxuICAgICAgfVxuICAgICAgZXZhbFNjcmlwdChzY3JpcHQpXG4gICAgfVxuICB9KVxufVxuXG59LHtcIi4vZXZhbC1zY3JpcHRcIjozLFwiLi9mb3JlYWNoLWVsc1wiOjd9XSw3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qIGdsb2JhbCBIVE1MQ29sbGVjdGlvbjogdHJ1ZSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVscywgZm4sIGNvbnRleHQpIHtcbiAgaWYgKGVscyBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uIHx8IGVscyBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVscyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZWxzLCBmbiwgY29udGV4dClcbiAgfVxuICAvLyBhc3N1bWUgc2ltcGxlIGRvbSBlbGVtZW50XG4gIHJldHVybiBmbi5jYWxsKGNvbnRleHQsIGVscylcbn1cblxufSx7fV0sODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG52YXIgZm9yRWFjaEVscyA9IF9kZXJlcV8oXCIuL2ZvcmVhY2gtZWxzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc2VsZWN0b3JzLCBjYiwgY29udGV4dCwgRE9NY29udGV4dCkge1xuICBET01jb250ZXh0ID0gRE9NY29udGV4dCB8fCBkb2N1bWVudFxuICBzZWxlY3RvcnMuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIGZvckVhY2hFbHMoRE9NY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgY2IsIGNvbnRleHQpXG4gIH0pXG59XG5cbn0se1wiLi9mb3JlYWNoLWVsc1wiOjd9XSw5OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIC8vIEJvcnJvd2VkIHdob2xlc2FsZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9kZWZ1bmt0L2pxdWVyeS1wamF4XG4gIHJldHVybiB3aW5kb3cuaGlzdG9yeSAmJlxuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSAmJlxuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJlxuICAgIC8vIHB1c2hTdGF0ZSBpc27igJl0IHJlbGlhYmxlIG9uIGlPUyB1bnRpbCA1LlxuICAgICFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC8oKGlQb2R8aVBob25lfGlQYWQpLitcXGJPU1xccytbMS00XVxcRHxXZWJBcHBzXFwvLitDRk5ldHdvcmspLylcbn1cblxufSx7fV0sMTA6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuaWYgKCFGdW5jdGlvbi5wcm90b3R5cGUuYmluZCkge1xuICBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uKG9UaGlzKSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIC8vIGNsb3Nlc3QgdGhpbmcgcG9zc2libGUgdG8gdGhlIEVDTUFTY3JpcHQgNSBpbnRlcm5hbCBJc0NhbGxhYmxlIGZ1bmN0aW9uXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgLSB3aGF0IGlzIHRyeWluZyB0byBiZSBib3VuZCBpcyBub3QgY2FsbGFibGVcIilcbiAgICB9XG5cbiAgICB2YXIgYUFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyIEZub29wID0gZnVuY3Rpb24oKSB7fVxuICAgIHZhciBmQm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGF0LmFwcGx5KHRoaXMgaW5zdGFuY2VvZiBGbm9vcCAmJiBvVGhpcyA/IHRoaXMgOiBvVGhpcywgYUFyZ3MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKVxuICAgIH1cblxuICAgIEZub29wLnByb3RvdHlwZSA9IHRoaXMucHJvdG90eXBlXG4gICAgZkJvdW5kLnByb3RvdHlwZSA9IG5ldyBGbm9vcCgpXG5cbiAgICByZXR1cm4gZkJvdW5kXG4gIH1cbn1cblxufSx7fV0sMTE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuX2RlcmVxXyhcIi4uL3BvbHlmaWxscy9GdW5jdGlvbi5wcm90b3R5cGUuYmluZFwiKVxuXG52YXIgb24gPSBfZGVyZXFfKFwiLi4vZXZlbnRzL29uXCIpXG52YXIgY2xvbmUgPSBfZGVyZXFfKFwiLi4vY2xvbmVcIilcblxudmFyIGF0dHJDbGljayA9IFwiZGF0YS1wamF4LWNsaWNrLXN0YXRlXCJcbnZhciBhdHRyS2V5ID0gXCJkYXRhLXBqYXgta2V5dXAtc3RhdGVcIlxuXG52YXIgbGlua0FjdGlvbiA9IGZ1bmN0aW9uKGVsLCBldmVudCkge1xuICAvLyBEb27igJl0IGJyZWFrIGJyb3dzZXIgc3BlY2lhbCBiZWhhdmlvciBvbiBsaW5rcyAobGlrZSBwYWdlIGluIG5ldyB3aW5kb3cpXG4gIGlmIChldmVudC53aGljaCA+IDEgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyQ2xpY2ssIFwibW9kaWZpZXJcIilcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIHdlIGRvIHRlc3Qgb24gaHJlZiBub3cgdG8gcHJldmVudCB1bmV4cGVjdGVkIGJlaGF2aW9yIGlmIGZvciBzb21lIHJlYXNvblxuICAvLyB1c2VyIGhhdmUgaHJlZiB0aGF0IGNhbiBiZSBkeW5hbWljYWxseSB1cGRhdGVkXG5cbiAgLy8gSWdub3JlIGV4dGVybmFsIGxpbmtzLlxuICBpZiAoZWwucHJvdG9jb2wgIT09IHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCB8fCBlbC5ob3N0ICE9PSB3aW5kb3cubG9jYXRpb24uaG9zdCkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyQ2xpY2ssIFwiZXh0ZXJuYWxcIilcbiAgICByZXR1cm5cbiAgfVxuXG4gIC8vIElnbm9yZSBjbGljayBpZiB3ZSBhcmUgb24gYW4gYW5jaG9yIG9uIHRoZSBzYW1lIHBhZ2VcbiAgaWYgKGVsLnBhdGhuYW1lID09PSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgJiYgZWwuaGFzaC5sZW5ndGggPiAwKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJDbGljaywgXCJhbmNob3ItcHJlc2VudFwiKVxuICAgIHJldHVyblxuICB9XG5cbiAgLy8gSWdub3JlIGFuY2hvcnMgb24gdGhlIHNhbWUgcGFnZSAoa2VlcCBuYXRpdmUgYmVoYXZpb3IpXG4gIGlmIChlbC5oYXNoICYmIGVsLmhyZWYucmVwbGFjZShlbC5oYXNoLCBcIlwiKSA9PT0gd2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZShsb2NhdGlvbi5oYXNoLCBcIlwiKSkge1xuICAgIGVsLnNldEF0dHJpYnV0ZShhdHRyQ2xpY2ssIFwiYW5jaG9yXCIpXG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBJZ25vcmUgZW1wdHkgYW5jaG9yIFwiZm9vLmh0bWwjXCJcbiAgaWYgKGVsLmhyZWYgPT09IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiI1wiKVswXSArIFwiI1wiKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJDbGljaywgXCJhbmNob3ItZW1wdHlcIilcbiAgICByZXR1cm5cbiAgfVxuXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAvLyBkb27igJl0IGRvIFwibm90aGluZ1wiIGlmIHVzZXIgdHJ5IHRvIHJlbG9hZCB0aGUgcGFnZSBieSBjbGlja2luZyB0aGUgc2FtZSBsaW5rIHR3aWNlXG4gIGlmIChcbiAgICB0aGlzLm9wdGlvbnMuY3VycmVudFVybEZ1bGxSZWxvYWQgJiZcbiAgICBlbC5ocmVmID09PSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIiNcIilbMF1cbiAgKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJDbGljaywgXCJyZWxvYWRcIilcbiAgICB0aGlzLnJlbG9hZCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBlbC5zZXRBdHRyaWJ1dGUoYXR0ckNsaWNrLCBcImxvYWRcIilcbiAgdGhpcy5sb2FkVXJsKGVsLmhyZWYsIGNsb25lKHRoaXMub3B0aW9ucykpXG59XG5cbnZhciBpc0RlZmF1bHRQcmV2ZW50ZWQgPSBmdW5jdGlvbihldmVudCkge1xuICByZXR1cm4gZXZlbnQuZGVmYXVsdFByZXZlbnRlZCB8fCBldmVudC5yZXR1cm5WYWx1ZSA9PT0gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZWwpIHtcbiAgdmFyIHRoYXQgPSB0aGlzXG5cbiAgb24oZWwsIFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoaXNEZWZhdWx0UHJldmVudGVkKGV2ZW50KSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGlua0FjdGlvbi5jYWxsKHRoYXQsIGVsLCBldmVudClcbiAgfSlcblxuICBvbihlbCwgXCJrZXl1cFwiLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChpc0RlZmF1bHRQcmV2ZW50ZWQoZXZlbnQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBEb27igJl0IGJyZWFrIGJyb3dzZXIgc3BlY2lhbCBiZWhhdmlvciBvbiBsaW5rcyAobGlrZSBwYWdlIGluIG5ldyB3aW5kb3cpXG4gICAgaWYgKGV2ZW50LndoaWNoID4gMSB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5KSB7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoYXR0cktleSwgXCJtb2RpZmllclwiKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcbiAgICAgIGxpbmtBY3Rpb24uY2FsbCh0aGF0LCBlbCwgZXZlbnQpXG4gICAgfVxuICB9LmJpbmQodGhpcykpXG59XG5cbn0se1wiLi4vY2xvbmVcIjoyLFwiLi4vZXZlbnRzL29uXCI6NCxcIi4uL3BvbHlmaWxscy9GdW5jdGlvbi5wcm90b3R5cGUuYmluZFwiOjEwfV0sMTI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICByZXR1cm4gZWwucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuZWxlbWVudHMpXG59XG5cbn0se31dLDEzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZS5sb2cgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgLy8gaWUgaXMgd2VpcmRcbiAgICBlbHNlIGlmIChjb25zb2xlLmxvZykge1xuICAgICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn1cblxufSx7fV0sMTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGZvckVhY2hFbHMgPSBfZGVyZXFfKFwiLi4vZm9yZWFjaC1lbHNcIilcblxudmFyIHBhcnNlRWxlbWVudCA9IF9kZXJlcV8oXCIuL3BhcnNlLWVsZW1lbnRcIilcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICBmb3JFYWNoRWxzKHRoaXMuZ2V0RWxlbWVudHMoZWwpLCBwYXJzZUVsZW1lbnQsIHRoaXMpXG59XG5cbn0se1wiLi4vZm9yZWFjaC1lbHNcIjo3LFwiLi9wYXJzZS1lbGVtZW50XCI6MTV9XSwxNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGVsKSB7XG4gIHN3aXRjaCAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpKSB7XG4gIGNhc2UgXCJhXCI6XG4gICAgLy8gb25seSBhdHRhY2ggbGluayBpZiBlbCBkb2VzIG5vdCBhbHJlYWR5IGhhdmUgbGluayBhdHRhY2hlZFxuICAgIGlmICghZWwuaGFzQXR0cmlidXRlKCdkYXRhLXBqYXgtY2xpY2stc3RhdGUnKSkge1xuICAgICAgdGhpcy5hdHRhY2hMaW5rKGVsKVxuICAgIH1cbiAgICBicmVha1xuXG4gIGNhc2UgXCJmb3JtXCI6XG4gICAgdGhyb3cgXCJQamF4IGRvZXNudCBzdXBwb3J0IDxmb3JtPiB5ZXQuXCJcbiAgICBicmVha1xuXG4gIGRlZmF1bHQ6XG4gICAgdGhyb3cgXCJQamF4IGNhbiBvbmx5IGJlIGFwcGxpZWQgb24gPGE+IG9yIDxmb3JtPiBzdWJtaXRcIlxuICB9XG59XG5cbn0se31dLDE2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbi8qIGdsb2JhbCBfZ2FxOiB0cnVlLCBnYTogdHJ1ZSAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpe1xuICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gIHRoaXMub3B0aW9ucy5lbGVtZW50cyA9IHRoaXMub3B0aW9ucy5lbGVtZW50cyB8fCBcImFbaHJlZl0sIGZvcm1bYWN0aW9uXVwiXG4gIHRoaXMub3B0aW9ucy5zZWxlY3RvcnMgPSB0aGlzLm9wdGlvbnMuc2VsZWN0b3JzIHx8IFtcInRpdGxlXCIsIFwiLmpzLVBqYXhcIl1cbiAgdGhpcy5vcHRpb25zLnN3aXRjaGVzID0gdGhpcy5vcHRpb25zLnN3aXRjaGVzIHx8IHt9XG4gIHRoaXMub3B0aW9ucy5zd2l0Y2hlc09wdGlvbnMgPSB0aGlzLm9wdGlvbnMuc3dpdGNoZXNPcHRpb25zIHx8IHt9XG4gIHRoaXMub3B0aW9ucy5oaXN0b3J5ID0gdGhpcy5vcHRpb25zLmhpc3RvcnkgfHwgdHJ1ZVxuICB0aGlzLm9wdGlvbnMuYW5hbHl0aWNzID0gdGhpcy5vcHRpb25zLmFuYWx5dGljcyB8fCBmdW5jdGlvbigpIHtcbiAgICAvLyBvcHRpb25zLmJhY2t3YXJkIG9yIG9wdGlvbnMuZm93YXJkIGNhbiBiZSB0cnVlIG9yIHVuZGVmaW5lZFxuICAgIC8vIGJ5IGRlZmF1bHQsIHdlIGRvIHRyYWNrIGJhY2svZm93YXJkIGhpdFxuICAgIC8vIGh0dHBzOi8vcHJvZHVjdGZvcnVtcy5nb29nbGUuY29tL2ZvcnVtLyMhdG9waWMvYW5hbHl0aWNzL1dWd01EakxoWFlrXG4gICAgaWYgKHdpbmRvdy5fZ2FxKSB7XG4gICAgICBfZ2FxLnB1c2goW1wiX3RyYWNrUGFnZXZpZXdcIl0pXG4gICAgfVxuICAgIGlmICh3aW5kb3cuZ2EpIHtcbiAgICAgIGdhKFwic2VuZFwiLCBcInBhZ2V2aWV3XCIsIHtwYWdlOiBsb2NhdGlvbi5wYXRobmFtZSwgdGl0bGU6IGRvY3VtZW50LnRpdGxlfSlcbiAgICB9XG4gIH1cbiAgdGhpcy5vcHRpb25zLnNjcm9sbFRvID0gKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2Nyb2xsVG8gPT09ICd1bmRlZmluZWQnKSA/IDAgOiB0aGlzLm9wdGlvbnMuc2Nyb2xsVG87XG4gIHRoaXMub3B0aW9ucy5jYWNoZUJ1c3QgPSAodHlwZW9mIHRoaXMub3B0aW9ucy5jYWNoZUJ1c3QgPT09ICd1bmRlZmluZWQnKSA/IHRydWUgOiB0aGlzLm9wdGlvbnMuY2FjaGVCdXN0XG4gIHRoaXMub3B0aW9ucy5kZWJ1ZyA9IHRoaXMub3B0aW9ucy5kZWJ1ZyB8fCBmYWxzZVxuXG4gIC8vIHdlIGNhbuKAmXQgcmVwbGFjZSBib2R5Lm91dGVySFRNTCBvciBoZWFkLm91dGVySFRNTFxuICAvLyBpdCBjcmVhdGUgYSBidWcgd2hlcmUgbmV3IGJvZHkgb3IgbmV3IGhlYWQgYXJlIGNyZWF0ZWQgaW4gdGhlIGRvbVxuICAvLyBpZiB5b3Ugc2V0IGhlYWQub3V0ZXJIVE1MLCBhIG5ldyBib2R5IHRhZyBpcyBhcHBlbmRlZCwgc28gdGhlIGRvbSBnZXQgMiBib2R5XG4gIC8vICYgaXQgYnJlYWsgdGhlIHN3aXRjaEZhbGxiYWNrIHdoaWNoIHJlcGxhY2UgaGVhZCAmIGJvZHlcbiAgaWYgKCF0aGlzLm9wdGlvbnMuc3dpdGNoZXMuaGVhZCkge1xuICAgIHRoaXMub3B0aW9ucy5zd2l0Y2hlcy5oZWFkID0gdGhpcy5zd2l0Y2hFbGVtZW50c0FsdFxuICB9XG4gIGlmICghdGhpcy5vcHRpb25zLnN3aXRjaGVzLmJvZHkpIHtcbiAgICB0aGlzLm9wdGlvbnMuc3dpdGNoZXMuYm9keSA9IHRoaXMuc3dpdGNoRWxlbWVudHNBbHRcbiAgfVxuICBpZiAodHlwZW9mIG9wdGlvbnMuYW5hbHl0aWNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBvcHRpb25zLmFuYWx5dGljcyA9IGZ1bmN0aW9uKCkge31cbiAgfVxufVxufSx7fV0sMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihlbCkge1xuICB0aGlzLnBhcnNlRE9NKGVsIHx8IGRvY3VtZW50KVxufVxuXG59LHt9XSwxODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbn1cblxufSx7fV0sMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXG4gIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHJlcXVlc3QucmVhZHlTdGF0ZSA9PT0gNCkge1xuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY2FsbGJhY2socmVxdWVzdC5yZXNwb25zZVRleHQsIHJlcXVlc3QpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgcmVxdWVzdClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBBZGQgYSB0aW1lc3RhbXAgYXMgcGFydCBvZiB0aGUgcXVlcnkgc3RyaW5nIGlmIGNhY2hlIGJ1c3RpbmcgaXMgZW5hYmxlZFxuICBpZiAodGhpcy5vcHRpb25zLmNhY2hlQnVzdCkge1xuICAgIGxvY2F0aW9uICs9ICghL1s/Jl0vLnRlc3QobG9jYXRpb24pID8gXCI/XCIgOiBcIiZcIikgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICB9XG5cbiAgcmVxdWVzdC5vcGVuKFwiR0VUXCIsIGxvY2F0aW9uLCB0cnVlKVxuICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoXCJYLVJlcXVlc3RlZC1XaXRoXCIsIFwiWE1MSHR0cFJlcXVlc3RcIilcbiAgcmVxdWVzdC5zZW5kKG51bGwpXG4gIHJldHVybiByZXF1ZXN0XG59XG5cbn0se31dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcbnZhciBmb3JFYWNoRWxzID0gX2RlcmVxXyhcIi4vZm9yZWFjaC1lbHNcIilcblxudmFyIGRlZmF1bHRTd2l0Y2hlcyA9IF9kZXJlcV8oXCIuL3N3aXRjaGVzXCIpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oc3dpdGNoZXMsIHN3aXRjaGVzT3B0aW9ucywgc2VsZWN0b3JzLCBmcm9tRWwsIHRvRWwsIG9wdGlvbnMpIHtcbiAgc2VsZWN0b3JzLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0b3IpIHtcbiAgICB2YXIgbmV3RWxzID0gZnJvbUVsLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICAgdmFyIG9sZEVscyA9IHRvRWwucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgICBpZiAodGhpcy5sb2cpIHtcbiAgICAgIHRoaXMubG9nKFwiUGpheCBzd2l0Y2hcIiwgc2VsZWN0b3IsIG5ld0Vscywgb2xkRWxzKVxuICAgIH1cbiAgICBpZiAobmV3RWxzLmxlbmd0aCAhPT0gb2xkRWxzLmxlbmd0aCkge1xuICAgICAgLy8gZm9yRWFjaEVscyhuZXdFbHMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICAvLyAgIHRoaXMubG9nKFwibmV3RWxcIiwgZWwsIGVsLm91dGVySFRNTClcbiAgICAgIC8vIH0sIHRoaXMpXG4gICAgICAvLyBmb3JFYWNoRWxzKG9sZEVscywgZnVuY3Rpb24oZWwpIHtcbiAgICAgIC8vICAgdGhpcy5sb2coXCJvbGRFbFwiLCBlbCwgZWwub3V0ZXJIVE1MKVxuICAgICAgLy8gfSwgdGhpcylcbiAgICAgIHRocm93IFwiRE9NIGRvZXNu4oCZdCBsb29rIHRoZSBzYW1lIG9uIG5ldyBsb2FkZWQgcGFnZTog4oCZXCIgKyBzZWxlY3RvciArIFwi4oCZIC0gbmV3IFwiICsgbmV3RWxzLmxlbmd0aCArIFwiLCBvbGQgXCIgKyBvbGRFbHMubGVuZ3RoXG4gICAgfVxuXG4gICAgZm9yRWFjaEVscyhuZXdFbHMsIGZ1bmN0aW9uKG5ld0VsLCBpKSB7XG4gICAgICB2YXIgb2xkRWwgPSBvbGRFbHNbaV1cbiAgICAgIGlmICh0aGlzLmxvZykge1xuICAgICAgICB0aGlzLmxvZyhcIm5ld0VsXCIsIG5ld0VsLCBcIm9sZEVsXCIsIG9sZEVsKVxuICAgICAgfVxuICAgICAgaWYgKHN3aXRjaGVzW3NlbGVjdG9yXSkge1xuICAgICAgICBzd2l0Y2hlc1tzZWxlY3Rvcl0uYmluZCh0aGlzKShvbGRFbCwgbmV3RWwsIG9wdGlvbnMsIHN3aXRjaGVzT3B0aW9uc1tzZWxlY3Rvcl0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgZGVmYXVsdFN3aXRjaGVzLm91dGVySFRNTC5iaW5kKHRoaXMpKG9sZEVsLCBuZXdFbCwgb3B0aW9ucylcbiAgICAgIH1cbiAgICB9LCB0aGlzKVxuICB9LCB0aGlzKVxufVxuXG59LHtcIi4vZm9yZWFjaC1lbHNcIjo3LFwiLi9zd2l0Y2hlc1wiOjIxfV0sMjE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIG9uID0gX2RlcmVxXyhcIi4vZXZlbnRzL29uLmpzXCIpXG4vLyB2YXIgb2ZmID0gcmVxdWlyZShcIi4vbGliL2V2ZW50cy9vbi5qc1wiKVxuLy8gdmFyIHRyaWdnZXIgPSByZXF1aXJlKFwiLi9saWIvZXZlbnRzL3RyaWdnZXIuanNcIilcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgb3V0ZXJIVE1MOiBmdW5jdGlvbihvbGRFbCwgbmV3RWwpIHtcbiAgICBvbGRFbC5vdXRlckhUTUwgPSBuZXdFbC5vdXRlckhUTUxcbiAgICB0aGlzLm9uU3dpdGNoKClcbiAgfSxcblxuICBpbm5lckhUTUw6IGZ1bmN0aW9uKG9sZEVsLCBuZXdFbCkge1xuICAgIG9sZEVsLmlubmVySFRNTCA9IG5ld0VsLmlubmVySFRNTFxuICAgIG9sZEVsLmNsYXNzTmFtZSA9IG5ld0VsLmNsYXNzTmFtZVxuICAgIHRoaXMub25Td2l0Y2goKVxuICB9LFxuXG4gIHNpZGVCeVNpZGU6IGZ1bmN0aW9uKG9sZEVsLCBuZXdFbCwgb3B0aW9ucywgc3dpdGNoT3B0aW9ucykge1xuICAgIHZhciBmb3JFYWNoID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2hcbiAgICB2YXIgZWxzVG9SZW1vdmUgPSBbXVxuICAgIHZhciBlbHNUb0FkZCA9IFtdXG4gICAgdmFyIGZyYWdUb0FwcGVuZCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIC8vIGhlaWdodCB0cmFuc2l0aW9uIGFyZSBzaGl0dHkgb24gc2FmYXJpXG4gICAgLy8gc28gY29tbWVudGVkIGZvciBub3cgKHVudGlsIEkgZm91bmQgc29tZXRoaW5nID8pXG4gICAgLy8gdmFyIHJlbGV2YW50SGVpZ2h0ID0gMFxuICAgIHZhciBhbmltYXRpb25FdmVudE5hbWVzID0gXCJhbmltYXRpb25lbmQgd2Via2l0QW5pbWF0aW9uRW5kIE1TQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmRcIlxuICAgIHZhciBhbmltYXRlZEVsc051bWJlciA9IDBcbiAgICB2YXIgc2V4eUFuaW1hdGlvbkVuZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICBpZiAoZS50YXJnZXQgIT0gZS5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgICAvLyBlbmQgdHJpZ2dlcmVkIGJ5IGFuIGFuaW1hdGlvbiBvbiBhIGNoaWxkXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhbmltYXRlZEVsc051bWJlci0tXG4gICAgICAgICAgaWYgKGFuaW1hdGVkRWxzTnVtYmVyIDw9IDAgJiYgZWxzVG9SZW1vdmUpIHtcbiAgICAgICAgICAgIGVsc1RvUmVtb3ZlLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgLy8gYnJvd3NpbmcgcXVpY2tseSBjYW4gbWFrZSB0aGUgZWxcbiAgICAgICAgICAgICAgLy8gYWxyZWFkeSByZW1vdmVkIGJ5IGxhc3QgcGFnZSB1cGRhdGUgP1xuICAgICAgICAgICAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGVsc1RvQWRkLmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoZWwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIiksIFwiXCIpXG4gICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtcGpheC1jbGFzc2VzXCIpXG4gICAgICAgICAgICAgIC8vIFBqYXgub2ZmKGVsLCBhbmltYXRpb25FdmVudE5hbWVzLCBzZXh5QW5pbWF0aW9uRW5kLCB0cnVlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZWxzVG9BZGQgPSBudWxsIC8vIGZyZWUgbWVtb3J5XG4gICAgICAgICAgICBlbHNUb1JlbW92ZSA9IG51bGwgLy8gZnJlZSBtZW1vcnlcblxuICAgICAgICAgICAgLy8gYXNzdW1lIHRoZSBoZWlnaHQgaXMgbm93IHVzZWxlc3MgKGF2b2lkIGJ1ZyBzaW5jZSB0aGVyZSBpcyBvdmVyZmxvdyBoaWRkZW4gb24gdGhlIHBhcmVudClcbiAgICAgICAgICAgIC8vIG9sZEVsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiXG5cbiAgICAgICAgICAgIC8vIHRoaXMgaXMgdG8gdHJpZ2dlciBzb21lIHJlcGFpbnQgKGV4YW1wbGU6IHBpY3R1cmVmaWxsKVxuICAgICAgICAgICAgdGhpcy5vblN3aXRjaCgpXG4gICAgICAgICAgICAvLyBQamF4LnRyaWdnZXIod2luZG93LCBcInNjcm9sbFwiKVxuICAgICAgICAgIH1cbiAgICAgICAgfS5iaW5kKHRoaXMpXG5cbiAgICAvLyBGb3JjZSBoZWlnaHQgdG8gYmUgYWJsZSB0byB0cmlnZ2VyIGNzcyBhbmltYXRpb25cbiAgICAvLyBoZXJlIHdlIGdldCB0aGUgcmVsZXZhbnQgaGVpZ2h0XG4gICAgLy8gb2xkRWwucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbClcbiAgICAvLyByZWxldmFudEhlaWdodCA9IG5ld0VsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgIC8vIG9sZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3RWwpXG4gICAgLy8gb2xkRWwuc3R5bGUuaGVpZ2h0ID0gb2xkRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0ICsgXCJweFwiXG5cbiAgICBzd2l0Y2hPcHRpb25zID0gc3dpdGNoT3B0aW9ucyB8fCB7fVxuXG4gICAgZm9yRWFjaC5jYWxsKG9sZEVsLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbHNUb1JlbW92ZS5wdXNoKGVsKVxuICAgICAgaWYgKGVsLmNsYXNzTGlzdCAmJiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwianMtUGpheC1yZW1vdmVcIikpIHtcbiAgICAgICAgLy8gZm9yIGZhc3Qgc3dpdGNoLCBjbGVhbiBlbGVtZW50IHRoYXQganVzdCBoYXZlIGJlZW4gYWRkZWQsICYgbm90IGNsZWFuZWQgeWV0LlxuICAgICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIikpIHtcbiAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShlbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiKSwgXCJcIilcbiAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXBqYXgtY2xhc3Nlc1wiKVxuICAgICAgICB9XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoXCJqcy1QamF4LXJlbW92ZVwiKVxuICAgICAgICBpZiAoc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MgJiYgc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MucmVtb3ZlRWxlbWVudCkge1xuICAgICAgICAgIHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzLnJlbW92ZUVsZW1lbnQoZWwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcykge1xuICAgICAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5yZW1vdmUgKyBcIiBcIiArIChvcHRpb25zLmJhY2t3YXJkID8gc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmJhY2t3YXJkIDogc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmZvcndhcmQpXG4gICAgICAgIH1cbiAgICAgICAgYW5pbWF0ZWRFbHNOdW1iZXIrK1xuICAgICAgICBvbihlbCwgYW5pbWF0aW9uRXZlbnROYW1lcywgc2V4eUFuaW1hdGlvbkVuZCwgdHJ1ZSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgZm9yRWFjaC5jYWxsKG5ld0VsLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKGVsKSB7XG4gICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIHZhciBhZGRDbGFzc2VzID0gXCJcIlxuICAgICAgICBpZiAoc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzKSB7XG4gICAgICAgICAgYWRkQ2xhc3NlcyA9IFwiIGpzLVBqYXgtYWRkIFwiICsgc3dpdGNoT3B0aW9ucy5jbGFzc05hbWVzLmFkZCArIFwiIFwiICsgKG9wdGlvbnMuYmFja3dhcmQgPyBzd2l0Y2hPcHRpb25zLmNsYXNzTmFtZXMuZm9yd2FyZCA6IHN3aXRjaE9wdGlvbnMuY2xhc3NOYW1lcy5iYWNrd2FyZClcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MgJiYgc3dpdGNoT3B0aW9ucy5jYWxsYmFja3MuYWRkRWxlbWVudCkge1xuICAgICAgICAgIHN3aXRjaE9wdGlvbnMuY2FsbGJhY2tzLmFkZEVsZW1lbnQoZWwpXG4gICAgICAgIH1cbiAgICAgICAgZWwuY2xhc3NOYW1lICs9IGFkZENsYXNzZXNcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKFwiZGF0YS1wamF4LWNsYXNzZXNcIiwgYWRkQ2xhc3NlcylcbiAgICAgICAgZWxzVG9BZGQucHVzaChlbClcbiAgICAgICAgZnJhZ1RvQXBwZW5kLmFwcGVuZENoaWxkKGVsKVxuICAgICAgICBhbmltYXRlZEVsc051bWJlcisrXG4gICAgICAgIG9uKGVsLCBhbmltYXRpb25FdmVudE5hbWVzLCBzZXh5QW5pbWF0aW9uRW5kLCB0cnVlKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBwYXNzIGFsbCBjbGFzc05hbWUgb2YgdGhlIHBhcmVudFxuICAgIG9sZEVsLmNsYXNzTmFtZSA9IG5ld0VsLmNsYXNzTmFtZVxuICAgIG9sZEVsLmFwcGVuZENoaWxkKGZyYWdUb0FwcGVuZClcblxuICAgIC8vIG9sZEVsLnN0eWxlLmhlaWdodCA9IHJlbGV2YW50SGVpZ2h0ICsgXCJweFwiXG4gIH1cbn1cblxufSx7XCIuL2V2ZW50cy9vbi5qc1wiOjR9XSwyMjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIGNvdW50ZXIgPSAwXG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWQgPSAoXCJwamF4XCIgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkpKSArIFwiX1wiICsgY291bnRlclxuICAgIGNvdW50ZXIrK1xuICAgIHJldHVybiBpZFxuICB9XG59KSgpXG5cbn0se31dfSx7fSxbMV0pXG4oMSlcbn0pOyIsIi8qXG4gKiBqUXVlcnkgRmxleFNsaWRlciB2Mi42LjBcbiAqIENvcHlyaWdodCAyMDEyIFdvb1RoZW1lc1xuICogQ29udHJpYnV0aW5nIEF1dGhvcjogVHlsZXIgU21pdGhcbiAqLyFmdW5jdGlvbigkKXt2YXIgZT0hMDskLmZsZXhzbGlkZXI9ZnVuY3Rpb24odCxhKXt2YXIgbj0kKHQpO24udmFycz0kLmV4dGVuZCh7fSwkLmZsZXhzbGlkZXIuZGVmYXVsdHMsYSk7dmFyIGk9bi52YXJzLm5hbWVzcGFjZSxzPXdpbmRvdy5uYXZpZ2F0b3ImJndpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCYmd2luZG93Lk1TR2VzdHVyZSxyPShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxzfHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSYmbi52YXJzLnRvdWNoLG89XCJjbGljayB0b3VjaGVuZCBNU1BvaW50ZXJVcCBrZXl1cFwiLGw9XCJcIixjLGQ9XCJ2ZXJ0aWNhbFwiPT09bi52YXJzLmRpcmVjdGlvbix1PW4udmFycy5yZXZlcnNlLHY9bi52YXJzLml0ZW1XaWR0aD4wLHA9XCJmYWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uLG09XCJcIiE9PW4udmFycy5hc05hdkZvcixmPXt9OyQuZGF0YSh0LFwiZmxleHNsaWRlclwiLG4pLGY9e2luaXQ6ZnVuY3Rpb24oKXtuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1wYXJzZUludChuLnZhcnMuc3RhcnRBdD9uLnZhcnMuc3RhcnRBdDowLDEwKSxpc05hTihuLmN1cnJlbnRTbGlkZSkmJihuLmN1cnJlbnRTbGlkZT0wKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlLG4uYXRFbmQ9MD09PW4uY3VycmVudFNsaWRlfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCxuLmNvbnRhaW5lclNlbGVjdG9yPW4udmFycy5zZWxlY3Rvci5zdWJzdHIoMCxuLnZhcnMuc2VsZWN0b3Iuc2VhcmNoKFwiIFwiKSksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3Isbiksbi5jb250YWluZXI9JChuLmNvbnRhaW5lclNlbGVjdG9yLG4pLG4uY291bnQ9bi5zbGlkZXMubGVuZ3RoLG4uc3luY0V4aXN0cz0kKG4udmFycy5zeW5jKS5sZW5ndGg+MCxcInNsaWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uJiYobi52YXJzLmFuaW1hdGlvbj1cInN3aW5nXCIpLG4ucHJvcD1kP1widG9wXCI6XCJtYXJnaW5MZWZ0XCIsbi5hcmdzPXt9LG4ubWFudWFsUGF1c2U9ITEsbi5zdG9wcGVkPSExLG4uc3RhcnRlZD0hMSxuLnN0YXJ0VGltZW91dD1udWxsLG4udHJhbnNpdGlvbnM9IW4udmFycy52aWRlbyYmIXAmJm4udmFycy51c2VDU1MmJmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0PVtcInBlcnNwZWN0aXZlUHJvcGVydHlcIixcIldlYmtpdFBlcnNwZWN0aXZlXCIsXCJNb3pQZXJzcGVjdGl2ZVwiLFwiT1BlcnNwZWN0aXZlXCIsXCJtc1BlcnNwZWN0aXZlXCJdO2Zvcih2YXIgYSBpbiB0KWlmKHZvaWQgMCE9PWUuc3R5bGVbdFthXV0pcmV0dXJuIG4ucGZ4PXRbYV0ucmVwbGFjZShcIlBlcnNwZWN0aXZlXCIsXCJcIikudG9Mb3dlckNhc2UoKSxuLnByb3A9XCItXCIrbi5wZngrXCItdHJhbnNmb3JtXCIsITA7cmV0dXJuITF9KCksbi5lbnN1cmVBbmltYXRpb25FbmQ9XCJcIixcIlwiIT09bi52YXJzLmNvbnRyb2xzQ29udGFpbmVyJiYobi5jb250cm9sc0NvbnRhaW5lcj0kKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikubGVuZ3RoPjAmJiQobi52YXJzLmNvbnRyb2xzQ29udGFpbmVyKSksXCJcIiE9PW4udmFycy5tYW51YWxDb250cm9scyYmKG4ubWFudWFsQ29udHJvbHM9JChuLnZhcnMubWFudWFsQ29udHJvbHMpLmxlbmd0aD4wJiYkKG4udmFycy5tYW51YWxDb250cm9scykpLFwiXCIhPT1uLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2JiYobi5jdXN0b21EaXJlY3Rpb25OYXY9Mj09PSQobi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikubGVuZ3RoJiYkKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpKSxuLnZhcnMucmFuZG9taXplJiYobi5zbGlkZXMuc29ydChmdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpLS41fSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSxuLmRvTWF0aCgpLG4uc2V0dXAoXCJpbml0XCIpLG4udmFycy5jb250cm9sTmF2JiZmLmNvbnRyb2xOYXYuc2V0dXAoKSxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi5zZXR1cCgpLG4udmFycy5rZXlib2FyZCYmKDE9PT0kKG4uY29udGFpbmVyU2VsZWN0b3IpLmxlbmd0aHx8bi52YXJzLm11bHRpcGxlS2V5Ym9hcmQpJiYkKGRvY3VtZW50KS5iaW5kKFwia2V5dXBcIixmdW5jdGlvbihlKXt2YXIgdD1lLmtleUNvZGU7aWYoIW4uYW5pbWF0aW5nJiYoMzk9PT10fHwzNz09PXQpKXt2YXIgYT0zOT09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM3PT09dD9uLmdldFRhcmdldChcInByZXZcIik6ITE7bi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKX19KSxuLnZhcnMubW91c2V3aGVlbCYmbi5iaW5kKFwibW91c2V3aGVlbFwiLGZ1bmN0aW9uKGUsdCxhLGkpe2UucHJldmVudERlZmF1bHQoKTt2YXIgcz0wPnQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKHMsbi52YXJzLnBhdXNlT25BY3Rpb24pfSksbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkuc2V0dXAoKSxuLnZhcnMuc2xpZGVzaG93JiZuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaW5pdCgpLG4udmFycy5zbGlkZXNob3cmJihuLnZhcnMucGF1c2VPbkhvdmVyJiZuLmhvdmVyKGZ1bmN0aW9uKCl7bi5tYW51YWxQbGF5fHxuLm1hbnVhbFBhdXNlfHxuLnBhdXNlKCl9LGZ1bmN0aW9uKCl7bi5tYW51YWxQYXVzZXx8bi5tYW51YWxQbGF5fHxuLnN0b3BwZWR8fG4ucGxheSgpfSksbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCl8fChuLnZhcnMuaW5pdERlbGF5PjA/bi5zdGFydFRpbWVvdXQ9c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCkpKSxtJiZmLmFzTmF2LnNldHVwKCksciYmbi52YXJzLnRvdWNoJiZmLnRvdWNoKCksKCFwfHxwJiZuLnZhcnMuc21vb3RoSGVpZ2h0KSYmJCh3aW5kb3cpLmJpbmQoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgZm9jdXNcIixmLnJlc2l6ZSksbi5maW5kKFwiaW1nXCIpLmF0dHIoXCJkcmFnZ2FibGVcIixcImZhbHNlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLnZhcnMuc3RhcnQobil9LDIwMCl9LGFzTmF2OntzZXR1cDpmdW5jdGlvbigpe24uYXNOYXY9ITAsbi5hbmltYXRpbmdUbz1NYXRoLmZsb29yKG4uY3VycmVudFNsaWRlL24ubW92ZSksbi5jdXJyZW50SXRlbT1uLmN1cnJlbnRTbGlkZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudEl0ZW0pLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikscz8odC5fc2xpZGVyPW4sbi5zbGlkZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLGUuX2dlc3R1cmUudGFyZ2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUmJmUuY3VycmVudFRhcmdldC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKX0sITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZVRhcFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpOyQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX0pKTpuLnNsaWRlcy5vbihvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpLHM9dC5vZmZzZXQoKS5sZWZ0LSQobikuc2Nyb2xsTGVmdCgpOzA+PXMmJnQuaGFzQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKT9uLmZsZXhBbmltYXRlKG4uZ2V0VGFyZ2V0KFwicHJldlwiKSwhMCk6JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpfHwobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxhP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCwhMCkpfSl9fSxjb250cm9sTmF2OntzZXR1cDpmdW5jdGlvbigpe24ubWFudWFsQ29udHJvbHM/Zi5jb250cm9sTmF2LnNldHVwTWFudWFsKCk6Zi5jb250cm9sTmF2LnNldHVwUGFnaW5nKCl9LHNldHVwUGFnaW5nOmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImNvbnRyb2wtdGh1bWJzXCI6XCJjb250cm9sLXBhZ2luZ1wiLHQ9MSxhLHM7aWYobi5jb250cm9sTmF2U2NhZmZvbGQ9JCgnPG9sIGNsYXNzPVwiJytpK1wiY29udHJvbC1uYXYgXCIraStlKydcIj48L29sPicpLG4ucGFnaW5nQ291bnQ+MSlmb3IodmFyIHI9MDtyPG4ucGFnaW5nQ291bnQ7cisrKXtpZihzPW4uc2xpZGVzLmVxKHIpLHZvaWQgMD09PXMuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpJiZzLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiLFwiXCIpLGFsdFRleHQ9XCJcIiE9PXMuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpP2FsdFRleHQ9JyBhbHQ9XCInK3MuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpKydcIic6XCJcIixhPVwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXY/JzxpbWcgc3JjPVwiJytzLmF0dHIoXCJkYXRhLXRodW1iXCIpKydcIicrYWx0VGV4dCtcIi8+XCI6JzxhIGhyZWY9XCIjXCI+Jyt0K1wiPC9hPlwiLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJiEwPT09bi52YXJzLnRodW1iQ2FwdGlvbnMpe3ZhciBjPXMuYXR0cihcImRhdGEtdGh1bWJjYXB0aW9uXCIpO1wiXCIhPT1jJiZ2b2lkIDAhPT1jJiYoYSs9JzxzcGFuIGNsYXNzPVwiJytpKydjYXB0aW9uXCI+JytjK1wiPC9zcGFuPlwiKX1uLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoXCI8bGk+XCIrYStcIjwvbGk+XCIpLHQrK31uLmNvbnRyb2xzQ29udGFpbmVyPyQobi5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKG4uY29udHJvbE5hdlNjYWZmb2xkKTpuLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCksZi5jb250cm9sTmF2LnNldCgpLGYuY29udHJvbE5hdi5hY3RpdmUoKSxuLmNvbnRyb2xOYXZTY2FmZm9sZC5kZWxlZ2F0ZShcImEsIGltZ1wiLG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KG4uZGlyZWN0aW9uPWE+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0dXBNYW51YWw6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXY9bi5tYW51YWxDb250cm9scyxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2LmJpbmQobyxmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksXCJcIj09PWx8fGw9PT1lLnR5cGUpe3ZhciB0PSQodGhpcyksYT1uLmNvbnRyb2xOYXYuaW5kZXgodCk7dC5oYXNDbGFzcyhpK1wiYWN0aXZlXCIpfHwoYT5uLmN1cnJlbnRTbGlkZT9uLmRpcmVjdGlvbj1cIm5leHRcIjpuLmRpcmVjdGlvbj1cInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pKX1cIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSxzZXQ6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiaW1nXCI6XCJhXCI7bi5jb250cm9sTmF2PSQoXCIuXCIraStcImNvbnRyb2wtbmF2IGxpIFwiK2Usbi5jb250cm9sc0NvbnRhaW5lcj9uLmNvbnRyb2xzQ29udGFpbmVyOm4pfSxhY3RpdmU6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXYucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZVwiKS5lcShuLmFuaW1hdGluZ1RvKS5hZGRDbGFzcyhpK1wiYWN0aXZlXCIpfSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXtuLnBhZ2luZ0NvdW50PjEmJlwiYWRkXCI9PT1lP24uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCgkKCc8bGk+PGEgaHJlZj1cIiNcIj4nK24uY291bnQrXCI8L2E+PC9saT5cIikpOjE9PT1uLnBhZ2luZ0NvdW50P24uY29udHJvbE5hdlNjYWZmb2xkLmZpbmQoXCJsaVwiKS5yZW1vdmUoKTpuLmNvbnRyb2xOYXYuZXEodCkuY2xvc2VzdChcImxpXCIpLnJlbW92ZSgpLGYuY29udHJvbE5hdi5zZXQoKSxuLnBhZ2luZ0NvdW50PjEmJm4ucGFnaW5nQ291bnQhPT1uLmNvbnRyb2xOYXYubGVuZ3RoP24udXBkYXRlKHQsZSk6Zi5jb250cm9sTmF2LmFjdGl2ZSgpfX0sZGlyZWN0aW9uTmF2OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzx1bCBjbGFzcz1cIicraSsnZGlyZWN0aW9uLW5hdlwiPjxsaSBjbGFzcz1cIicraSsnbmF2LXByZXZcIj48YSBjbGFzcz1cIicraSsncHJldlwiIGhyZWY9XCIjXCI+JytuLnZhcnMucHJldlRleHQrJzwvYT48L2xpPjxsaSBjbGFzcz1cIicraSsnbmF2LW5leHRcIj48YSBjbGFzcz1cIicraSsnbmV4dFwiIGhyZWY9XCIjXCI+JytuLnZhcnMubmV4dFRleHQrXCI8L2E+PC9saT48L3VsPlwiKTtuLmN1c3RvbURpcmVjdGlvbk5hdj9uLmRpcmVjdGlvbk5hdj1uLmN1c3RvbURpcmVjdGlvbk5hdjpuLmNvbnRyb2xzQ29udGFpbmVyPygkKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuLmNvbnRyb2xzQ29udGFpbmVyKSk6KG4uYXBwZW5kKGUpLG4uZGlyZWN0aW9uTmF2PSQoXCIuXCIraStcImRpcmVjdGlvbi1uYXYgbGkgYVwiLG4pKSxmLmRpcmVjdGlvbk5hdi51cGRhdGUoKSxuLmRpcmVjdGlvbk5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0OyhcIlwiPT09bHx8bD09PWUudHlwZSkmJih0PSQodGhpcykuaGFzQ2xhc3MoaStcIm5leHRcIik/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKSxuLmZsZXhBbmltYXRlKHQsbi52YXJzLnBhdXNlT25BY3Rpb24pKSxcIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oKXt2YXIgZT1pK1wiZGlzYWJsZWRcIjsxPT09bi5wYWdpbmdDb3VudD9uLmRpcmVjdGlvbk5hdi5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4udmFycy5hbmltYXRpb25Mb29wP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKTowPT09bi5hbmltYXRpbmdUbz9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIraStcInByZXZcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLmFuaW1hdGluZ1RvPT09bi5sYXN0P24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wibmV4dFwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLnJlbW92ZUF0dHIoXCJ0YWJpbmRleFwiKX19LHBhdXNlUGxheTp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8ZGl2IGNsYXNzPVwiJytpKydwYXVzZXBsYXlcIj48YSBocmVmPVwiI1wiPjwvYT48L2Rpdj4nKTtuLmNvbnRyb2xzQ29udGFpbmVyPyhuLmNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4uY29udHJvbHNDb250YWluZXIpKToobi5hcHBlbmQoZSksbi5wYXVzZVBsYXk9JChcIi5cIitpK1wicGF1c2VwbGF5IGFcIixuKSksZi5wYXVzZVBsYXkudXBkYXRlKG4udmFycy5zbGlkZXNob3c/aStcInBhdXNlXCI6aStcInBsYXlcIiksbi5wYXVzZVBsYXkuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSwoXCJcIj09PWx8fGw9PT1lLnR5cGUpJiYoJCh0aGlzKS5oYXNDbGFzcyhpK1wicGF1c2VcIik/KG4ubWFudWFsUGF1c2U9ITAsbi5tYW51YWxQbGF5PSExLG4ucGF1c2UoKSk6KG4ubWFudWFsUGF1c2U9ITEsbi5tYW51YWxQbGF5PSEwLG4ucGxheSgpKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKGUpe1wicGxheVwiPT09ZT9uLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGF1c2VcIikuYWRkQ2xhc3MoaStcInBsYXlcIikuaHRtbChuLnZhcnMucGxheVRleHQpOm4ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwbGF5XCIpLmFkZENsYXNzKGkrXCJwYXVzZVwiKS5odG1sKG4udmFycy5wYXVzZVRleHQpfX0sdG91Y2g6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksbi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOihuLnBhdXNlKCksdC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKSxUPTAsYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMpfWZ1bmN0aW9uIGEoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYT1lLnRhcmdldC5fc2xpZGVyO2lmKGEpe3ZhciBuPS1lLnRyYW5zbGF0aW9uWCxpPS1lLnRyYW5zbGF0aW9uWTtyZXR1cm4gVCs9ZD9pOm4sbT1ULHg9ZD9NYXRoLmFicyhUKTxNYXRoLmFicygtbik6TWF0aC5hYnMoVCk8TWF0aC5hYnMoLWkpLGUuZGV0YWlsPT09ZS5NU0dFU1RVUkVfRkxBR19JTkVSVElBP3ZvaWQgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7dC5fZ2VzdHVyZS5zdG9wKCl9KTp2b2lkKCgheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJmEudHJhbnNpdGlvbnMmJihhLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG09VC8oMD09PWEuY3VycmVudFNsaWRlJiYwPlR8fGEuY3VycmVudFNsaWRlPT09YS5sYXN0JiZUPjA/TWF0aC5hYnMoVCkvYysyOjEpKSxhLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSkpfX1mdW5jdGlvbiBpKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ZS50YXJnZXQuX3NsaWRlcjtpZih0KXtpZih0LmFuaW1hdGluZ1RvPT09dC5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLG49YT4wP3QuZ2V0VGFyZ2V0KFwibmV4dFwiKTp0LmdldFRhcmdldChcInByZXZcIik7dC5jYW5BZHZhbmNlKG4pJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/dC5mbGV4QW5pbWF0ZShuLHQudmFycy5wYXVzZU9uQWN0aW9uKTpwfHx0LmZsZXhBbmltYXRlKHQuY3VycmVudFNsaWRlLHQudmFycy5wYXVzZU9uQWN0aW9uLCEwKX1yPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGwsVD0wfX12YXIgcixvLGwsYyxtLGYsZyxoLFMseD0hMSx5PTAsYj0wLFQ9MDtzPyh0LnN0eWxlLm1zVG91Y2hBY3Rpb249XCJub25lXCIsdC5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLHQuX2dlc3R1cmUudGFyZ2V0PXQsdC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGUsITEpLHQuX3NsaWRlcj1uLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUNoYW5nZVwiLGEsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUVuZFwiLGksITEpKTooZz1mdW5jdGlvbihlKXtuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZHx8MT09PWUudG91Y2hlcy5sZW5ndGgpJiYobi5wYXVzZSgpLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSx5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjLHI9ZD9iOnksbz1kP3k6Yix0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpKX0saD1mdW5jdGlvbihlKXt5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxtPWQ/ci1iOnIteSx4PWQ/TWF0aC5hYnMobSk8TWF0aC5hYnMoeS1vKTpNYXRoLmFicyhtKTxNYXRoLmFicyhiLW8pO3ZhciB0PTUwMDsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj50KSYmKGUucHJldmVudERlZmF1bHQoKSwhcCYmbi50cmFuc2l0aW9ucyYmKG4udmFycy5hbmltYXRpb25Mb29wfHwobS89MD09PW4uY3VycmVudFNsaWRlJiYwPm18fG4uY3VycmVudFNsaWRlPT09bi5sYXN0JiZtPjA/TWF0aC5hYnMobSkvYysyOjEpLG4uc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX0sUz1mdW5jdGlvbihlKXtpZih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSxuLmFuaW1hdGluZ1RvPT09bi5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLGk9YT4wP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIik7bi5jYW5BZHZhbmNlKGkpJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/bi5mbGV4QW5pbWF0ZShpLG4udmFycy5wYXVzZU9uQWN0aW9uKTpwfHxuLmZsZXhBbmltYXRlKG4uY3VycmVudFNsaWRlLG4udmFycy5wYXVzZU9uQWN0aW9uLCEwKX10LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpLHI9bnVsbCxvPW51bGwsbT1udWxsLGw9bnVsbH0sdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpKX0scmVzaXplOmZ1bmN0aW9uKCl7IW4uYW5pbWF0aW5nJiZuLmlzKFwiOnZpc2libGVcIikmJih2fHxuLmRvTWF0aCgpLHA/Zi5zbW9vdGhIZWlnaHQoKTp2PyhuLnNsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi51cGRhdGUobi5wYWdpbmdDb3VudCksbi5zZXRQcm9wcygpKTpkPyhuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHMobi5oLFwic2V0VG90YWxcIikpOihuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpLG4ubmV3U2xpZGVzLndpZHRoKG4uY29tcHV0ZWRXKSxuLnNldFByb3BzKG4uY29tcHV0ZWRXLFwic2V0VG90YWxcIikpKX0sc21vb3RoSGVpZ2h0OmZ1bmN0aW9uKGUpe2lmKCFkfHxwKXt2YXIgdD1wP246bi52aWV3cG9ydDtlP3QuYW5pbWF0ZSh7aGVpZ2h0Om4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmhlaWdodCgpfSxlKTp0LmhlaWdodChuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5oZWlnaHQoKSl9fSxzeW5jOmZ1bmN0aW9uKGUpe3ZhciB0PSQobi52YXJzLnN5bmMpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLGE9bi5hbmltYXRpbmdUbztzd2l0Y2goZSl7Y2FzZVwiYW5pbWF0ZVwiOnQuZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCk7YnJlYWs7Y2FzZVwicGxheVwiOnQucGxheWluZ3x8dC5hc05hdnx8dC5wbGF5KCk7YnJlYWs7Y2FzZVwicGF1c2VcIjp0LnBhdXNlKCl9fSx1bmlxdWVJRDpmdW5jdGlvbihlKXtyZXR1cm4gZS5maWx0ZXIoXCJbaWRdXCIpLmFkZChlLmZpbmQoXCJbaWRdXCIpKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9JCh0aGlzKTtlLmF0dHIoXCJpZFwiLGUuYXR0cihcImlkXCIpK1wiX2Nsb25lXCIpfSksZX0scGF1c2VJbnZpc2libGU6e3Zpc1Byb3A6bnVsbCxpbml0OmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7aWYoZSl7dmFyIHQ9ZS5yZXBsYWNlKC9bSHxoXWlkZGVuLyxcIlwiKStcInZpc2liaWxpdHljaGFuZ2VcIjtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHQsZnVuY3Rpb24oKXtmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCk/bi5zdGFydFRpbWVvdXQ/Y2xlYXJUaW1lb3V0KG4uc3RhcnRUaW1lb3V0KTpuLnBhdXNlKCk6bi5zdGFydGVkP24ucGxheSgpOm4udmFycy5pbml0RGVsYXk+MD9zZXRUaW1lb3V0KG4ucGxheSxuLnZhcnMuaW5pdERlbGF5KTpuLnBsYXkoKX0pfX0saXNIaWRkZW46ZnVuY3Rpb24oKXt2YXIgZT1mLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtyZXR1cm4gZT9kb2N1bWVudFtlXTohMX0sZ2V0SGlkZGVuUHJvcDpmdW5jdGlvbigpe3ZhciBlPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXTtpZihcImhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuXCJoaWRkZW5cIjtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKylpZihlW3RdK1wiSGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm4gZVt0XStcIkhpZGRlblwiO3JldHVybiBudWxsfX0sc2V0VG9DbGVhcldhdGNoZWRFdmVudDpmdW5jdGlvbigpe2NsZWFyVGltZW91dChjKSxjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPVwiXCJ9LDNlMyl9fSxuLmZsZXhBbmltYXRlPWZ1bmN0aW9uKGUsdCxhLHMsbyl7aWYobi52YXJzLmFuaW1hdGlvbkxvb3B8fGU9PT1uLmN1cnJlbnRTbGlkZXx8KG4uZGlyZWN0aW9uPWU+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIpLG0mJjE9PT1uLnBhZ2luZ0NvdW50JiYobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiKSwhbi5hbmltYXRpbmcmJihuLmNhbkFkdmFuY2UoZSxvKXx8YSkmJm4uaXMoXCI6dmlzaWJsZVwiKSl7aWYobSYmcyl7dmFyIGw9JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO2lmKG4uYXRFbmQ9MD09PWV8fGU9PT1uLmNvdW50LTEsbC5mbGV4QW5pbWF0ZShlLCEwLCExLCEwLG8pLG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIixsLmRpcmVjdGlvbj1uLmRpcmVjdGlvbixNYXRoLmNlaWwoKGUrMSkvbi52aXNpYmxlKS0xPT09bi5jdXJyZW50U2xpZGV8fDA9PT1lKXJldHVybiBuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLCExO24uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksZT1NYXRoLmZsb29yKGUvbi52aXNpYmxlKX1pZihuLmFuaW1hdGluZz0hMCxuLmFuaW1hdGluZ1RvPWUsdCYmbi5wYXVzZSgpLG4udmFycy5iZWZvcmUobiksbi5zeW5jRXhpc3RzJiYhbyYmZi5zeW5jKFwiYW5pbWF0ZVwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LmFjdGl2ZSgpLHZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLmF0RW5kPTA9PT1lfHxlPT09bi5sYXN0LG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLGU9PT1uLmxhc3QmJihuLnZhcnMuZW5kKG4pLG4udmFycy5hbmltYXRpb25Mb29wfHxuLnBhdXNlKCkpLHApcj8obi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eTowLHpJbmRleDoxfSksbi5zbGlkZXMuZXEoZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KSxuLndyYXB1cChjKSk6KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoxfSkuYW5pbWF0ZSh7b3BhY2l0eTowfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyksbi5zbGlkZXMuZXEoZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsbi53cmFwdXApKTtlbHNle3ZhciBjPWQ/bi5zbGlkZXMuZmlsdGVyKFwiOmZpcnN0XCIpLmhlaWdodCgpOm4uY29tcHV0ZWRXLGcsaCxTO3Y/KGc9bi52YXJzLml0ZW1NYXJnaW4sUz0obi5pdGVtVytnKSpuLm1vdmUqbi5hbmltYXRpbmdUbyxoPVM+bi5saW1pdCYmMSE9PW4udmlzaWJsZT9uLmxpbWl0OlMpOmg9MD09PW4uY3VycmVudFNsaWRlJiZlPT09bi5jb3VudC0xJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJuZXh0XCIhPT1uLmRpcmVjdGlvbj91PyhuLmNvdW50K24uY2xvbmVPZmZzZXQpKmM6MDpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PWUmJm4udmFycy5hbmltYXRpb25Mb29wJiZcInByZXZcIiE9PW4uZGlyZWN0aW9uP3U/MDoobi5jb3VudCsxKSpjOnU/KG4uY291bnQtMS1lK24uY2xvbmVPZmZzZXQpKmM6KGUrbi5jbG9uZU9mZnNldCkqYyxuLnNldFByb3BzKGgsXCJcIixuLnZhcnMuYW5pbWF0aW9uU3BlZWQpLG4udHJhbnNpdGlvbnM/KG4udmFycy5hbmltYXRpb25Mb29wJiZuLmF0RW5kfHwobi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyksbi5jb250YWluZXIudW5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpLG4uY29udGFpbmVyLmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi53cmFwdXAoYyl9KSxjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4uZW5zdXJlQW5pbWF0aW9uRW5kPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLndyYXB1cChjKX0sbi52YXJzLmFuaW1hdGlvblNwZWVkKzEwMCkpOm4uY29udGFpbmVyLmFuaW1hdGUobi5hcmdzLG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9KX1uLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodChuLnZhcnMuYW5pbWF0aW9uU3BlZWQpfX0sbi53cmFwdXA9ZnVuY3Rpb24oZSl7cHx8dnx8KDA9PT1uLmN1cnJlbnRTbGlkZSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdCYmbi52YXJzLmFuaW1hdGlvbkxvb3A/bi5zZXRQcm9wcyhlLFwianVtcEVuZFwiKTpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PW4uYW5pbWF0aW5nVG8mJm4udmFycy5hbmltYXRpb25Mb29wJiZuLnNldFByb3BzKGUsXCJqdW1wU3RhcnRcIikpLG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8sbi52YXJzLmFmdGVyKG4pfSxuLmFuaW1hdGVTbGlkZXM9ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJmUmJm4uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJuZXh0XCIpKX0sbi5wYXVzZT1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1udWxsLG4ucGxheWluZz0hMSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwbGF5XCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGF1c2VcIil9LG4ucGxheT1mdW5jdGlvbigpe24ucGxheWluZyYmY2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW4uYW5pbWF0ZWRTbGlkZXN8fHNldEludGVydmFsKG4uYW5pbWF0ZVNsaWRlcyxuLnZhcnMuc2xpZGVzaG93U3BlZWQpLG4uc3RhcnRlZD1uLnBsYXlpbmc9ITAsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGF1c2VcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwbGF5XCIpfSxuLnN0b3A9ZnVuY3Rpb24oKXtuLnBhdXNlKCksbi5zdG9wcGVkPSEwfSxuLmNhbkFkdmFuY2U9ZnVuY3Rpb24oZSx0KXt2YXIgYT1tP24ucGFnaW5nQ291bnQtMTpuLmxhc3Q7cmV0dXJuIHQ/ITA6bSYmbi5jdXJyZW50SXRlbT09PW4uY291bnQtMSYmMD09PWUmJlwicHJldlwiPT09bi5kaXJlY3Rpb24/ITA6bSYmMD09PW4uY3VycmVudEl0ZW0mJmU9PT1uLnBhZ2luZ0NvdW50LTEmJlwibmV4dFwiIT09bi5kaXJlY3Rpb24/ITE6ZSE9PW4uY3VycmVudFNsaWRlfHxtP24udmFycy5hbmltYXRpb25Mb29wPyEwOm4uYXRFbmQmJjA9PT1uLmN1cnJlbnRTbGlkZSYmZT09PWEmJlwibmV4dFwiIT09bi5kaXJlY3Rpb24/ITE6bi5hdEVuZCYmbi5jdXJyZW50U2xpZGU9PT1hJiYwPT09ZSYmXCJuZXh0XCI9PT1uLmRpcmVjdGlvbj8hMTohMDohMX0sbi5nZXRUYXJnZXQ9ZnVuY3Rpb24oZSl7cmV0dXJuIG4uZGlyZWN0aW9uPWUsXCJuZXh0XCI9PT1lP24uY3VycmVudFNsaWRlPT09bi5sYXN0PzA6bi5jdXJyZW50U2xpZGUrMTowPT09bi5jdXJyZW50U2xpZGU/bi5sYXN0Om4uY3VycmVudFNsaWRlLTF9LG4uc2V0UHJvcHM9ZnVuY3Rpb24oZSx0LGEpe3ZhciBpPWZ1bmN0aW9uKCl7dmFyIGE9ZT9lOihuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbyxpPWZ1bmN0aW9uKCl7aWYodilyZXR1cm5cInNldFRvdWNoXCI9PT10P2U6dSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmxpbWl0OmE7c3dpdGNoKHQpe2Nhc2VcInNldFRvdGFsXCI6cmV0dXJuIHU/KG4uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplO2Nhc2VcInNldFRvdWNoXCI6cmV0dXJuIHU/ZTplO2Nhc2VcImp1bXBFbmRcIjpyZXR1cm4gdT9lOm4uY291bnQqZTtjYXNlXCJqdW1wU3RhcnRcIjpyZXR1cm4gdT9uLmNvdW50KmU6ZTtkZWZhdWx0OnJldHVybiBlfX0oKTtyZXR1cm4tMSppK1wicHhcIn0oKTtuLnRyYW5zaXRpb25zJiYoaT1kP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIitpK1wiLDAsMClcIixhPXZvaWQgMCE9PWE/YS8xZTMrXCJzXCI6XCIwc1wiLG4uY29udGFpbmVyLmNzcyhcIi1cIituLnBmeCtcIi10cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSksbi5jb250YWluZXIuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpKSxuLmFyZ3Nbbi5wcm9wXT1pLChuLnRyYW5zaXRpb25zfHx2b2lkIDA9PT1hKSYmbi5jb250YWluZXIuY3NzKG4uYXJncyksbi5jb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsaSl9LG4uc2V0dXA9ZnVuY3Rpb24oZSl7aWYocCluLnNsaWRlcy5jc3Moe3dpZHRoOlwiMTAwJVwiLFwiZmxvYXRcIjpcImxlZnRcIixtYXJnaW5SaWdodDpcIi0xMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSksXCJpbml0XCI9PT1lJiYocj9uLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix3ZWJraXRUcmFuc2l0aW9uOlwib3BhY2l0eSBcIituLnZhcnMuYW5pbWF0aW9uU3BlZWQvMWUzK1wicyBlYXNlXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KTowPT1uLnZhcnMuZmFkZUZpcnN0U2xpZGU/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmNzcyh7b3BhY2l0eToxfSk6bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcpKSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpO2Vsc2V7dmFyIHQsYTtcImluaXRcIj09PWUmJihuLnZpZXdwb3J0PSQoJzxkaXYgY2xhc3M9XCInK2krJ3ZpZXdwb3J0XCI+PC9kaXY+JykuY3NzKHtvdmVyZmxvdzpcImhpZGRlblwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLmFwcGVuZFRvKG4pLmFwcGVuZChuLmNvbnRhaW5lciksbi5jbG9uZUNvdW50PTAsbi5jbG9uZU9mZnNldD0wLHUmJihhPSQubWFrZUFycmF5KG4uc2xpZGVzKS5yZXZlcnNlKCksbi5zbGlkZXM9JChhKSxuLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChuLnNsaWRlcykpKSxuLnZhcnMuYW5pbWF0aW9uTG9vcCYmIXYmJihuLmNsb25lQ291bnQ9MixuLmNsb25lT2Zmc2V0PTEsXCJpbml0XCIhPT1lJiZuLmNvbnRhaW5lci5maW5kKFwiLmNsb25lXCIpLnJlbW92ZSgpLG4uY29udGFpbmVyLmFwcGVuZChmLnVuaXF1ZUlEKG4uc2xpZGVzLmZpcnN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpLnByZXBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5sYXN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpKSxuLm5ld1NsaWRlcz0kKG4udmFycy5zZWxlY3RvcixuKSx0PXU/bi5jb3VudC0xLW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQ6bi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCxkJiYhdj8obi5jb250YWluZXIuaGVpZ2h0KDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKS5jc3MoXCJwb3NpdGlvblwiLFwiYWJzb2x1dGVcIikud2lkdGgoXCIxMDAlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm5ld1NsaWRlcy5jc3Moe2Rpc3BsYXk6XCJibG9ja1wifSksbi5kb01hdGgoKSxuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHModCpuLmgsXCJpbml0XCIpfSxcImluaXRcIj09PWU/MTAwOjApKToobi5jb250YWluZXIud2lkdGgoMjAwKihuLmNvdW50K24uY2xvbmVDb3VudCkrXCIlXCIpLG4uc2V0UHJvcHModCpuLmNvbXB1dGVkVyxcImluaXRcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24uZG9NYXRoKCksbi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxcImZsb2F0XCI6XCJsZWZ0XCIsZGlzcGxheTpcImJsb2NrXCJ9KSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpfSxcImluaXRcIj09PWU/MTAwOjApKX12fHxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudFNsaWRlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLG4udmFycy5pbml0KG4pfSxuLmRvTWF0aD1mdW5jdGlvbigpe3ZhciBlPW4uc2xpZGVzLmZpcnN0KCksdD1uLnZhcnMuaXRlbU1hcmdpbixhPW4udmFycy5taW5JdGVtcyxpPW4udmFycy5tYXhJdGVtcztuLnc9dm9pZCAwPT09bi52aWV3cG9ydD9uLndpZHRoKCk6bi52aWV3cG9ydC53aWR0aCgpLG4uaD1lLmhlaWdodCgpLG4uYm94UGFkZGluZz1lLm91dGVyV2lkdGgoKS1lLndpZHRoKCksdj8obi5pdGVtVD1uLnZhcnMuaXRlbVdpZHRoK3Qsbi5pdGVtTT10LG4ubWluVz1hP2Eqbi5pdGVtVDpuLncsbi5tYXhXPWk/aSpuLml0ZW1ULXQ6bi53LG4uaXRlbVc9bi5taW5XPm4udz8obi53LXQqKGEtMSkpL2E6bi5tYXhXPG4udz8obi53LXQqKGktMSkpL2k6bi52YXJzLml0ZW1XaWR0aD5uLnc/bi53Om4udmFycy5pdGVtV2lkdGgsbi52aXNpYmxlPU1hdGguZmxvb3Iobi53L24uaXRlbVcpLG4ubW92ZT1uLnZhcnMubW92ZT4wJiZuLnZhcnMubW92ZTxuLnZpc2libGU/bi52YXJzLm1vdmU6bi52aXNpYmxlLG4ucGFnaW5nQ291bnQ9TWF0aC5jZWlsKChuLmNvdW50LW4udmlzaWJsZSkvbi5tb3ZlKzEpLG4ubGFzdD1uLnBhZ2luZ0NvdW50LTEsbi5saW1pdD0xPT09bi5wYWdpbmdDb3VudD8wOm4udmFycy5pdGVtV2lkdGg+bi53P24uaXRlbVcqKG4uY291bnQtMSkrdCoobi5jb3VudC0xKToobi5pdGVtVyt0KSpuLmNvdW50LW4udy10KToobi5pdGVtVz1uLncsbi5pdGVtTT10LG4ucGFnaW5nQ291bnQ9bi5jb3VudCxuLmxhc3Q9bi5jb3VudC0xKSxuLmNvbXB1dGVkVz1uLml0ZW1XLW4uYm94UGFkZGluZyxuLmNvbXB1dGVkTT1uLml0ZW1NfSxuLnVwZGF0ZT1mdW5jdGlvbihlLHQpe24uZG9NYXRoKCksdnx8KGU8bi5jdXJyZW50U2xpZGU/bi5jdXJyZW50U2xpZGUrPTE6ZTw9bi5jdXJyZW50U2xpZGUmJjAhPT1lJiYobi5jdXJyZW50U2xpZGUtPTEpLG4uYW5pbWF0aW5nVG89bi5jdXJyZW50U2xpZGUpLG4udmFycy5jb250cm9sTmF2JiYhbi5tYW51YWxDb250cm9scyYmKFwiYWRkXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudD5uLmNvbnRyb2xOYXYubGVuZ3RoP2YuY29udHJvbE5hdi51cGRhdGUoXCJhZGRcIik6KFwicmVtb3ZlXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudDxuLmNvbnRyb2xOYXYubGVuZ3RoKSYmKHYmJm4uY3VycmVudFNsaWRlPm4ubGFzdCYmKG4uY3VycmVudFNsaWRlLT0xLG4uYW5pbWF0aW5nVG8tPTEpLGYuY29udHJvbE5hdi51cGRhdGUoXCJyZW1vdmVcIixuLmxhc3QpKSksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYudXBkYXRlKCl9LG4uYWRkU2xpZGU9ZnVuY3Rpb24oZSx0KXt2YXIgYT0kKGUpO24uY291bnQrPTEsbi5sYXN0PW4uY291bnQtMSxkJiZ1P3ZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEobi5jb3VudC10KS5hZnRlcihhKTpuLmNvbnRhaW5lci5wcmVwZW5kKGEpOnZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEodCkuYmVmb3JlKGEpOm4uY29udGFpbmVyLmFwcGVuZChhKSxuLnVwZGF0ZSh0LFwiYWRkXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5hZGRlZChuKX0sbi5yZW1vdmVTbGlkZT1mdW5jdGlvbihlKXt2YXIgdD1pc05hTihlKT9uLnNsaWRlcy5pbmRleCgkKGUpKTplO24uY291bnQtPTEsbi5sYXN0PW4uY291bnQtMSxpc05hTihlKT8kKGUsbi5zbGlkZXMpLnJlbW92ZSgpOmQmJnU/bi5zbGlkZXMuZXEobi5sYXN0KS5yZW1vdmUoKTpuLnNsaWRlcy5lcShlKS5yZW1vdmUoKSxuLmRvTWF0aCgpLG4udXBkYXRlKHQsXCJyZW1vdmVcIiksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IrXCI6bm90KC5jbG9uZSlcIixuKSxuLnNldHVwKCksbi52YXJzLnJlbW92ZWQobil9LGYuaW5pdCgpfSwkKHdpbmRvdykuYmx1cihmdW5jdGlvbih0KXtlPSExfSkuZm9jdXMoZnVuY3Rpb24odCl7ZT0hMH0pLCQuZmxleHNsaWRlci5kZWZhdWx0cz17bmFtZXNwYWNlOlwiZmxleC1cIixzZWxlY3RvcjpcIi5zbGlkZXMgPiBsaVwiLGFuaW1hdGlvbjpcImZhZGVcIixlYXNpbmc6XCJzd2luZ1wiLGRpcmVjdGlvbjpcImhvcml6b250YWxcIixyZXZlcnNlOiExLGFuaW1hdGlvbkxvb3A6ITAsc21vb3RoSGVpZ2h0OiExLHN0YXJ0QXQ6MCxzbGlkZXNob3c6ITAsc2xpZGVzaG93U3BlZWQ6N2UzLGFuaW1hdGlvblNwZWVkOjYwMCxpbml0RGVsYXk6MCxyYW5kb21pemU6ITEsZmFkZUZpcnN0U2xpZGU6ITAsdGh1bWJDYXB0aW9uczohMSxwYXVzZU9uQWN0aW9uOiEwLHBhdXNlT25Ib3ZlcjohMSxwYXVzZUludmlzaWJsZTohMCx1c2VDU1M6ITAsdG91Y2g6ITAsdmlkZW86ITEsY29udHJvbE5hdjohMCxkaXJlY3Rpb25OYXY6ITAscHJldlRleHQ6XCJQcmV2aW91c1wiLG5leHRUZXh0OlwiTmV4dFwiLGtleWJvYXJkOiEwLG11bHRpcGxlS2V5Ym9hcmQ6ITEsbW91c2V3aGVlbDohMSxwYXVzZVBsYXk6ITEscGF1c2VUZXh0OlwiUGF1c2VcIixwbGF5VGV4dDpcIlBsYXlcIixjb250cm9sc0NvbnRhaW5lcjpcIlwiLG1hbnVhbENvbnRyb2xzOlwiXCIsY3VzdG9tRGlyZWN0aW9uTmF2OlwiXCIsc3luYzpcIlwiLGFzTmF2Rm9yOlwiXCIsaXRlbVdpZHRoOjAsaXRlbU1hcmdpbjowLG1pbkl0ZW1zOjEsbWF4SXRlbXM6MCxtb3ZlOjAsYWxsb3dPbmVTbGlkZTohMCxzdGFydDpmdW5jdGlvbigpe30sYmVmb3JlOmZ1bmN0aW9uKCl7fSxhZnRlcjpmdW5jdGlvbigpe30sZW5kOmZ1bmN0aW9uKCl7fSxhZGRlZDpmdW5jdGlvbigpe30scmVtb3ZlZDpmdW5jdGlvbigpe30saW5pdDpmdW5jdGlvbigpe319LCQuZm4uZmxleHNsaWRlcj1mdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lJiYoZT17fSksXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSQodGhpcyksYT1lLnNlbGVjdG9yP2Uuc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixuPXQuZmluZChhKTsxPT09bi5sZW5ndGgmJmUuYWxsb3dPbmVTbGlkZT09PSEwfHwwPT09bi5sZW5ndGg/KG4uZmFkZUluKDQwMCksZS5zdGFydCYmZS5zdGFydCh0KSk6dm9pZCAwPT09dC5kYXRhKFwiZmxleHNsaWRlclwiKSYmbmV3ICQuZmxleHNsaWRlcih0aGlzLGUpfSk7dmFyIHQ9JCh0aGlzKS5kYXRhKFwiZmxleHNsaWRlclwiKTtzd2l0Y2goZSl7Y2FzZVwicGxheVwiOnQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrO2Nhc2VcInN0b3BcIjp0LnN0b3AoKTticmVhaztjYXNlXCJuZXh0XCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcIm5leHRcIiksITApO2JyZWFrO2Nhc2VcInByZXZcIjpjYXNlXCJwcmV2aW91c1wiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTticmVhaztkZWZhdWx0OlwibnVtYmVyXCI9PXR5cGVvZiBlJiZ0LmZsZXhBbmltYXRlKGUsITApfX19KGpRdWVyeSk7IiwiLy9cbi8vIERyb3Bkb3duIE1lbnVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOyhmdW5jdGlvbigkKSB7XG5cbiAgICAkLmZuLmRyb3BpdCA9IGZ1bmN0aW9uKG1ldGhvZCkge1xuXG4gICAgICAgIHZhciBtZXRob2RzID0ge1xuXG4gICAgICAgICAgICBpbml0IDogZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGl0LnNldHRpbmdzID0gJC5leHRlbmQoe30sIHRoaXMuZHJvcGl0LmRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgJGVsID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBlbCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MgPSAkLmZuLmRyb3BpdC5zZXR0aW5ncztcblxuICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIGluaXRpYWwgc3VibWVudXNcbiAgICAgICAgICAgICAgICAgICAgJGVsLmFkZENsYXNzKCdkcm9waXQnKVxuICAgICAgICAgICAgICAgICAgICAuZmluZCgnPicrIHNldHRpbmdzLnRyaWdnZXJQYXJlbnRFbCArJzpoYXMoJysgc2V0dGluZ3Muc3VibWVudUVsICsnKScpLmFkZENsYXNzKCdkcm9waXQtdHJpZ2dlcicpXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKHNldHRpbmdzLnN1Ym1lbnVFbCkuYWRkQ2xhc3MoJ2Ryb3BpdC1zdWJtZW51JykuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZW4gb24gY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgJGVsLm9mZihzZXR0aW5ncy5hY3Rpb24pLm9uKHNldHRpbmdzLmFjdGlvbiwgc2V0dGluZ3MudHJpZ2dlclBhcmVudEVsICsnOmhhcygnKyBzZXR0aW5ncy5zdWJtZW51RWwgKycpID4gJysgc2V0dGluZ3MudHJpZ2dlckVsICsnJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGNsaWNrIG1lbnUncyBpZiBjbGlja2VkIGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy5hY3Rpb24gPT0gJ2NsaWNrJyAmJiAkKHRoaXMpLnBhcmVudHMoc2V0dGluZ3MudHJpZ2dlclBhcmVudEVsKS5oYXNDbGFzcygnZHJvcGl0LW9wZW4nKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYmVmb3JlSGlkZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50cyhzZXR0aW5ncy50cmlnZ2VyUGFyZW50RWwpLnJlbW92ZUNsYXNzKCdkcm9waXQtb3BlbicpLmZpbmQoc2V0dGluZ3Muc3VibWVudUVsKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYWZ0ZXJIaWRlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIaWRlIG9wZW4gbWVudXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmJlZm9yZUhpZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kcm9waXQtb3BlbicpLnJlbW92ZUNsYXNzKCdkcm9waXQtb3BlbicpLmZpbmQoJy5kcm9waXQtc3VibWVudScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVySGlkZS5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPcGVuIHRoaXMgbWVudVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYmVmb3JlU2hvdy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnRzKHNldHRpbmdzLnRyaWdnZXJQYXJlbnRFbCkuYWRkQ2xhc3MoJ2Ryb3BpdC1vcGVuJykuZmluZChzZXR0aW5ncy5zdWJtZW51RWwpLnNob3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVyU2hvdy5jYWxsKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIGlmIG91dHNpZGUgY2xpY2tcbiAgICAgICAgICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmJlZm9yZUhpZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5kcm9waXQtb3BlbicpLnJlbW92ZUNsYXNzKCdkcm9waXQtb3BlbicpLmZpbmQoJy5kcm9waXQtc3VibWVudScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVySGlkZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBob3ZlclxuICAgICAgICAgICAgICAgICAgICBpZihzZXR0aW5ncy5hY3Rpb24gPT0gJ21vdXNlZW50ZXInKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICRlbC5vbignbW91c2VsZWF2ZScsICcuZHJvcGl0LW9wZW4nLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmJlZm9yZUhpZGUuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkcm9waXQtb3BlbicpLmZpbmQoc2V0dGluZ3Muc3VibWVudUVsKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYWZ0ZXJIaWRlLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVyTG9hZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1ldGhvZHNbbWV0aG9kXSkge1xuICAgICAgICAgICAgcmV0dXJuIG1ldGhvZHNbbWV0aG9kXS5hcHBseSh0aGlzLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbWV0aG9kID09PSAnb2JqZWN0JyB8fCAhbWV0aG9kKSB7XG4gICAgICAgICAgICByZXR1cm4gbWV0aG9kcy5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkLmVycm9yKCAnTWV0aG9kIFwiJyArICBtZXRob2QgKyAnXCIgZG9lcyBub3QgZXhpc3QgaW4gZHJvcGl0IHBsdWdpbiEnKTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4uZHJvcGl0LmRlZmF1bHRzID0ge1xuICAgICAgICBhY3Rpb246ICdjbGljaycsIC8vIFRoZSBvcGVuIGFjdGlvbiBmb3IgdGhlIHRyaWdnZXJcbiAgICAgICAgc3VibWVudUVsOiAndWwnLCAvLyBUaGUgc3VibWVudSBlbGVtZW50XG4gICAgICAgIHRyaWdnZXJFbDogJ2EnLCAvLyBUaGUgdHJpZ2dlciBlbGVtZW50XG4gICAgICAgIHRyaWdnZXJQYXJlbnRFbDogJ2xpJywgLy8gVGhlIHRyaWdnZXIgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgYWZ0ZXJMb2FkOiBmdW5jdGlvbigpe30sIC8vIFRyaWdnZXJzIHdoZW4gcGx1Z2luIGhhcyBsb2FkZWRcbiAgICAgICAgYmVmb3JlU2hvdzogZnVuY3Rpb24oKXt9LCAvLyBUcmlnZ2VycyBiZWZvcmUgc3VibWVudSBpcyBzaG93blxuICAgICAgICBhZnRlclNob3c6IGZ1bmN0aW9uKCl7fSwgLy8gVHJpZ2dlcnMgYWZ0ZXIgc3VibWVudSBpcyBzaG93blxuICAgICAgICBiZWZvcmVIaWRlOiBmdW5jdGlvbigpe30sIC8vIFRyaWdnZXJzIGJlZm9yZSBzdWJtZW51IGlzIGhpZGRlblxuICAgICAgICBhZnRlckhpZGU6IGZ1bmN0aW9uKCl7fSAvLyBUcmlnZ2VycyBiZWZvcmUgc3VibWVudSBpcyBoaWRkZW5cbiAgICB9O1xuXG4gICAgJC5mbi5kcm9waXQuc2V0dGluZ3MgPSB7fTtcblxufSkoalF1ZXJ5KTsiLCIvL1xuLy8gQXNpZGVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uKHdpbmRvdywgJCkge1xuICB2YXIgJGFzaWRlX21lbnVfdHJpZ2dlciA9ICQoJy5hc2lkZS10cmlnZ2VyJyksXG4gICAgICAkY29udGVudF93cmFwcGVyID0gJCgnbWFpbicpLFxuICAgICAgJGFzaWRlX2xpbmtzID0gJCgnYXNpZGUgbGk6bm90KC5oYXMtc3ViLW1lbnUpIGEnKSxcbiAgICAgICRoZWFkZXIgPSAkKCdoZWFkZXInKSxcbiAgICAgICRuYXYgPSAkKCduYXYnKSxcbiAgICAgICRib2R5ID0gJCgnYm9keScpO1xuXG4gIC8vIE9wZW4tY2xvc2UgYXNpZGUgbWVudSBjbGlja2luZyBvbiB0aGUgbWVudSBpY29uXG4gICRhc2lkZV9tZW51X3RyaWdnZXIub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoISQoZXZlbnQuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ2FzaWRlLXRyaWdnZXInKSAmJiAkYXNpZGVfbWVudV90cmlnZ2VyLmhhc0NsYXNzKCdpcy1jbGlja2VkJykpIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJGFzaWRlX21lbnVfdHJpZ2dlci50b2dnbGVDbGFzcygnaXMtY2xpY2tlZCcpO1xuICAgICRoZWFkZXIudG9nZ2xlQ2xhc3MoJ2FzaWRlLWlzLW9wZW4nKTtcblxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSAmJiB3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDY0ZW0pXCIpLm1hdGNoZXMpIHtcbiAgICAgICRuYXYudG9nZ2xlQ2xhc3MoJ2FzaWRlLWlzLW9wZW4nKTtcbiAgICAgICQoJ2FzaWRlJykudG9nZ2xlQ2xhc3MoJ2FzaWRlLWlzLW9wZW4nKTtcbiAgICB9XG5cbiAgICAvLyAkb3ZlcmxheS50b2dnbGVDbGFzcygnaXMtdmlzaWJsZScpO1xuICAgICRjb250ZW50X3dyYXBwZXIudG9nZ2xlQ2xhc3MoJ2FzaWRlLWlzLW9wZW4nKS5vbmUoJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnLCBmdW5jdGlvbigpe1xuICAgIC8vIEZpcmVmb3ggdHJhbnNpdGlvbnMgYnJlYWsgd2hlbiBwYXJlbnQgb3ZlcmZsb3cgaXMgY2hhbmdlZCxcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBlbmQgb2YgdGhlIHRyYXNpdGlvbiB0b1xuICAgIC8vIGdpdmUgdGhlIGJvZHkgYW4gb3ZlcmZsb3cgaGlkZGVuXG4gICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ292ZXJmbG93LWhpZGRlbicpO1xuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgdHJhbnNpdGlvbnMgYXJlIG5vdCBzdXBwb3J0ZWQgLSBpLmUuIGluIElFOVxuICAgIGlmKCQoJ2h0bWwnKS5oYXNDbGFzcygnbm8tY3NzdHJhbnNpdGlvbnMnKSkge1xuICAgICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ2lzLWZpeGVkJyk7XG4gICAgfVxuXG4gICAgJGJvZHkudG9nZ2xlQ2xhc3MoJ2lzLWZpeGVkJyk7XG5cbiAgICAkKCdhc2lkZSAuaGFzLXN1Yi1tZW51LnN1Yi1tZW51LW9wZW4nKS50cmlnZ2VyKCdjbGljaycpXG4gIH0pO1xuXG4gICQoJ21haW4uYXNpZGUtaXMtb3BlbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgJCgnYS5hc2lkZS10cmlnZ2VyJykudHJpZ2dlcignY2xpY2snKTtcbiAgfSk7XG5cbn0od2luZG93LCBqUXVlcnkgfHwgJCkpOyIsIi8vXG4vLyBCbG9nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uKHdpbmRvdywgJCkge1xuXG4gIGZ1bmN0aW9uIGFkZEFyZ3VtZW50VG9VcmwobmFtZSwgdmFsdWUpIHtcbiAgICB2YXIgdXJsID0gbmV3IFVybChkb2N1bWVudC5sb2NhdGlvbi5ocmVmKTtcbiAgICB1cmwucGF0aCA9ICcvbGlicmFyeS8nO1xuICAgIHVybC5xdWVyeVtuYW1lXSA9IHZhbHVlO1xuICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUFyZ3VtZW50RnJvbVVybChuYW1lKSB7XG4gICAgdmFyIHVybCA9IG5ldyBVcmwoZG9jdW1lbnQubG9jYXRpb24uaHJlZik7XG4gICAgdXJsLnBhdGggPSAnL2xpYnJhcnkvJztcbiAgICBpZiAobmFtZSBpbiB1cmwucXVlcnkpIHtcbiAgICAgIGRlbGV0ZSB1cmwucXVlcnlbbmFtZV07XG4gICAgfVxuICAgIHJldHVybiB1cmwudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHZhciBjYXRlZ29yeVNlbGVjdCA9ICQoJy5zZWxlY3QtY2F0ZWdvcnknKTtcbiAgY2F0ZWdvcnlTZWxlY3Qub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGNhdGVnb3J5U2x1ZyA9IGNhdGVnb3J5U2VsZWN0LnZhbCgpO1xuICAgIGlmICghIWNhdGVnb3J5U2x1Zykge1xuICAgICAgZG9jdW1lbnQubG9jYXRpb24gPSBhZGRBcmd1bWVudFRvVXJsKCdjYXRlZ29yeScsIGNhdGVnb3J5U2x1Zyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gcmVtb3ZlQXJndW1lbnRGcm9tVXJsKCdjYXRlZ29yeScpO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHRhZ1NlbGVjdCA9ICQoJy5zZWxlY3QtdGFnJyk7XG4gIHRhZ1NlbGVjdC5vbignY2hhbmdlJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdGFnU2x1ZyA9IHRhZ1NlbGVjdC52YWwoKTtcbiAgICBpZiAoISF0YWdTbHVnKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IGFkZEFyZ3VtZW50VG9VcmwoJ3RhZycsIHRhZ1NsdWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHJlbW92ZUFyZ3VtZW50RnJvbVVybCgndGFnJyk7XG4gICAgfVxuICB9KTtcblxuICB2YXIgYmxvZ1NlYXJjaEZvcm0gPSAkKCcjYmxvZy1zZWFyY2gtZm9ybScpO1xuICBibG9nU2VhcmNoRm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YXIgcXVlcnkgPSBibG9nU2VhcmNoRm9ybS5maW5kKCcuc2VhcmNoJykudmFsKCk7XG4gICAgaWYgKCEhcXVlcnkpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uID0gYWRkQXJndW1lbnRUb1VybCgnc2VhcmNoJywgcXVlcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHJlbW92ZUFyZ3VtZW50RnJvbVVybCgnc2VhcmNoJyk7XG4gICAgfVxuICB9KTtcblxuICBuZXcgUGpheCh7XG4gICAgZWxlbWVudHM6IFsnYS5sb2FkLW1vcmUtcG9zdHMnXSxcbiAgICBzZWxlY3RvcnM6IFsnLnNlY3Rpb24tYmxvZy1saXN0J10sXG4gICAgc3dpdGNoZXM6IHtcbiAgICAgICcuc2VjdGlvbi1ibG9nLWxpc3QnOiBmdW5jdGlvbihvbGRFbCwgbmV3RWwsIG9wdGlvbnMpIHtcbiAgICAgICAgdmFyICRvbGRFbCA9ICQob2xkRWwpO1xuICAgICAgICB2YXIgJG5ld0VsID0gJChuZXdFbCk7XG4gICAgICAgIHZhciBuZXdMb2FkTW9yZSA9ICRuZXdFbC5maW5kKCdhLmxvYWQtbW9yZS1wb3N0cycpO1xuICAgICAgICB2YXIgb2xkTG9hZE1vcmUgPSAkb2xkRWwuZmluZCgnYS5sb2FkLW1vcmUtcG9zdHMnKTtcbiAgICAgICAgaWYgKG5ld0xvYWRNb3JlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHZhciB1cmwgPSBuZXcgVXJsKG9sZExvYWRNb3JlLmF0dHIoJ2hyZWYnKSk7XG4gICAgICAgICAgdXJsLnF1ZXJ5LnBhZ2UgPSAxICsgcGFyc2VJbnQodXJsLnF1ZXJ5LnBhZ2UgfHwgMSk7XG4gICAgICAgICAgb2xkTG9hZE1vcmUuYXR0cignaHJlZicsIHVybC50b1N0cmluZygpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbGRMb2FkTW9yZS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICAkb2xkRWwuZmluZCgndWwudGhlLWxvb3AnKS5hcHBlbmQoJG5ld0VsLmZpbmQoJ3VsLnRoZS1sb29wIGxpJykpO1xuICAgICAgICB0aGlzLm9uU3dpdGNoKCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBzY3JvbGxUbzogZmFsc2VcbiAgfSk7XG59KHdpbmRvdywgalF1ZXJ5IHx8ICQpKTsiLCIvL1xuLy8gQ29udGFjdCBQYWdlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uKHdpbmRvdywgJCkge1xuICB2YXIgY29udGFjdFBhZ2UgPSAkKCcudGVtcGxhdGUtY29udGFjdCcpO1xuICBpZiAoY29udGFjdFBhZ2UubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIG9mZmljZXNNZW51RWwgPSBjb250YWN0UGFnZS5maW5kKCcub2ZmaWNlcy1tZW51Jyk7XG4gIGlmIChvZmZpY2VzTWVudUVsLmZpbmQoJ3VsJykubGVuZ3RoID09PSAwKSB7XG4gICAgY29udGFjdFBhZ2UuZmluZCgnLm9mZmljZS1sb2NhdGlvbi1kZXRhaWxzJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gIH0gZWxzZSB7XG4gICAgb2ZmaWNlc01lbnVFbC5kcm9waXQoe1xuICAgICAgdHJpZ2dlckVsOiAnaDEgYSdcbiAgICB9KTtcblxuICAgIHZhciBvZmZpY2VNZW51TGFiZWwgPSBvZmZpY2VzTWVudUVsLmZpbmQoJ2gxIC5jb3VudHJ5LW5hbWUnKTtcbiAgICB2YXIgb2ZmaWNlSXRlbXMgPSBvZmZpY2VzTWVudUVsLmZpbmQoJyB1bCBsaSA+IGEnKTtcbiAgICBvZmZpY2VJdGVtcy5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHZhciBuZXdEYXRhID0gJChlLmN1cnJlbnRUYXJnZXQpLmRhdGEoKTtcbiAgICAgIG9mZmljZU1lbnVMYWJlbC5odG1sKG5ld0RhdGEuY291bnRyeU5hbWUpO1xuICAgICAgY29udGFjdFBhZ2UuZmluZCgnLm9mZmljZS1sb2NhdGlvbi1kZXRhaWxzJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIGNvbnRhY3RQYWdlLmZpbmQoJy5vZmZpY2UtbG9jYXRpb24tJyArIG5ld0RhdGEuY291bnRyeUNvZGUpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuICAgIH0pO1xuICAgICQob2ZmaWNlSXRlbXNbMF0pLmNsaWNrKCk7XG4gIH1cbn0od2luZG93LCBqUXVlcnkgfHwgJCkpOyIsIi8vXG4vLyBNb2RhbFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbihmdW5jdGlvbigkKSB7XG5cbiAgdmFyIG1vZGFscyA9IFtdLFxuICAgICAgZ2V0Q3VycmVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbW9kYWxzLmxlbmd0aCA/IG1vZGFsc1ttb2RhbHMubGVuZ3RoIC0gMV0gOiBudWxsO1xuICAgICAgfSxcbiAgICAgIHNlbGVjdEN1cnJlbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksXG4gICAgICAgICAgICBzZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGk9bW9kYWxzLmxlbmd0aC0xOyBpPj0wOyBpLS0pIHtcbiAgICAgICAgICBpZiAobW9kYWxzW2ldLiRibG9ja2VyKSB7XG4gICAgICAgICAgICBtb2RhbHNbaV0uJGJsb2NrZXIudG9nZ2xlQ2xhc3MoJ2N1cnJlbnQnLCFzZWxlY3RlZCkudG9nZ2xlQ2xhc3MoJ2JlaGluZCcsc2VsZWN0ZWQpO1xuICAgICAgICAgICAgc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAkLm1vZGFsID0gZnVuY3Rpb24oZWwsIG9wdGlvbnMpIHtcbiAgICB2YXIgcmVtb3ZlLCB0YXJnZXQ7XG4gICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgJC5tb2RhbC5kZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zLmRvRmFkZSA9ICFpc05hTihwYXJzZUludCh0aGlzLm9wdGlvbnMuZmFkZUR1cmF0aW9uLCAxMCkpO1xuICAgIHRoaXMuJGJsb2NrZXIgPSBudWxsO1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY2xvc2VFeGlzdGluZylcbiAgICAgIHdoaWxlICgkLm1vZGFsLmlzQWN0aXZlKCkpXG4gICAgICAgICQubW9kYWwuY2xvc2UoKTsgLy8gQ2xvc2UgYW55IG9wZW4gbW9kYWxzLlxuICAgIG1vZGFscy5wdXNoKHRoaXMpO1xuICAgIGlmIChlbC5pcygnYScpKSB7XG4gICAgICB0YXJnZXQgPSBlbC5hdHRyKCdocmVmJyk7XG4gICAgICAvL1NlbGVjdCBlbGVtZW50IGJ5IGlkIGZyb20gaHJlZlxuICAgICAgaWYgKC9eIy8udGVzdCh0YXJnZXQpKSB7XG4gICAgICAgIHRoaXMuJGVsbSA9ICQodGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuJGVsbS5sZW5ndGggIT09IDEpIHJldHVybiBudWxsO1xuICAgICAgICB0aGlzLiRib2R5LmFwcGVuZCh0aGlzLiRlbG0pO1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIC8vQUpBWFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kZWxtID0gJCgnPGRpdj4nKTtcbiAgICAgICAgdGhpcy4kYm9keS5hcHBlbmQodGhpcy4kZWxtKTtcbiAgICAgICAgcmVtb3ZlID0gZnVuY3Rpb24oZXZlbnQsIG1vZGFsKSB7IG1vZGFsLmVsbS5yZW1vdmUoKTsgfTtcbiAgICAgICAgdGhpcy5zaG93U3Bpbm5lcigpO1xuICAgICAgICBlbC50cmlnZ2VyKCQubW9kYWwuQUpBWF9TRU5EKTtcbiAgICAgICAgJC5nZXQodGFyZ2V0KS5kb25lKGZ1bmN0aW9uKGh0bWwpIHtcbiAgICAgICAgICBpZiAoISQubW9kYWwuaXNBY3RpdmUoKSkgcmV0dXJuO1xuICAgICAgICAgIGVsLnRyaWdnZXIoJC5tb2RhbC5BSkFYX1NVQ0NFU1MpO1xuICAgICAgICAgIHZhciBjdXJyZW50ID0gZ2V0Q3VycmVudCgpO1xuICAgICAgICAgIGN1cnJlbnQuJGVsbS5lbXB0eSgpLmFwcGVuZChodG1sKS5vbigkLm1vZGFsLkNMT1NFLCByZW1vdmUpO1xuICAgICAgICAgIGN1cnJlbnQuaGlkZVNwaW5uZXIoKTtcbiAgICAgICAgICBjdXJyZW50Lm9wZW4oKTtcbiAgICAgICAgICBlbC50cmlnZ2VyKCQubW9kYWwuQUpBWF9DT01QTEVURSk7XG4gICAgICAgIH0pLmZhaWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgZWwudHJpZ2dlcigkLm1vZGFsLkFKQVhfRkFJTCk7XG4gICAgICAgICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG4gICAgICAgICAgY3VycmVudC5oaWRlU3Bpbm5lcigpO1xuICAgICAgICAgIG1vZGFscy5wb3AoKTsgLy8gcmVtb3ZlIGV4cGVjdGVkIG1vZGFsIGZyb20gdGhlIGxpc3RcbiAgICAgICAgICBlbC50cmlnZ2VyKCQubW9kYWwuQUpBWF9DT01QTEVURSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiRlbG0gPSBlbDtcbiAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKHRoaXMuJGVsbSk7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH07XG5cbiAgJC5tb2RhbC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6ICQubW9kYWwsXG5cbiAgICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBtID0gdGhpcztcbiAgICAgIHRoaXMuYmxvY2soKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5kb0ZhZGUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICBtLnNob3coKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmZhZGVEdXJhdGlvbiAqIHRoaXMub3B0aW9ucy5mYWRlRGVsYXkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICB9XG4gICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24ubW9kYWwnKS5vbigna2V5ZG93bi5tb2RhbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBjdXJyZW50ID0gZ2V0Q3VycmVudCgpO1xuICAgICAgICBpZiAoZXZlbnQud2hpY2ggPT0gMjcgJiYgY3VycmVudC5vcHRpb25zLmVzY2FwZUNsb3NlKSBjdXJyZW50LmNsb3NlKCk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuY2xpY2tDbG9zZSlcbiAgICAgICAgdGhpcy4kYmxvY2tlci5jbGljayhmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0PT10aGlzKVxuICAgICAgICAgICAgJC5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgbW9kYWxzLnBvcCgpO1xuICAgICAgdGhpcy51bmJsb2NrKCk7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICAgIGlmICghJC5tb2RhbC5pc0FjdGl2ZSgpKVxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2tleWRvd24ubW9kYWwnKTtcbiAgICB9LFxuXG4gICAgYmxvY2s6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy4kZWxtLnRyaWdnZXIoJC5tb2RhbC5CRUZPUkVfQkxPQ0ssIFt0aGlzLl9jdHgoKV0pO1xuICAgICAgdGhpcy4kYm9keS5jc3MoJ292ZXJmbG93JywnaGlkZGVuJyk7XG4gICAgICB0aGlzLiRibG9ja2VyID0gJCgnPGRpdiBjbGFzcz1cImpxdWVyeS1tb2RhbCBibG9ja2VyIGN1cnJlbnRcIj48L2Rpdj4nKS5hcHBlbmRUbyh0aGlzLiRib2R5KTtcbiAgICAgIHNlbGVjdEN1cnJlbnQoKTtcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5kb0ZhZGUpIHtcbiAgICAgICAgdGhpcy4kYmxvY2tlci5jc3MoJ29wYWNpdHknLDApLmFuaW1hdGUoe29wYWNpdHk6IDF9LCB0aGlzLm9wdGlvbnMuZmFkZUR1cmF0aW9uKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVsbS50cmlnZ2VyKCQubW9kYWwuQkxPQ0ssIFt0aGlzLl9jdHgoKV0pO1xuICAgIH0sXG5cbiAgICB1bmJsb2NrOiBmdW5jdGlvbihub3cpIHtcbiAgICAgIGlmICghbm93ICYmIHRoaXMub3B0aW9ucy5kb0ZhZGUpXG4gICAgICAgIHRoaXMuJGJsb2NrZXIuZmFkZU91dCh0aGlzLm9wdGlvbnMuZmFkZUR1cmF0aW9uLCB0aGlzLnVuYmxvY2suYmluZCh0aGlzLHRydWUpKTtcbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLiRibG9ja2VyLmNoaWxkcmVuKCkuYXBwZW5kVG8odGhpcy4kYm9keSk7XG4gICAgICAgIHRoaXMuJGJsb2NrZXIucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuJGJsb2NrZXIgPSBudWxsO1xuICAgICAgICBzZWxlY3RDdXJyZW50KCk7XG4gICAgICAgIGlmICghJC5tb2RhbC5pc0FjdGl2ZSgpKVxuICAgICAgICAgIHRoaXMuJGJvZHkuY3NzKCdvdmVyZmxvdycsJycpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGVsbS50cmlnZ2VyKCQubW9kYWwuQkVGT1JFX09QRU4sIFt0aGlzLl9jdHgoKV0pO1xuICAgICAgaWYgKHRoaXMub3B0aW9ucy5zaG93Q2xvc2UpIHtcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9ICQoJzxhIGhyZWY9XCIjY2xvc2UtbW9kYWxcIiByZWw9XCJtb2RhbDpjbG9zZVwiIGNsYXNzPVwiY2xvc2UtbW9kYWwgJyArIHRoaXMub3B0aW9ucy5jbG9zZUNsYXNzICsgJ1wiPicgKyB0aGlzLm9wdGlvbnMuY2xvc2VUZXh0ICsgJzwvYT4nKTtcbiAgICAgICAgdGhpcy4kZWxtLmFwcGVuZCh0aGlzLmNsb3NlQnV0dG9uKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuJGVsbS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubW9kYWxDbGFzcykuYXBwZW5kVG8odGhpcy4kYmxvY2tlcik7XG4gICAgICBpZih0aGlzLm9wdGlvbnMuZG9GYWRlKSB7XG4gICAgICAgIHRoaXMuJGVsbS5jc3Moe1xuICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snXG4gICAgICAgIH0pLmFuaW1hdGUoe29wYWNpdHk6IDF9LCB0aGlzLm9wdGlvbnMuZmFkZUR1cmF0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJGVsbS5jc3MoJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XG4gICAgICB9XG4gICAgICB0aGlzLiRlbG0udHJpZ2dlcigkLm1vZGFsLk9QRU4sIFt0aGlzLl9jdHgoKV0pO1xuICAgIH0sXG5cbiAgICBoaWRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuJGVsbS50cmlnZ2VyKCQubW9kYWwuQkVGT1JFX0NMT1NFLCBbdGhpcy5fY3R4KCldKTtcbiAgICAgIGlmICh0aGlzLmNsb3NlQnV0dG9uKSB0aGlzLmNsb3NlQnV0dG9uLnJlbW92ZSgpO1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIGlmKHRoaXMub3B0aW9ucy5kb0ZhZGUpIHtcbiAgICAgICAgdGhpcy4kZWxtLmZhZGVPdXQodGhpcy5vcHRpb25zLmZhZGVEdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLiRlbG0udHJpZ2dlcigkLm1vZGFsLkFGVEVSX0NMT1NFLCBbX3RoaXMuX2N0eCgpXSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kZWxtLmhpZGUoMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIF90aGlzLiRlbG0udHJpZ2dlcigkLm1vZGFsLkFGVEVSX0NMT1NFLCBbX3RoaXMuX2N0eCgpXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy4kZWxtLnRyaWdnZXIoJC5tb2RhbC5DTE9TRSwgW3RoaXMuX2N0eCgpXSk7XG4gICAgfSxcblxuICAgIHNob3dTcGlubmVyOiBmdW5jdGlvbigpIHtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zLnNob3dTcGlubmVyKSByZXR1cm47XG4gICAgICB0aGlzLnNwaW5uZXIgPSB0aGlzLnNwaW5uZXIgfHwgJCgnPGRpdiBjbGFzcz1cIicgKyB0aGlzLm9wdGlvbnMubW9kYWxDbGFzcyArICctc3Bpbm5lclwiPjwvZGl2PicpXG4gICAgICAgIC5hcHBlbmQodGhpcy5vcHRpb25zLnNwaW5uZXJIdG1sKTtcbiAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKHRoaXMuc3Bpbm5lcik7XG4gICAgICB0aGlzLnNwaW5uZXIuc2hvdygpO1xuICAgIH0sXG5cbiAgICBoaWRlU3Bpbm5lcjogZnVuY3Rpb24oKSB7XG4gICAgICBpZiAodGhpcy5zcGlubmVyKSB0aGlzLnNwaW5uZXIucmVtb3ZlKCk7XG4gICAgfSxcblxuICAgIC8vUmV0dXJuIGNvbnRleHQgZm9yIGN1c3RvbSBldmVudHNcbiAgICBfY3R4OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7IGVsbTogdGhpcy4kZWxtLCAkYmxvY2tlcjogdGhpcy4kYmxvY2tlciwgb3B0aW9uczogdGhpcy5vcHRpb25zIH07XG4gICAgfVxuICB9O1xuXG4gICQubW9kYWwuY2xvc2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghJC5tb2RhbC5pc0FjdGl2ZSgpKSByZXR1cm47XG4gICAgaWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBjdXJyZW50ID0gZ2V0Q3VycmVudCgpO1xuICAgIGN1cnJlbnQuY2xvc2UoKTtcbiAgICByZXR1cm4gY3VycmVudC4kZWxtO1xuICB9O1xuXG4gIC8vIFJldHVybnMgaWYgdGhlcmUgY3VycmVudGx5IGlzIGFuIGFjdGl2ZSBtb2RhbFxuICAkLm1vZGFsLmlzQWN0aXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb2RhbHMubGVuZ3RoID4gMDtcbiAgfVxuXG4gICQubW9kYWwuZGVmYXVsdHMgPSB7XG4gICAgY2xvc2VFeGlzdGluZzogdHJ1ZSxcbiAgICBlc2NhcGVDbG9zZTogdHJ1ZSxcbiAgICBjbGlja0Nsb3NlOiB0cnVlLFxuICAgIGNsb3NlVGV4dDogJycsXG4gICAgY2xvc2VDbGFzczogJycsXG4gICAgbW9kYWxDbGFzczogXCJtb2RhbFwiLFxuICAgIHNwaW5uZXJIdG1sOiBudWxsLFxuICAgIHNob3dTcGlubmVyOiB0cnVlLFxuICAgIHNob3dDbG9zZTogdHJ1ZSxcbiAgICBmYWRlRHVyYXRpb246IDQwMCwgICAvLyBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoZSBmYWRlIGFuaW1hdGlvbiB0YWtlcy5cbiAgICBmYWRlRGVsYXk6IDAuNSAgICAgICAgLy8gUG9pbnQgZHVyaW5nIHRoZSBvdmVybGF5J3MgZmFkZS1pbiB0aGF0IHRoZSBtb2RhbCBiZWdpbnMgdG8gZmFkZSBpbiAoLjUgPSA1MCUsIDEuNSA9IDE1MCUsIGV0Yy4pXG4gIH07XG5cbiAgLy8gRXZlbnQgY29uc3RhbnRzXG4gICQubW9kYWwuQkVGT1JFX0JMT0NLID0gJ21vZGFsOmJlZm9yZS1ibG9jayc7XG4gICQubW9kYWwuQkxPQ0sgPSAnbW9kYWw6YmxvY2snO1xuICAkLm1vZGFsLkJFRk9SRV9PUEVOID0gJ21vZGFsOmJlZm9yZS1vcGVuJztcbiAgJC5tb2RhbC5PUEVOID0gJ21vZGFsOm9wZW4nO1xuICAkLm1vZGFsLkJFRk9SRV9DTE9TRSA9ICdtb2RhbDpiZWZvcmUtY2xvc2UnO1xuICAkLm1vZGFsLkNMT1NFID0gJ21vZGFsOmNsb3NlJztcbiAgJC5tb2RhbC5BRlRFUl9DTE9TRSA9ICdtb2RhbDphZnRlci1jbG9zZSc7XG4gICQubW9kYWwuQUpBWF9TRU5EID0gJ21vZGFsOmFqYXg6c2VuZCc7XG4gICQubW9kYWwuQUpBWF9TVUNDRVNTID0gJ21vZGFsOmFqYXg6c3VjY2Vzcyc7XG4gICQubW9kYWwuQUpBWF9GQUlMID0gJ21vZGFsOmFqYXg6ZmFpbCc7XG4gICQubW9kYWwuQUpBWF9DT01QTEVURSA9ICdtb2RhbDphamF4OmNvbXBsZXRlJztcblxuICAkLmZuLm1vZGFsID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAxKSB7XG4gICAgICBuZXcgJC5tb2RhbCh0aGlzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgLy8gQXV0b21hdGljYWxseSBiaW5kIGxpbmtzIHdpdGggcmVsPVwibW9kYWw6Y2xvc2VcIiB0bywgd2VsbCwgY2xvc2UgdGhlIG1vZGFsLlxuICAkKGRvY3VtZW50KS5vbignY2xpY2subW9kYWwnLCAnYVtyZWw9XCJtb2RhbDpjbG9zZVwiXScsICQubW9kYWwuY2xvc2UpO1xuICAkKGRvY3VtZW50KS5vbignY2xpY2subW9kYWwnLCAnYVtyZWw9XCJtb2RhbDpvcGVuXCJdJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICQodGhpcykubW9kYWwoKTtcbiAgfSk7XG59KShqUXVlcnkpOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vIHJldGluYS1pbWdcbi8gbGFyZ2VseSBiYXNlZCBvbiBpbmxpbmUtcmV0aW5hLmpzLCBidXQgc3BlY2lmaWNhbGx5IGFsdGVyZWQgZm9yIHdhZ3RhaWwgYmVoYXZpb3Jcbi8gaWYgdGhlIG1lZGlhIHF1ZXJ5IGluZGljYXRlcyBhIHJldGluYSBkaXNwbGF5LCBsb29rcyBmb3IgaW1nIHRhZ3Mgd2l0aCBjbGFzcz0ncmV0aW5hLWltZydcbi8gYW5kIHN3YXBzIHRoZSBpbWFnZSB3aXRoIGEgY29ycmVzcG9uZGluZyAyeCBpbWFnZSAodXNpbmcgdGhlIHN1ZmZpeCAnLTJ4JykgdGhhdCBleGlzdHMgaW5cbi8gdGhlIG9yaWdpbmFsX2ltYWdlcyBmb2xkZXIuIFRoaXMgYXNzdW1lcyBhIHN0YW5kYXJkIGRlcGxveW1lbnQgb2YgZGphbmdvL3dhZ3RhaWwuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbnZhciBxdWVyeT1cIigtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSksKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMS41KSwoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMy8yKSwobWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSwobWluLXJlc29sdXRpb246IDE0NGRwaSksKG1pbi1yZXNvbHV0aW9uOiAxLjVkcHB4KVwiLFxuICAgIGltZ1BhdGhSZWdleCA9IC8uK1xcLyguKilcXC4oanBnfGpwZWd8cG5nKS8sXG4gICAgcHJvY0ltZ05hbWVSZWdleCA9IC8oLiopKFxcLm1heC4rfFxcLm1pbi0uK3xcXC53aWR0aC4rfFxcLmhlaWdodC4rfFxcLmZpbGwuK3xcXC5vcmlnaW5hbCkvLFxuICAgIHJldGluYUltZ1BhdGggPSAnL21lZGlhL29yaWdpbmFsX2ltYWdlcy8nLFxuICAgIHJldGluYUltZ1N1ZmZpeCA9ICctMngnO1xuaWYod2luZG93LmRldmljZVBpeGVsUmF0aW8+MXx8d2luZG93Lm1hdGNoTWVkaWEmJndpbmRvdy5tYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzKVxuICAgIGZvcih2YXIgaW1hZ2VzPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyZXRpbmEtaW1nXCIpLGk9MDtpPGltYWdlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgdmFyIGltYWdlPWltYWdlc1tpXS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksXG4gICAgICAgICAgICBpbWFnZVdpZHRoPWltYWdlc1tpXS5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHVwZGF0ZUltYWdlO1xuICAgICAgICB2YXIgaW1nUGF0aENhcHR1cmVzID0gaW1nUGF0aFJlZ2V4LmV4ZWMoaW1hZ2UpO1xuICAgICAgICAvL2lmIGFuIGltZyBzcmMgcGF0aCBtYXRjaGVzLCB0aGlzIGltZyBpcyBlbGlnaWJsZSBmb3Igc3dhcHBpbmcgd2l0aCBhIHJldGluYSB2ZXJzaW9uXG4gICAgICAgIGlmKGltZ1BhdGhDYXB0dXJlcyAmJiBpbWdQYXRoQ2FwdHVyZXMubGVuZ3RoID49IDIpeyBcbiAgICAgICAgICAgIHZhciBpbWFnZU5hbWUgPSBpbWdQYXRoQ2FwdHVyZXNbMV0sIC8vdGhlIGZpbGVuYW1lXG4gICAgICAgICAgICAgICAgZXh0ID0gaW1nUGF0aENhcHR1cmVzWzJdOyAvL3RoZSBleHRlbnNpb25cbiAgICAgICAgICAgIHZhciBwcm9jSW1nTmFtZUNhcHR1cmVzID0gcHJvY0ltZ05hbWVSZWdleC5leGVjKGltYWdlTmFtZSk7XG4gICAgICAgICAgICAvL2lmIGltZ05hbWUgbWF0Y2hlcyBhIHByb2Nlc3NlZCBpbWFnZSBuYW1lIGNvbnZlbnRpb24sIGV4dHJhcG9sYXRlIHRoZSByb290IG5hbWVcbiAgICAgICAgICAgIGlmKHByb2NJbWdOYW1lQ2FwdHVyZXMgJiYgcHJvY0ltZ05hbWVDYXB0dXJlcy5sZW5ndGggPj0gMilcbiAgICAgICAgICAgICAgICBpbWFnZU5hbWUgPSBwcm9jSW1nTmFtZUNhcHR1cmVzWzFdO1xuICAgICAgICAgICAgLy91cGRhdGUgdGhlIGltYWdlIHNyYyB3aXRoIHRoZSBtYXRjaGluZyBpbWFnZSBuYW1lIGFuZCBhcHByb3ByaWF0ZSByZXRpbmEgaW1nIHN1ZmZpeCAoLTJ4KS5cbiAgICAgICAgICAgIC8vbG9vayBpbiB0aGUgb3JpZ2luYWxfaW1hZ2VzIGZvbGRlciBmb3IgaXQsICh0aGlzIGlzIHRoZSBiZWhhdmlvciwgc2luY2UgdGhlcmUncyBub3QgXG4gICAgICAgICAgICAvL2xpa2VseSB0byBiZSBhIGNvcnJlc3BvbmRpbmcgcmV0aW5hIGltYWdlIGluIHRoZSAocHJvY2Vzc2VkKSBpbWFnZXMgZm9sZGVyLilcbiAgICAgICAgICAgIHVwZGF0ZUltYWdlID0gcmV0aW5hSW1nUGF0aCArIGltYWdlTmFtZSArIHJldGluYUltZ1N1ZmZpeCArICcuJyArIGV4dDtcbiAgICAgICAgICAgIGltYWdlc1tpXS53aWR0aD1pbWFnZVdpZHRoO1xuICAgICAgICAgICAgaW1hZ2VzW2ldLnNyYz11cGRhdGVJbWFnZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9IiwiLy9cbi8vIFNsaWRlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbihmdW5jdGlvbih3aW5kb3csICQpIHtcbiAgJCgnLnNsaWRlcy1jb250YWluZXInKS5mbGV4c2xpZGVyKHtcbiAgICBhbmltYXRpb246ICdzbGlkZScsXG4gICAgc21vb3RoSGVpZ2h0OiB0cnVlLFxuICAgIGNvbnRyb2xzQ29udGFpbmVyOiAnLnNsaWRlcy1uYXYnXG4gIH0pO1xufSh3aW5kb3csIGpRdWVyeSB8fCAkKSk7IiwiLy9cbi8vIFRhYnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24od2luZG93LCAkKSB7XG4gIHZhciB0YWJzID0gJCgnLnRhYnMtY29udGFpbmVyJyk7XG5cbiAgdGFicy5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHRhYiA9ICQodGhpcyksXG4gICAgICB0YWJJdGVtcyA9IHRhYi5maW5kKCd1bC50YWJzLW5hdicpLFxuICAgICAgdGFiQ29udGVudFdyYXBwZXIgPSB0YWIuY2hpbGRyZW4oJ3VsLnRhYnMtY29udGVudCcpLFxuICAgICAgdGFiTmF2aWdhdGlvbiA9IHRhYi5maW5kKCduYXYnKTtcblxuICAgIHRhYkl0ZW1zLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBzZWxlY3RlZEl0ZW0gPSAkKHRoaXMpO1xuICAgICAgaWYoICFzZWxlY3RlZEl0ZW0uaGFzQ2xhc3MoJ3NlbGVjdGVkJykgKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZFRhYiA9IHNlbGVjdGVkSXRlbS5kYXRhKCdjb250ZW50JyksXG4gICAgICAgICAgc2VsZWN0ZWRDb250ZW50ID0gdGFiQ29udGVudFdyYXBwZXIuZmluZCgnbGlbZGF0YS1jb250ZW50PVwiJytzZWxlY3RlZFRhYisnXCJdJyksXG4gICAgICAgICAgc2xlY3RlZENvbnRlbnRIZWlnaHQgPSBzZWxlY3RlZENvbnRlbnQuaW5uZXJIZWlnaHQoKTtcblxuICAgICAgICB0YWJJdGVtcy5maW5kKCdhLnNlbGVjdGVkJykucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG4gICAgICAgIHNlbGVjdGVkSXRlbS5hZGRDbGFzcygnc2VsZWN0ZWQnKTtcbiAgICAgICAgc2VsZWN0ZWRDb250ZW50LmFkZENsYXNzKCdzZWxlY3RlZCcpLnNpYmxpbmdzKCdsaScpLnJlbW92ZUNsYXNzKCdzZWxlY3RlZCcpO1xuICAgICAgICAvLyBhbmltYXRlIHRhYkNvbnRlbnRXcmFwcGVyIGhlaWdodCB3aGVuIGNvbnRlbnQgY2hhbmdlc1xuICAgICAgICB0YWJDb250ZW50V3JhcHBlci5hbmltYXRlKHtcbiAgICAgICAgICAnaGVpZ2h0Jzogc2xlY3RlZENvbnRlbnRIZWlnaHRcbiAgICAgICAgfSwgMjAwKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIGhpZGUgdGhlIC50YWJzLWNvbnRhaW5lcjo6YWZ0ZXIgZWxlbWVudCB3aGVuIHRhYmJlZCBuYXZpZ2F0aW9uIGhhcyBzY3JvbGxlZCB0byB0aGUgZW5kIChtb2JpbGUgdmVyc2lvbilcbiAgICBjaGVja1Njcm9sbGluZyh0YWJOYXZpZ2F0aW9uKTtcbiAgICB0YWJOYXZpZ2F0aW9uLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgICAgY2hlY2tTY3JvbGxpbmcoJCh0aGlzKSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcbiAgICB0YWJzLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0YWIgPSAkKHRoaXMpO1xuICAgICAgY2hlY2tTY3JvbGxpbmcodGFiLmZpbmQoJ25hdicpKTtcbiAgICAgIHRhYi5maW5kKCcudGFicy1jb250ZW50JykuY3NzKCdoZWlnaHQnLCAnYXV0bycpO1xuICAgIH0pO1xuICB9KTtcblxuICBmdW5jdGlvbiBjaGVja1Njcm9sbGluZyh0YWJzKXtcbiAgICB2YXIgdG90YWxUYWJXaWR0aCA9IHBhcnNlSW50KHRhYnMuY2hpbGRyZW4oJy50YWJzLW5hdicpLndpZHRoKCkpLFxuICAgICAgdGFic1ZpZXdwb3J0ID0gcGFyc2VJbnQodGFicy53aWR0aCgpKTtcbiAgICBpZiggdGFicy5zY3JvbGxMZWZ0KCkgPj0gdG90YWxUYWJXaWR0aCAtIHRhYnNWaWV3cG9ydCkge1xuICAgICAgdGFicy5wYXJlbnQoJy50YWJzLWNvbnRhaW5lcicpLmFkZENsYXNzKCdpcy1lbmRlZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzLnBhcmVudCgnLnRhYnMtY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ2lzLWVuZGVkJyk7XG4gICAgfVxuICB9XG59KHdpbmRvdywgalF1ZXJ5IHx8ICQpKTsiLCIvL1xuLy8gV09XXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uKHdpbmRvdywgJCkge1xuICB2YXIgd293ID0gbmV3IFdPVyhcbiAgICB7XG4gICAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIC8vIGFuaW1hdGVkIGVsZW1lbnQgY3NzIGNsYXNzIChkZWZhdWx0IGlzIHdvdylcbiAgICAgIGFuaW1hdGVDbGFzczogJ2FuaW1hdGVkJywgLy8gYW5pbWF0aW9uIGNzcyBjbGFzcyAoZGVmYXVsdCBpcyBhbmltYXRlZClcbiAgICAgIG9mZnNldDogICAgICAgMTAwLCAgICAgICAgLy8gZGlzdGFuY2UgdG8gdGhlIGVsZW1lbnQgd2hlbiB0cmlnZ2VyaW5nIHRoZSBhbmltYXRpb24gKGRlZmF1bHQgaXMgMClcbiAgICAgIG1vYmlsZTogICAgICAgdHJ1ZSwgICAgICAgLy8gdHJpZ2dlciBhbmltYXRpb25zIG9uIG1vYmlsZSBkZXZpY2VzIChkZWZhdWx0IGlzIHRydWUpXG4gICAgICBsaXZlOiAgICAgICAgIHRydWUsICAgICAgIC8vIGFjdCBvbiBhc3luY2hyb25vdXNseSBsb2FkZWQgY29udGVudCAoZGVmYXVsdCBpcyB0cnVlKVxuICAgICAgY2FsbGJhY2s6ICAgICBmdW5jdGlvbihib3gpIHtcbiAgICAgICAgLy8gdGhlIGNhbGxiYWNrIGlzIGZpcmVkIGV2ZXJ5IHRpbWUgYW4gYW5pbWF0aW9uIGlzIHN0YXJ0ZWRcbiAgICAgICAgLy8gdGhlIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIGluIGlzIHRoZSBET00gbm9kZSBiZWluZyBhbmltYXRlZFxuICAgICAgICAkKGJveCkuZmluZCgndmlkZW8nKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XG4gICAgICAgICAgZWxlbWVudC5wbGF5KCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgd293LmluaXQoKTtcbn0od2luZG93LCBqUXVlcnkgfHwgJCkpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
