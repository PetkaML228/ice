var $jscomp = $jscomp || {}
$jscomp.scope = {}
$jscomp.ASSUME_ES5 = false
$jscomp.ASSUME_NO_NATIVE_MAP = false
$jscomp.ASSUME_NO_NATIVE_SET = false
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (o, t, e) {
        o != Array.prototype && o != Object.prototype && (o[t] = e.value)
      }
$jscomp.getGlobal = function (o) {
  return 'undefined' != typeof window && window === o
    ? o
    : 'undefined' != typeof global && null != global
    ? global
    : o
}
$jscomp.global = $jscomp.getGlobal(this)
$jscomp.SYMBOL_PREFIX = 'jscomp_symbol_'
$jscomp.initSymbol = function () {
  $jscomp.initSymbol = function () {}
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
}
$jscomp.symbolCounter_ = 0
$jscomp.Symbol = function (o) {
  return $jscomp.SYMBOL_PREFIX + (o || '') + $jscomp.symbolCounter_++
}
$jscomp.initSymbolIterator = function () {
  $jscomp.initSymbol()
  var o = $jscomp.global.Symbol.iterator
  o || (o = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol('iterator'))
  'function' != typeof Array.prototype[o] &&
    $jscomp.defineProperty(Array.prototype, o, {
      configurable: true,
      writable: true,
      value: function () {
        return $jscomp.arrayIterator(this)
      },
    })
  $jscomp.initSymbolIterator = function () {}
}
$jscomp.arrayIterator = function (o) {
  var t = 0
  return $jscomp.iteratorPrototype(function () {
    return t < o.length
      ? {
          done: false,
          value: o[t++],
        }
      : { done: true }
  })
}
$jscomp.iteratorPrototype = function (o) {
  return (
    $jscomp.initSymbolIterator(),
    ((o = { next: o })[$jscomp.global.Symbol.iterator] = function () {
      return this
    }),
    o
  )
}
;(function (o) {
  function t(C) {
    if (e[C]) {
      return e[C].exports
    }
    var n = (e[C] = {
      i: C,
      l: false,
      exports: {},
    })
    return o[C].call(n.exports, n, n.exports, t), (n.l = true), n.exports
  }
  var e = {}
  t.m = o
  t.c = e
  t.d = function (o, e, C) {
    t.o(o, e) ||
      Object.defineProperty(o, e, {
        enumerable: true,
        get: C,
      })
  }
  t.r = function (o) {
    $jscomp.initSymbol()
    $jscomp.initSymbol()
    'undefined' != typeof Symbol &&
      Symbol.toStringTag &&
      ($jscomp.initSymbol(),
      Object.defineProperty(o, Symbol.toStringTag, { value: 'Module' }))
    Object.defineProperty(o, '__esModule', { value: true })
  }
  t.t = function (o, e) {
    if (
      (1 & e && (o = t(o)),
      8 & e || (4 & e && 'object' == typeof o && o && o.__esModule))
    ) {
      return o
    }
    var C = Object.create(null)
    if (
      (t.r(C),
      Object.defineProperty(C, 'default', {
        enumerable: true,
        value: o,
      }),
      2 & e && 'string' != typeof o)
    ) {
      for (var n in o)
        t.d(
          C,
          n,
          function (t) {
            return o[t]
          }.bind(null, n)
        )
    }
    return C
  }
  t.n = function (o) {
    var e =
      o && o.__esModule
        ? function () {
            return o.default
          }
        : function () {
            return o
          }
    return t.d(e, 'a', e), e
  }
  t.o = function (o, t) {
    return Object.prototype.hasOwnProperty.call(o, t)
  }
  t.p = ''
  t((t.s = 72))
})({
  72: function (o, t) {
    console.log(
      atob(
        'CiAvJCQkJCQkICAgICAgICAgICAgICAgICAgICAgLyQkICAgLyQkICAgICAgICAgICAgICAgICAgICAgLyQkICAgICAgICAgICAgICAgIAp8XyAgJCRfLyAgICAgICAgICAgICAgICAgICAgfCAkJCAgfCAkJCAgICAgICAgICAgICAgICAgICAgfCAkJCAgICAgICAgICAgICAgICAKICB8ICQkICAgIC8kJCQkJCQkICAvJCQkJCQkIHwgJCQgIHwgJCQgIC8kJCQkJCQgICAvJCQkJCQkJHwgJCQgICAvJCQgIC8kJCQkJCQkCiAgfCAkJCAgIC8kJF9fX19fLyAvJCRfXyAgJCR8ICQkJCQkJCQkIHxfX19fICAkJCAvJCRfX19fXy98ICQkICAvJCQvIC8kJF9fX19fLwogIHwgJCQgIHwgJCQgICAgICB8ICQkJCQkJCQkfCAkJF9fICAkJCAgLyQkJCQkJCR8ICQkICAgICAgfCAkJCQkJCQvIHwgICQkJCQkJCAKICB8ICQkICB8ICQkICAgICAgfCAkJF9fX19fL3wgJCQgIHwgJCQgLyQkX18gICQkfCAkJCAgICAgIHwgJCRfICAkJCAgXF9fX18gICQkCiAvJCQkJCQkfCAgJCQkJCQkJHwgICQkJCQkJCR8ICQkICB8ICQkfCAgJCQkJCQkJHwgICQkJCQkJCR8ICQkIFwgICQkIC8kJCQkJCQkLwp8X19fX19fLyBcX19fX19fXy8gXF9fX19fX18vfF9fLyAgfF9fLyBcX19fX19fXy8gXF9fX19fX18vfF9fLyAgXF9fL3xfX19fX19fLyAK'
      )
    )
    document.addEventListener('DOMContentLoaded', function () {
      document
        .getElementsByTagName('head')[0]
        .insertAdjacentHTML(
          'beforeend',
          '<link rel="stylesheet" href="' +
            chrome.runtime.getURL('/file/team.css') +
            '" />'
        )
    })
  },
})
