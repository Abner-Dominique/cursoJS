(()=>{"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,o(n.key),n)}}function e(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(r){var e=function(r,e){if("object"!=t(r)||!r)return r;var o=r[Symbol.toPrimitive];if(void 0!==o){var n=o.call(r,"string");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(r)}(r);return"symbol"==t(e)?e:String(e)}var n=new(e((function t(r,e){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),this.nome=r,this.sobrenome=e})))("Abner","Dominique");console.log(n)})();
//# sourceMappingURL=bundle.js.map