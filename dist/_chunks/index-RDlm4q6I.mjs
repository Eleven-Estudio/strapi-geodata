import { useRef, useEffect, forwardRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
const __variableDynamicImportRuntimeHelper = (glob, path, segs) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(
      reject.bind(
        null,
        new Error(
          "Unknown variable dynamic import: " + path + (path.split("/").length !== segs ? ". Note that variables only represent file names one level deep." : "")
        )
      )
    );
  });
};
const PLUGIN_ID = "geodata";
const getTranslation = (id) => `${PLUGIN_ID}.${id}`;
const Initializer = ({ setPlugin }) => {
  const ref = useRef(setPlugin);
  useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);
  return null;
};
const PluginIcon = (props, ref) => /* @__PURE__ */ jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    width: "1.6rem",
    height: "1.6rem",
    fill: "currentColor",
    ref,
    ...props,
    children: /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsxs("g", { id: "Layer_1", children: [
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M11.46,31.2c-2.76-.06-5.57.19-8.33.04-.07-.96.98-1.96,1.38-2.89.11-.16.39-.11.66-.11,7.13-.13,14.31.26,21.45.08l.07-.13c-.36-.8-1.31-2.14-1.55-2.77-.42-1.11.56-.7,2.06-.87.03,0,.21.1.53-.07.62.9,3.17,4.69,3.36,5.14.42,1.01-.58,1.55-1.46,1.67-.99.13-7.29-.25-8.98,0",
            fill: "#70c2eb"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M22.59,3.84s-.04-.04-.06-.06c-.8.4-1.92-.96-3.71-1.25-6.2-.99-10.84,4.45-9.67,10.03.06.27.63,1.77.8,2.17.36.89,1.31,1.85.23,1.85-1.09-2.14-2.78-4.93-2.77-7.31.03-4.3,3.45-8.11,7.75-8.54,2.74-.28,5.6.96,7.37,3.06.02.02.04.04.06.06Z",
            fill: "#f9b4b0"
          }
        ),
        /* @__PURE__ */ jsxs("g", { children: [
          /* @__PURE__ */ jsx(
            "path",
            {
              d: "M22.59,3.84c1.54,1.85,2.37,4.83,1.78,7.17-.46,1.84-6.65,13.43-7.5,14.41-.6.69-1.08.73-1.69.06-.62-.68-4.25-7.44-5-8.89,1.08,0,.13-.95-.23-1.85-.16-.4-.74-1.9-.8-2.17-1.18-5.58,3.46-11.02,9.67-10.03,1.8.29,2.92,1.64,3.71,1.25.02.02.04.04.06.06Z",
              fill: "#f47e77"
            }
          ),
          /* @__PURE__ */ jsxs("g", { children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M15.74,4.89c5.54-.33,6.04,8.08.5,8.41-5.54.33-6.03-8.08-.5-8.41Z",
                fill: "#fff"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                d: "M15.93,13.48c-1.5,0-2.73-.64-3.51-1.82-.89-1.35-1-3.24-.27-4.69.68-1.35,1.95-2.15,3.59-2.24h0c1.33-.08,2.48.33,3.32,1.18.74.75,1.19,1.79,1.26,2.94.07,1.14-.25,2.23-.9,3.06-.73.94-1.83,1.48-3.16,1.56-.11,0-.21,0-.32,0ZM15.74,4.89v.16c-1.5.09-2.68.82-3.3,2.06-.68,1.35-.57,3.1.26,4.36.76,1.16,2.02,1.75,3.53,1.66,1.92-.11,3.92-1.5,3.75-4.27-.16-2.78-2.31-3.92-4.23-3.81v-.16Z",
                fill: "#3a6078"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M28.82,31.48c-.65,0-1.56-.02-2.55-.05-2.06-.05-4.62-.12-5.58.02-.06,0-.12.01-.17.01-.04,0-.08,0-.12,0-.09.01-.17-.05-.18-.14-.01-.09.05-.17.14-.18.05,0,.1,0,.15-.01.05,0,.09,0,.14-.01.99-.14,3.46-.08,5.64-.02,1.51.04,2.94.08,3.34.02.48-.06,1.08-.28,1.32-.68.13-.22.13-.47.01-.75-.17-.42-2.62-4.06-3.34-5.11-.13-.19-.26-.41-.4-.64-.44-.72-.98-1.62-1.6-1.8-.25-.07-1.46-.05-2.53-.03-.94.02-1.84.04-2.29,0-.09,0-.16-.09-.15-.18,0-.09.09-.16.18-.15.44.03,1.36.01,2.26,0,1.45-.03,2.35-.04,2.63.04.74.22,1.29,1.14,1.78,1.95.14.23.27.44.39.62.37.54,3.17,4.66,3.38,5.17.16.38.14.74-.03,1.05-.25.43-.83.75-1.56.85-.16.02-.46.03-.84.03Z",
            fill: "#355d76"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M5.1,31.45c-.66,0-1.32-.01-1.97-.05-.06,0-.12,0-.19,0-.68-.03-1.71-.08-2.12-.66-.19-.27-.23-.61-.11-1.02.08-.29,1.65-2.71,2.32-3.74.88-1.35,2.26-3.44,2.45-3.64.66-.69,2.23-.62,3.61-.56.65.03,1.27.06,1.7,0,.09-.01.17.05.19.14.01.09-.05.17-.14.19-.46.06-1.09.03-1.76,0-1.31-.06-2.8-.13-3.35.46-.37.39-4.58,6.89-4.7,7.25-.09.31-.07.56.06.74.32.45,1.29.49,1.87.52.07,0,.13,0,.2,0,1.55.08,3.14.04,4.68,0,1.19-.03,2.43-.07,3.63-.04h.13c.09-.02.17.05.18.14,0,.09-.06.17-.15.18h-.14s-.01.01-.02.01c-1.2-.03-2.43,0-3.62.04-.9.02-1.82.05-2.74.05Z",
            fill: "#355d76"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M16,26.12c-.31,0-.61-.17-.95-.53-.66-.72-4.4-7.71-5.02-8.93-.16-.31-.33-.63-.5-.96-1.07-2.04-2.29-4.34-2.28-6.43.01-2.13.84-4.2,2.32-5.83,1.48-1.64,3.47-2.66,5.58-2.88,2.73-.28,5.68.95,7.51,3.11,0,0,0,0,.01.01.02.01.03.03.04.05.77.93,1.38,2.16,1.72,3.46.35,1.36.38,2.7.1,3.85-.45,1.81-6.61,13.41-7.54,14.48-.35.4-.66.59-.98.59,0,0,0,0-.01,0ZM15.17.89h0c-2.03.21-3.94,1.19-5.37,2.77-1.43,1.58-2.22,3.57-2.23,5.61-.01,2,1.19,4.27,2.24,6.27.18.34.35.66.51.97.77,1.5,4.37,8.2,4.97,8.86.26.29.49.43.7.43,0,0,0,0,0,0,.22,0,.46-.16.74-.48.88-1.01,7.04-12.63,7.47-14.34.55-2.19-.19-5.15-1.75-7.02,0,0,0,0-.01-.01-.02-.01-.03-.03-.04-.04-1.77-2.09-4.61-3.26-7.23-3Z",
            fill: "#396078"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M25.32,25.35c.42.96,1.1,1.8,1.54,2.76.05.11-.03.21-.08.29-7.12.45-14.44-.21-21.61.01-.14,0-.23-.16-.16-.27.09-.14,1.67-2.93,1.73-2.97.07-.1.07-.1.16-.09.08.02.16.07.18.12,0,.18-1.64,2.89-1.75,3.12,0,0-.16-.27-.16-.27,7.16-.13,14.31.26,21.45.08l-.15.09.07-.13s0,.17,0,.17c-.22-.47-.5-.92-.77-1.36-.28-.47-.57-.9-.78-1.42-.04-.11-.12-.3-.1-.4.02-.05.11-.09.19-.09.09,0,.09,0,.15.11.03.07.07.17.1.25h0Z",
            fill: "#366079"
          }
        )
      ] })
    ] }) })
  }
);
const ForwardRef = forwardRef(PluginIcon);
var map;
try {
  map = Map;
} catch (_) {
}
var set;
try {
  set = Set;
} catch (_) {
}
function baseClone(src, circulars, clones) {
  if (!src || typeof src !== "object" || typeof src === "function") {
    return src;
  }
  if (src.nodeType && "cloneNode" in src) {
    return src.cloneNode(true);
  }
  if (src instanceof Date) {
    return new Date(src.getTime());
  }
  if (src instanceof RegExp) {
    return new RegExp(src);
  }
  if (Array.isArray(src)) {
    return src.map(clone);
  }
  if (map && src instanceof map) {
    return new Map(Array.from(src.entries()));
  }
  if (set && src instanceof set) {
    return new Set(Array.from(src.values()));
  }
  if (src instanceof Object) {
    circulars.push(src);
    var obj = Object.create(src);
    clones.push(obj);
    for (var key in src) {
      var idx = circulars.findIndex(function(i) {
        return i === src[key];
      });
      obj[key] = idx > -1 ? clones[idx] : baseClone(src[key], circulars, clones);
    }
    return obj;
  }
  return src;
}
function clone(src) {
  return baseClone(src, [], []);
}
const toString$2 = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString$1 = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val) return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false) return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number") return printNumber(val);
  if (typeOf === "string") return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function") return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol") return symbolToString$1.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString$2.call(val).slice(8, -1);
  if (tag === "Date") return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error) return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp") return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null) return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null) return result2;
    return value2;
  }, 2);
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    let isCast = originalValue != null && originalValue !== value;
    let msg = `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + (isCast ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".");
    if (value === null) {
      msg += `
 If "null" is intended as an empty value be sure to mark the schema as \`.nullable()\``;
    }
    return msg;
  },
  defined: "${path} must be defined"
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must be have ${length} items"
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean
});
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var objectProto$c = Object.prototype;
var hasOwnProperty$9 = objectProto$c.hasOwnProperty;
function baseHas$1(object2, key) {
  return object2 != null && hasOwnProperty$9.call(object2, key);
}
var _baseHas = baseHas$1;
var isArray$8 = Array.isArray;
var isArray_1 = isArray$8;
var freeGlobal$1 = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var _freeGlobal = freeGlobal$1;
var freeGlobal = _freeGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root$8 = freeGlobal || freeSelf || Function("return this")();
var _root = root$8;
var root$7 = _root;
var Symbol$5 = root$7.Symbol;
var _Symbol = Symbol$5;
var Symbol$4 = _Symbol;
var objectProto$b = Object.prototype;
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
var nativeObjectToString$1 = objectProto$b.toString;
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : void 0;
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1), tag = value[symToStringTag$1];
  try {
    value[symToStringTag$1] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}
var _getRawTag = getRawTag$1;
var objectProto$a = Object.prototype;
var nativeObjectToString = objectProto$a.toString;
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}
var _objectToString = objectToString$1;
var Symbol$3 = _Symbol, getRawTag = _getRawTag, objectToString = _objectToString;
var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : void 0;
function baseGetTag$5(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
var _baseGetTag = baseGetTag$5;
function isObjectLike$5(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_1 = isObjectLike$5;
var baseGetTag$4 = _baseGetTag, isObjectLike$4 = isObjectLike_1;
var symbolTag$1 = "[object Symbol]";
function isSymbol$3(value) {
  return typeof value == "symbol" || isObjectLike$4(value) && baseGetTag$4(value) == symbolTag$1;
}
var isSymbol_1 = isSymbol$3;
var isArray$7 = isArray_1, isSymbol$2 = isSymbol_1;
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
function isKey$3(value, object2) {
  if (isArray$7(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol$2(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
}
var _isKey = isKey$3;
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_1 = isObject$3;
var baseGetTag$3 = _baseGetTag, isObject$2 = isObject_1;
var asyncTag = "[object AsyncFunction]", funcTag$1 = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
function isFunction$2(value) {
  if (!isObject$2(value)) {
    return false;
  }
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_1 = isFunction$2;
var root$6 = _root;
var coreJsData$1 = root$6["__core-js_shared__"];
var _coreJsData = coreJsData$1;
var coreJsData = _coreJsData;
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked$1(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var _isMasked = isMasked$1;
var funcProto$1 = Function.prototype;
var funcToString$1 = funcProto$1.toString;
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var _toSource = toSource$2;
var isFunction$1 = isFunction_1, isMasked = _isMasked, isObject$1 = isObject_1, toSource$1 = _toSource;
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto = Function.prototype, objectProto$9 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative$1(value) {
  if (!isObject$1(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(object2, key) {
  return object2 == null ? void 0 : object2[key];
}
var _getValue = getValue$1;
var baseIsNative = _baseIsNative, getValue = _getValue;
function getNative$7(object2, key) {
  var value = getValue(object2, key);
  return baseIsNative(value) ? value : void 0;
}
var _getNative = getNative$7;
var getNative$6 = _getNative;
var nativeCreate$4 = getNative$6(Object, "create");
var _nativeCreate = nativeCreate$4;
var nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}
var _hashClear = hashClear$1;
function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var _hashDelete = hashDelete$1;
var nativeCreate$2 = _nativeCreate;
var HASH_UNDEFINED$2 = "__lodash_hash_undefined__";
var objectProto$8 = Object.prototype;
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? void 0 : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : void 0;
}
var _hashGet = hashGet$1;
var nativeCreate$1 = _nativeCreate;
var objectProto$7 = Object.prototype;
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? data[key] !== void 0 : hasOwnProperty$5.call(data, key);
}
var _hashHas = hashHas$1;
var nativeCreate = _nativeCreate;
var HASH_UNDEFINED$1 = "__lodash_hash_undefined__";
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED$1 : value;
  return this;
}
var _hashSet = hashSet$1;
var hashClear = _hashClear, hashDelete = _hashDelete, hashGet = _hashGet, hashHas = _hashHas, hashSet = _hashSet;
function Hash$1(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype["delete"] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1;
function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}
var _listCacheClear = listCacheClear$1;
function eq$2(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_1 = eq$2;
var eq$1 = eq_1;
function assocIndexOf$4(array2, key) {
  var length = array2.length;
  while (length--) {
    if (eq$1(array2[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var _assocIndexOf = assocIndexOf$4;
var assocIndexOf$3 = _assocIndexOf;
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete$1(key) {
  var data = this.__data__, index2 = assocIndexOf$3(data, key);
  if (index2 < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index2 == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index2, 1);
  }
  --this.size;
  return true;
}
var _listCacheDelete = listCacheDelete$1;
var assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(key) {
  var data = this.__data__, index2 = assocIndexOf$2(data, key);
  return index2 < 0 ? void 0 : data[index2][1];
}
var _listCacheGet = listCacheGet$1;
var assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}
var _listCacheHas = listCacheHas$1;
var assocIndexOf = _assocIndexOf;
function listCacheSet$1(key, value) {
  var data = this.__data__, index2 = assocIndexOf(data, key);
  if (index2 < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index2][1] = value;
  }
  return this;
}
var _listCacheSet = listCacheSet$1;
var listCacheClear = _listCacheClear, listCacheDelete = _listCacheDelete, listCacheGet = _listCacheGet, listCacheHas = _listCacheHas, listCacheSet = _listCacheSet;
function ListCache$4(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype["delete"] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4;
var getNative$5 = _getNative, root$5 = _root;
var Map$4 = getNative$5(root$5, "Map");
var _Map = Map$4;
var Hash = _Hash, ListCache$3 = _ListCache, Map$3 = _Map;
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash(),
    "map": new (Map$3 || ListCache$3)(),
    "string": new Hash()
  };
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var _isKeyable = isKeyable$1;
var isKeyable = _isKeyable;
function getMapData$4(map2, key) {
  var data = map2.__data__;
  return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var _getMapData = getMapData$4;
var getMapData$3 = _getMapData;
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var _mapCacheDelete = mapCacheDelete$1;
var getMapData$2 = _getMapData;
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}
var _mapCacheGet = mapCacheGet$1;
var getMapData$1 = _getMapData;
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}
var _mapCacheHas = mapCacheHas$1;
var getMapData = _getMapData;
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var _mapCacheSet = mapCacheSet$1;
var mapCacheClear = _mapCacheClear, mapCacheDelete = _mapCacheDelete, mapCacheGet = _mapCacheGet, mapCacheHas = _mapCacheHas, mapCacheSet = _mapCacheSet;
function MapCache$3(entries) {
  var index2 = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index2 < length) {
    var entry = entries[index2];
    this.set(entry[0], entry[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype["delete"] = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3;
var MapCache$2 = _MapCache;
var FUNC_ERROR_TEXT = "Expected a function";
function memoize$1(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize$1.Cache || MapCache$2)();
  return memoized;
}
memoize$1.Cache = MapCache$2;
var memoize_1 = memoize$1;
var memoize = memoize_1;
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var _memoizeCapped = memoizeCapped$1;
var memoizeCapped = _memoizeCapped;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath$1 = memoizeCapped(function(string2) {
  var result = [];
  if (string2.charCodeAt(0) === 46) {
    result.push("");
  }
  string2.replace(rePropName, function(match, number2, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match);
  });
  return result;
});
var _stringToPath = stringToPath$1;
function arrayMap$1(array2, iteratee) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
  while (++index2 < length) {
    result[index2] = iteratee(array2[index2], index2, array2);
  }
  return result;
}
var _arrayMap = arrayMap$1;
var Symbol$2 = _Symbol, arrayMap = _arrayMap, isArray$6 = isArray_1, isSymbol$1 = isSymbol_1;
var INFINITY$1 = 1 / 0;
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : void 0, symbolToString = symbolProto$1 ? symbolProto$1.toString : void 0;
function baseToString$1(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray$6(value)) {
    return arrayMap(value, baseToString$1) + "";
  }
  if (isSymbol$1(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY$1 ? "-0" : result;
}
var _baseToString = baseToString$1;
var baseToString = _baseToString;
function toString$1(value) {
  return value == null ? "" : baseToString(value);
}
var toString_1 = toString$1;
var isArray$5 = isArray_1, isKey$2 = _isKey, stringToPath = _stringToPath, toString = toString_1;
function castPath$2(value, object2) {
  if (isArray$5(value)) {
    return value;
  }
  return isKey$2(value, object2) ? [value] : stringToPath(toString(value));
}
var _castPath = castPath$2;
var baseGetTag$2 = _baseGetTag, isObjectLike$3 = isObjectLike_1;
var argsTag$2 = "[object Arguments]";
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1;
var baseIsArguments = _baseIsArguments, isObjectLike$2 = isObjectLike_1;
var objectProto$6 = Object.prototype;
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
var isArguments$2 = baseIsArguments(/* @__PURE__ */ function() {
  return arguments;
}()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$4.call(value, "callee") && !propertyIsEnumerable$1.call(value, "callee");
};
var isArguments_1 = isArguments$2;
var MAX_SAFE_INTEGER$1 = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$2(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var _isIndex = isIndex$2;
var MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(value) {
  return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3;
var isSymbol = isSymbol_1;
var INFINITY = 1 / 0;
function toKey$4(value) {
  if (typeof value == "string" || isSymbol(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var _toKey = toKey$4;
var castPath$1 = _castPath, isArguments$1 = isArguments_1, isArray$4 = isArray_1, isIndex$1 = _isIndex, isLength$2 = isLength_1, toKey$3 = _toKey;
function hasPath$2(object2, path, hasFunc) {
  path = castPath$1(path, object2);
  var index2 = -1, length = path.length, result = false;
  while (++index2 < length) {
    var key = toKey$3(path[index2]);
    if (!(result = object2 != null && hasFunc(object2, key))) {
      break;
    }
    object2 = object2[key];
  }
  if (result || ++index2 != length) {
    return result;
  }
  length = object2 == null ? 0 : object2.length;
  return !!length && isLength$2(length) && isIndex$1(key, length) && (isArray$4(object2) || isArguments$1(object2));
}
var _hasPath = hasPath$2;
var baseHas = _baseHas, hasPath$1 = _hasPath;
function has(object2, path) {
  return object2 != null && hasPath$1(object2, path, baseHas);
}
var has_1 = has;
const has$1 = /* @__PURE__ */ getDefaultExportFromCjs(has_1);
const isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  constructor(refs, options) {
    this.refs = refs;
    this.refs = refs;
    if (typeof options === "function") {
      this.fn = options;
      return;
    }
    if (!has$1(options, "is")) throw new TypeError("`is:` is required for `when()` conditions");
    if (!options.then && !options.otherwise) throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = options;
    let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
    this.fn = function(...args) {
      let options2 = args.pop();
      let schema = args.pop();
      let branch = check(...args) ? then : otherwise;
      if (!branch) return void 0;
      if (typeof branch === "function") return branch(schema);
      return schema.concat(branch.resolve(options2));
    };
  }
  resolve(base, options) {
    let values = this.refs.map((ref) => ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context));
    let schema = this.fn.apply(base, values.concat(base, options));
    if (schema === void 0 || schema === base) return base;
    if (!isSchema(schema)) throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  }
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
function _extends$2() {
  _extends$2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
let strReg = /\$\{\s*(\w+)\s*\}/g;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || "this";
    if (path !== params.path) params = _extends$2({}, params, {
      path
    });
    if (typeof message === "string") return message.replace(strReg, (_, key) => printValue(params[key]));
    if (typeof message === "function") return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field, type) {
    super();
    this.name = "ValidationError";
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        this.inner = this.inner.concat(err.inner.length ? err.inner : err);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (Error.captureStackTrace) Error.captureStackTrace(this, ValidationError);
  }
}
const once = (cb) => {
  let fired = false;
  return (...args) => {
    if (fired) return;
    fired = true;
    cb(...args);
  };
};
function runTests(options, cb) {
  let {
    endEarly,
    tests,
    args,
    value,
    errors,
    sort,
    path
  } = options;
  let callback = once(cb);
  let count = tests.length;
  const nestedErrors = [];
  errors = errors ? errors : [];
  if (!count) return errors.length ? callback(new ValidationError(errors, value, path)) : callback(null, value);
  for (let i = 0; i < tests.length; i++) {
    const test = tests[i];
    test(args, function finishTestRun(err) {
      if (err) {
        if (!ValidationError.isError(err)) {
          return callback(err, value);
        }
        if (endEarly) {
          err.value = value;
          return callback(err, value);
        }
        nestedErrors.push(err);
      }
      if (--count <= 0) {
        if (nestedErrors.length) {
          if (sort) nestedErrors.sort(sort);
          if (errors.length) nestedErrors.push(...errors);
          errors = nestedErrors;
        }
        if (errors.length) {
          callback(new ValidationError(errors, value, path), value);
          return;
        }
        callback(null, value);
      }
    });
  }
}
var getNative$4 = _getNative;
var defineProperty$1 = function() {
  try {
    var func = getNative$4(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var _defineProperty = defineProperty$1;
var defineProperty = _defineProperty;
function baseAssignValue$1(object2, key, value) {
  if (key == "__proto__" && defineProperty) {
    defineProperty(object2, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object2[key] = value;
  }
}
var _baseAssignValue = baseAssignValue$1;
function createBaseFor$1(fromRight) {
  return function(object2, iteratee, keysFunc) {
    var index2 = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
    while (length--) {
      var key = props[fromRight ? length : ++index2];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object2;
  };
}
var _createBaseFor = createBaseFor$1;
var createBaseFor = _createBaseFor;
var baseFor$1 = createBaseFor();
var _baseFor = baseFor$1;
function baseTimes$1(n, iteratee) {
  var index2 = -1, result = Array(n);
  while (++index2 < n) {
    result[index2] = iteratee(index2);
  }
  return result;
}
var _baseTimes = baseTimes$1;
var isBuffer$2 = { exports: {} };
function stubFalse() {
  return false;
}
var stubFalse_1 = stubFalse;
isBuffer$2.exports;
(function(module, exports) {
  var root2 = _root, stubFalse2 = stubFalse_1;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var Buffer = moduleExports ? root2.Buffer : void 0;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
  var isBuffer2 = nativeIsBuffer || stubFalse2;
  module.exports = isBuffer2;
})(isBuffer$2, isBuffer$2.exports);
var isBufferExports = isBuffer$2.exports;
var baseGetTag$1 = _baseGetTag, isLength$1 = isLength_1, isObjectLike$1 = isObjectLike_1;
var argsTag$1 = "[object Arguments]", arrayTag$1 = "[object Array]", boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", errorTag$1 = "[object Error]", funcTag = "[object Function]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", objectTag$2 = "[object Object]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", weakMapTag$1 = "[object WeakMap]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$2 = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) && isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}
var _baseUnary = baseUnary$1;
var _nodeUtil = { exports: {} };
_nodeUtil.exports;
(function(module, exports) {
  var freeGlobal2 = _freeGlobal;
  var freeExports = exports && !exports.nodeType && exports;
  var freeModule = freeExports && true && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal2.process;
  var nodeUtil2 = function() {
    try {
      var types = freeModule && freeModule.require && freeModule.require("util").types;
      if (types) {
        return types;
      }
      return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  module.exports = nodeUtil2;
})(_nodeUtil, _nodeUtil.exports);
var _nodeUtilExports = _nodeUtil.exports;
var baseIsTypedArray = _baseIsTypedArray, baseUnary = _baseUnary, nodeUtil = _nodeUtilExports;
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
var isTypedArray_1 = isTypedArray$2;
var baseTimes = _baseTimes, isArguments = isArguments_1, isArray$3 = isArray_1, isBuffer$1 = isBufferExports, isIndex = _isIndex, isTypedArray$1 = isTypedArray_1;
var objectProto$5 = Object.prototype;
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer$1(value), isType = !isArr && !isArg && !isBuff && isTypedArray$1(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}
var _arrayLikeKeys = arrayLikeKeys$1;
var objectProto$4 = Object.prototype;
function isPrototype$1(value) {
  var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto$4;
  return value === proto;
}
var _isPrototype = isPrototype$1;
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}
var _overArg = overArg$1;
var overArg = _overArg;
var nativeKeys$1 = overArg(Object.keys, Object);
var _nativeKeys = nativeKeys$1;
var isPrototype = _isPrototype, nativeKeys = _nativeKeys;
var objectProto$3 = Object.prototype;
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;
function baseKeys$1(object2) {
  if (!isPrototype(object2)) {
    return nativeKeys(object2);
  }
  var result = [];
  for (var key in Object(object2)) {
    if (hasOwnProperty$2.call(object2, key) && key != "constructor") {
      result.push(key);
    }
  }
  return result;
}
var _baseKeys = baseKeys$1;
var isFunction = isFunction_1, isLength = isLength_1;
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}
var isArrayLike_1 = isArrayLike$1;
var arrayLikeKeys = _arrayLikeKeys, baseKeys = _baseKeys, isArrayLike = isArrayLike_1;
function keys$3(object2) {
  return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
}
var keys_1 = keys$3;
var baseFor = _baseFor, keys$2 = keys_1;
function baseForOwn$1(object2, iteratee) {
  return object2 && baseFor(object2, iteratee, keys$2);
}
var _baseForOwn = baseForOwn$1;
var ListCache$2 = _ListCache;
function stackClear$1() {
  this.__data__ = new ListCache$2();
  this.size = 0;
}
var _stackClear = stackClear$1;
function stackDelete$1(key) {
  var data = this.__data__, result = data["delete"](key);
  this.size = data.size;
  return result;
}
var _stackDelete = stackDelete$1;
function stackGet$1(key) {
  return this.__data__.get(key);
}
var _stackGet = stackGet$1;
function stackHas$1(key) {
  return this.__data__.has(key);
}
var _stackHas = stackHas$1;
var ListCache$1 = _ListCache, Map$2 = _Map, MapCache$1 = _MapCache;
var LARGE_ARRAY_SIZE = 200;
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}
var _stackSet = stackSet$1;
var ListCache = _ListCache, stackClear = _stackClear, stackDelete = _stackDelete, stackGet = _stackGet, stackHas = _stackHas, stackSet = _stackSet;
function Stack$2(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype["delete"] = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2;
var HASH_UNDEFINED = "__lodash_hash_undefined__";
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(value) {
  return this.__data__.has(value);
}
var _setCacheHas = setCacheHas$1;
var MapCache = _MapCache, setCacheAdd = _setCacheAdd, setCacheHas = _setCacheHas;
function SetCache$1(values) {
  var index2 = -1, length = values == null ? 0 : values.length;
  this.__data__ = new MapCache();
  while (++index2 < length) {
    this.add(values[index2]);
  }
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(array2, predicate) {
  var index2 = -1, length = array2 == null ? 0 : array2.length;
  while (++index2 < length) {
    if (predicate(array2[index2], index2, array2)) {
      return true;
    }
  }
  return false;
}
var _arraySome = arraySome$1;
function cacheHas$1(cache, key) {
  return cache.has(key);
}
var _cacheHas = cacheHas$1;
var SetCache = _SetCache, arraySome = _arraySome, cacheHas = _cacheHas;
var COMPARE_PARTIAL_FLAG$5 = 1, COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(array2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$5, arrLength = array2.length, othLength = other.length;
  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  var arrStacked = stack.get(array2);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array2;
  }
  var index2 = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  stack.set(array2, other);
  stack.set(other, array2);
  while (++index2 < arrLength) {
    var arrValue = array2[index2], othValue = other[index2];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index2, other, array2, stack) : customizer(arrValue, othValue, index2, array2, other, stack);
    }
    if (compared !== void 0) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    if (seen) {
      if (!arraySome(other, function(othValue2, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack["delete"](array2);
  stack["delete"](other);
  return result;
}
var _equalArrays = equalArrays$2;
var root$4 = _root;
var Uint8Array$1 = root$4.Uint8Array;
var _Uint8Array = Uint8Array$1;
function mapToArray$1(map2) {
  var index2 = -1, result = Array(map2.size);
  map2.forEach(function(value, key) {
    result[++index2] = [key, value];
  });
  return result;
}
var _mapToArray = mapToArray$1;
function setToArray$1(set2) {
  var index2 = -1, result = Array(set2.size);
  set2.forEach(function(value) {
    result[++index2] = value;
  });
  return result;
}
var _setToArray = setToArray$1;
var Symbol$1 = _Symbol, Uint8Array = _Uint8Array, eq = eq_1, equalArrays$1 = _equalArrays, mapToArray = _mapToArray, setToArray = _setToArray;
var COMPARE_PARTIAL_FLAG$4 = 1, COMPARE_UNORDERED_FLAG$2 = 2;
var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag$1 = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag$1 = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]";
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function equalByTag$1(object2, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$1:
      if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
        return false;
      }
      object2 = object2.buffer;
      other = other.buffer;
    case arrayBufferTag:
      if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array(object2), new Uint8Array(other))) {
        return false;
      }
      return true;
    case boolTag:
    case dateTag:
    case numberTag:
      return eq(+object2, +other);
    case errorTag:
      return object2.name == other.name && object2.message == other.message;
    case regexpTag:
    case stringTag:
      return object2 == other + "";
    case mapTag$1:
      var convert = mapToArray;
    case setTag$1:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$4;
      convert || (convert = setToArray);
      if (object2.size != other.size && !isPartial) {
        return false;
      }
      var stacked = stack.get(object2);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG$2;
      stack.set(object2, other);
      var result = equalArrays$1(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
      stack["delete"](object2);
      return result;
    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object2) == symbolValueOf.call(other);
      }
  }
  return false;
}
var _equalByTag = equalByTag$1;
function arrayPush$1(array2, values) {
  var index2 = -1, length = values.length, offset = array2.length;
  while (++index2 < length) {
    array2[offset + index2] = values[index2];
  }
  return array2;
}
var _arrayPush = arrayPush$1;
var arrayPush = _arrayPush, isArray$2 = isArray_1;
function baseGetAllKeys$1(object2, keysFunc, symbolsFunc) {
  var result = keysFunc(object2);
  return isArray$2(object2) ? result : arrayPush(result, symbolsFunc(object2));
}
var _baseGetAllKeys = baseGetAllKeys$1;
function arrayFilter$1(array2, predicate) {
  var index2 = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
  while (++index2 < length) {
    var value = array2[index2];
    if (predicate(value, index2, array2)) {
      result[resIndex++] = value;
    }
  }
  return result;
}
var _arrayFilter = arrayFilter$1;
function stubArray$1() {
  return [];
}
var stubArray_1 = stubArray$1;
var arrayFilter = _arrayFilter, stubArray = stubArray_1;
var objectProto$2 = Object.prototype;
var propertyIsEnumerable = objectProto$2.propertyIsEnumerable;
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object2) {
  if (object2 == null) {
    return [];
  }
  object2 = Object(object2);
  return arrayFilter(nativeGetSymbols(object2), function(symbol) {
    return propertyIsEnumerable.call(object2, symbol);
  });
};
var _getSymbols = getSymbols$1;
var baseGetAllKeys = _baseGetAllKeys, getSymbols = _getSymbols, keys$1 = keys_1;
function getAllKeys$1(object2) {
  return baseGetAllKeys(object2, keys$1, getSymbols);
}
var _getAllKeys = getAllKeys$1;
var getAllKeys = _getAllKeys;
var COMPARE_PARTIAL_FLAG$3 = 1;
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function equalObjects$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index2 = objLength;
  while (index2--) {
    var key = objProps[index2];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  var objStacked = stack.get(object2);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object2;
  }
  var result = true;
  stack.set(object2, other);
  stack.set(other, object2);
  var skipCtor = isPartial;
  while (++index2 < objLength) {
    key = objProps[index2];
    var objValue = object2[key], othValue = other[key];
    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
    }
    if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == "constructor");
  }
  if (result && !skipCtor) {
    var objCtor = object2.constructor, othCtor = other.constructor;
    if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack["delete"](object2);
  stack["delete"](other);
  return result;
}
var _equalObjects = equalObjects$1;
var getNative$3 = _getNative, root$3 = _root;
var DataView$1 = getNative$3(root$3, "DataView");
var _DataView = DataView$1;
var getNative$2 = _getNative, root$2 = _root;
var Promise$2 = getNative$2(root$2, "Promise");
var _Promise = Promise$2;
var getNative$1 = _getNative, root$1 = _root;
var Set$2 = getNative$1(root$1, "Set");
var _Set = Set$2;
var getNative = _getNative, root = _root;
var WeakMap$1 = getNative(root, "WeakMap");
var _WeakMap = WeakMap$1;
var DataView = _DataView, Map$1 = _Map, Promise$1 = _Promise, Set$1 = _Set, WeakMap = _WeakMap, baseGetTag = _baseGetTag, toSource = _toSource;
var mapTag = "[object Map]", objectTag$1 = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map$1), promiseCtorString = toSource(Promise$1), setCtorString = toSource(Set$1), weakMapCtorString = toSource(WeakMap);
var getTag$1 = baseGetTag;
if (DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag$1(new Map$1()) != mapTag || Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag || Set$1 && getTag$1(new Set$1()) != setTag || WeakMap && getTag$1(new WeakMap()) != weakMapTag) {
  getTag$1 = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag$1 ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}
var _getTag = getTag$1;
var Stack$1 = _Stack, equalArrays = _equalArrays, equalByTag = _equalByTag, equalObjects = _equalObjects, getTag = _getTag, isArray$1 = isArray_1, isBuffer = isBufferExports, isTypedArray = isTypedArray_1;
var COMPARE_PARTIAL_FLAG$2 = 1;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseIsEqualDeep$1(object2, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray$1(object2), othIsArr = isArray$1(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;
  var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
  if (isSameTag && isBuffer(object2)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack$1());
    return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG$2)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
      stack || (stack = new Stack$1());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack$1());
  return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
}
var _baseIsEqualDeep = baseIsEqualDeep$1;
var baseIsEqualDeep = _baseIsEqualDeep, isObjectLike = isObjectLike_1;
function baseIsEqual$2(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$2, stack);
}
var _baseIsEqual = baseIsEqual$2;
var Stack = _Stack, baseIsEqual$1 = _baseIsEqual;
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(object2, source, matchData, customizer) {
  var index2 = matchData.length, length = index2, noCustomizer = !customizer;
  if (object2 == null) {
    return !length;
  }
  object2 = Object(object2);
  while (index2--) {
    var data = matchData[index2];
    if (noCustomizer && data[2] ? data[1] !== object2[data[0]] : !(data[0] in object2)) {
      return false;
    }
  }
  while (++index2 < length) {
    data = matchData[index2];
    var key = data[0], objValue = object2[key], srcValue = data[1];
    if (noCustomizer && data[2]) {
      if (objValue === void 0 && !(key in object2)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object2, source, stack);
      }
      if (!(result === void 0 ? baseIsEqual$1(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
var _baseIsMatch = baseIsMatch$1;
var isObject = isObject_1;
function isStrictComparable$2(value) {
  return value === value && !isObject(value);
}
var _isStrictComparable = isStrictComparable$2;
var isStrictComparable$1 = _isStrictComparable, keys = keys_1;
function getMatchData$1(object2) {
  var result = keys(object2), length = result.length;
  while (length--) {
    var key = result[length], value = object2[key];
    result[length] = [key, value, isStrictComparable$1(value)];
  }
  return result;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(key, srcValue) {
  return function(object2) {
    if (object2 == null) {
      return false;
    }
    return object2[key] === srcValue && (srcValue !== void 0 || key in Object(object2));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2;
var baseIsMatch = _baseIsMatch, getMatchData = _getMatchData, matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable$1(matchData[0][0], matchData[0][1]);
  }
  return function(object2) {
    return object2 === source || baseIsMatch(object2, source, matchData);
  };
}
var _baseMatches = baseMatches$1;
var castPath = _castPath, toKey$2 = _toKey;
function baseGet$2(object2, path) {
  path = castPath(path, object2);
  var index2 = 0, length = path.length;
  while (object2 != null && index2 < length) {
    object2 = object2[toKey$2(path[index2++])];
  }
  return index2 && index2 == length ? object2 : void 0;
}
var _baseGet = baseGet$2;
var baseGet$1 = _baseGet;
function get$1(object2, path, defaultValue) {
  var result = object2 == null ? void 0 : baseGet$1(object2, path);
  return result === void 0 ? defaultValue : result;
}
var get_1 = get$1;
function baseHasIn$1(object2, key) {
  return object2 != null && key in Object(object2);
}
var _baseHasIn = baseHasIn$1;
var baseHasIn = _baseHasIn, hasPath = _hasPath;
function hasIn$1(object2, path) {
  return object2 != null && hasPath(object2, path, baseHasIn);
}
var hasIn_1 = hasIn$1;
var baseIsEqual = _baseIsEqual, get = get_1, hasIn = hasIn_1, isKey$1 = _isKey, isStrictComparable = _isStrictComparable, matchesStrictComparable = _matchesStrictComparable, toKey$1 = _toKey;
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(path, srcValue) {
  if (isKey$1(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey$1(path), srcValue);
  }
  return function(object2) {
    var objValue = get(object2, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object2, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$1(value) {
  return value;
}
var identity_1 = identity$1;
function baseProperty$1(key) {
  return function(object2) {
    return object2 == null ? void 0 : object2[key];
  };
}
var _baseProperty = baseProperty$1;
var baseGet = _baseGet;
function basePropertyDeep$1(path) {
  return function(object2) {
    return baseGet(object2, path);
  };
}
var _basePropertyDeep = basePropertyDeep$1;
var baseProperty = _baseProperty, basePropertyDeep = _basePropertyDeep, isKey = _isKey, toKey = _toKey;
function property$1(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
var property_1 = property$1;
var baseMatches = _baseMatches, baseMatchesProperty = _baseMatchesProperty, identity = identity_1, isArray = isArray_1, property = property_1;
function baseIteratee$1(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
var _baseIteratee = baseIteratee$1;
var baseAssignValue = _baseAssignValue, baseForOwn = _baseForOwn, baseIteratee = _baseIteratee;
function mapValues(object2, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee);
  baseForOwn(object2, function(value, key, object3) {
    baseAssignValue(result, key, iteratee(value, key, object3));
  });
  return result;
}
var mapValues_1 = mapValues;
const mapValues$1 = /* @__PURE__ */ getDefaultExportFromCjs(mapValues_1);
function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = /* @__PURE__ */ Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key];
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values)) this._size++;
  return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var propertyExpr = {
  Cache,
  split,
  normalizePath,
  setter: function(path) {
    var parts = normalizePath(path);
    return setCache.get(path) || setCache.set(path, function setter(obj, value) {
      var index2 = 0;
      var len = parts.length;
      var data = obj;
      while (index2 < len - 1) {
        var part = parts[index2];
        if (part === "__proto__" || part === "constructor" || part === "prototype") {
          return obj;
        }
        data = data[parts[index2++]];
      }
      data[parts[index2]] = value;
    });
  },
  getter: function(path, safe) {
    var parts = normalizePath(path);
    return getCache.get(path) || getCache.set(path, function getter(data) {
      var index2 = 0, len = parts.length;
      while (index2 < len) {
        if (data != null || !safe) data = data[parts[index2++]];
        else return;
      }
      return data;
    });
  },
  join: function(segments) {
    return segments.reduce(function(path, part) {
      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
    }, "");
  },
  forEach: function(path, cb, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb, thisArg);
  }
};
function normalizePath(path) {
  return pathCache.get(path) || pathCache.set(
    path,
    split(path).map(function(part) {
      return part.replace(CLEAN_QUOTES_REGEX, "$2");
    })
  );
}
function split(path) {
  return path.match(SPLIT_REGEX) || [""];
}
function forEach(parts, iter, thisArg) {
  var len = parts.length, part, idx, isArray2, isBracket;
  for (idx = 0; idx < len; idx++) {
    part = parts[idx];
    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }
      isBracket = isQuoted(part);
      isArray2 = !isBracket && /^\d+$/.test(part);
      iter.call(thisArg, part, isBracket, isArray2, idx, parts);
    }
  }
}
function isQuoted(str) {
  return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(key, options = {}) {
    if (typeof key !== "string") throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "") throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter) result = this.getter(result || {});
    if (this.map) result = this.map(result);
    return result;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
function _extends$1() {
  _extends$1 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function createValidation(config) {
  function validate(_ref, cb) {
    let {
      value,
      path = "",
      label,
      options,
      originalValue,
      sync
    } = _ref, rest = _objectWithoutPropertiesLoose(_ref, ["value", "path", "label", "options", "originalValue", "sync"]);
    const {
      name,
      test,
      params,
      message
    } = config;
    let {
      parent,
      context
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      const nextParams = mapValues$1(_extends$1({
        value,
        originalValue,
        label,
        path: overrides.path || path
      }, params, overrides.params), resolve);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name);
      error.params = nextParams;
      return error;
    }
    let ctx = _extends$1({
      path,
      parent,
      type: name,
      createError,
      resolve,
      options,
      originalValue
    }, rest);
    if (!sync) {
      try {
        Promise.resolve(test.call(ctx, value, ctx)).then((validOrError) => {
          if (ValidationError.isError(validOrError)) cb(validOrError);
          else if (!validOrError) cb(createError());
          else cb(null, validOrError);
        });
      } catch (err) {
        cb(err);
      }
      return;
    }
    let result;
    try {
      var _ref2;
      result = test.call(ctx, value, ctx);
      if (typeof ((_ref2 = result) == null ? void 0 : _ref2.then) === "function") {
        throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
      }
    } catch (err) {
      cb(err);
      return;
    }
    if (ValidationError.isError(result)) cb(result);
    else if (!result) cb(createError());
    else cb(null, result);
  }
  validate.OPTIONS = config;
  return validate;
}
let trim = (part) => part.substr(0, part.length - 1).substr(1);
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path) return {
    parent,
    parentPath: path,
    schema
  };
  propertyExpr.forEach(path, (_part, isBracket, isArray2) => {
    let part = isBracket ? trim(_part) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    if (schema.innerType) {
      let idx = isArray2 ? parseInt(part, 10) : 0;
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = schema.innerType;
    }
    if (!isArray2) {
      if (!schema.fields || !schema.fields[part]) throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema._type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet {
  constructor() {
    this.list = /* @__PURE__ */ new Set();
    this.refs = /* @__PURE__ */ new Map();
  }
  get size() {
    return this.list.size + this.refs.size;
  }
  describe() {
    const description = [];
    for (const item of this.list) description.push(item);
    for (const [, ref] of this.refs) description.push(ref.describe());
    return description;
  }
  toArray() {
    return Array.from(this.list).concat(Array.from(this.refs.values()));
  }
  add(value) {
    Reference.isRef(value) ? this.refs.set(value.key, value) : this.list.add(value);
  }
  delete(value) {
    Reference.isRef(value) ? this.refs.delete(value.key) : this.list.delete(value);
  }
  has(value, resolve) {
    if (this.list.has(value)) return true;
    let item, values = this.refs.values();
    while (item = values.next(), !item.done) if (resolve(item.value) === value) return true;
    return false;
  }
  clone() {
    const next = new ReferenceSet();
    next.list = new Set(this.list);
    next.refs = new Map(this.refs);
    return next;
  }
  merge(newItems, removeItems) {
    const next = this.clone();
    newItems.list.forEach((value) => next.add(value));
    newItems.refs.forEach((value) => next.add(value));
    removeItems.list.forEach((value) => next.delete(value));
    removeItems.refs.forEach((value) => next.delete(value));
    return next;
  }
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
class BaseSchema {
  constructor(options) {
    this.deps = [];
    this.conditions = [];
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = /* @__PURE__ */ Object.create(null);
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = (options == null ? void 0 : options.type) || "mixed";
    this.spec = _extends({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      nullable: false,
      presence: "optional"
    }, options == null ? void 0 : options.spec);
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  _typeCheck(_value) {
    return true;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec) Object.assign(this.spec, spec);
      return this;
    }
    const next = Object.create(Object.getPrototypeOf(this));
    next.type = this.type;
    next._typeError = this._typeError;
    next._whitelistError = this._whitelistError;
    next._blacklistError = this._blacklistError;
    next._whitelist = this._whitelist.clone();
    next._blacklist = this._blacklist.clone();
    next.exclusiveTests = _extends({}, this.exclusiveTests);
    next.deps = [...this.deps];
    next.conditions = [...this.conditions];
    next.tests = [...this.tests];
    next.transforms = [...this.transforms];
    next.spec = clone(_extends({}, this.spec, spec));
    return next;
  }
  label(label) {
    var next = this.clone();
    next.spec.label = label;
    return next;
  }
  meta(...args) {
    if (args.length === 0) return this.spec.meta;
    let next = this.clone();
    next.spec.meta = Object.assign(next.spec.meta || {}, args[0]);
    return next;
  }
  // withContext<TContext extends AnyObject>(): BaseSchema<
  //   TCast,
  //   TContext,
  //   TOutput
  // > {
  //   return this as any;
  // }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this) return this;
    if (schema.type !== this.type && this.type !== "mixed") throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = _extends({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined._typeError || (combined._typeError = base._typeError);
    combined._whitelistError || (combined._whitelistError = base._whitelistError);
    combined._blacklistError || (combined._blacklistError = base._blacklistError);
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next) => {
      schema.tests.forEach((fn) => {
        next.test(fn.OPTIONS);
      });
    });
    return combined;
  }
  isType(v) {
    if (this.spec.nullable && v === null) return true;
    return this._typeCheck(v);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((schema2, condition) => condition.resolve(schema2, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {*=} options.parent
   * @param {*=} options.context
   */
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(_extends({
      value
    }, options));
    let result = resolvedSchema._cast(value, options);
    if (value !== void 0 && options.assert !== false && resolvedSchema.isType(result) !== true) {
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema._type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result;
  }
  _cast(rawValue, _options) {
    let value = rawValue === void 0 ? rawValue : this.transforms.reduce((value2, fn) => fn.call(this, value2, rawValue, this), rawValue);
    if (value === void 0) {
      value = this.getDefault();
    }
    return value;
  }
  _validate(_value, options = {}, cb) {
    let {
      sync,
      path,
      from = [],
      originalValue = _value,
      strict = this.spec.strict,
      abortEarly = this.spec.abortEarly
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, _extends({
        assert: false
      }, options));
    }
    let args = {
      value,
      path,
      options,
      originalValue,
      schema: this,
      label: this.spec.label,
      sync,
      from
    };
    let initialTests = [];
    if (this._typeError) initialTests.push(this._typeError);
    if (this._whitelistError) initialTests.push(this._whitelistError);
    if (this._blacklistError) initialTests.push(this._blacklistError);
    runTests({
      args,
      value,
      path,
      sync,
      tests: initialTests,
      endEarly: abortEarly
    }, (err) => {
      if (err) return void cb(err, value);
      runTests({
        tests: this.tests,
        args,
        path,
        sync,
        value,
        endEarly: abortEarly
      }, cb);
    });
  }
  validate(value, options, maybeCb) {
    let schema = this.resolve(_extends({}, options, {
      value
    }));
    return typeof maybeCb === "function" ? schema._validate(value, options, maybeCb) : new Promise((resolve, reject) => schema._validate(value, options, (err, value2) => {
      if (err) reject(err);
      else resolve(value2);
    }));
  }
  validateSync(value, options) {
    let schema = this.resolve(_extends({}, options, {
      value
    }));
    let result;
    schema._validate(value, _extends({}, options, {
      sync: true
    }), (err, value2) => {
      if (err) throw err;
      result = value2;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err)) return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err)) return false;
      throw err;
    }
  }
  _getDefault() {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this) : clone(defaultValue);
  }
  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault();
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next = this.clone({
      default: def
    });
    return next;
  }
  strict(isStrict = true) {
    var next = this.clone();
    next.spec.strict = isStrict;
    return next;
  }
  _isPresent(value) {
    return value != null;
  }
  defined(message = mixed.defined) {
    return this.test({
      message,
      name: "defined",
      exclusive: true,
      test(value) {
        return value !== void 0;
      }
    });
  }
  required(message = mixed.required) {
    return this.clone({
      presence: "required"
    }).withMutation((s) => s.test({
      message,
      name: "required",
      exclusive: true,
      test(value) {
        return this.schema._isPresent(value);
      }
    }));
  }
  notRequired() {
    var next = this.clone({
      presence: "optional"
    });
    next.tests = next.tests.filter((test) => test.OPTIONS.name !== "required");
    return next;
  }
  nullable(isNullable = true) {
    var next = this.clone({
      nullable: isNullable !== false
    });
    return next;
  }
  transform(fn) {
    var next = this.clone();
    next.transforms.push(fn);
    return next;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0) opts.message = mixed.default;
    if (typeof opts.test !== "function") throw new TypeError("`test` is a required parameters");
    let next = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name) throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name) next.exclusiveTests[opts.name] = !!opts.exclusive;
    next.tests = next.tests.filter((fn) => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive) return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test) return false;
      }
      return true;
    });
    next.tests.push(validate);
    return next;
  }
  when(keys2, options) {
    if (!Array.isArray(keys2) && typeof keys2 !== "string") {
      options = keys2;
      keys2 = ".";
    }
    let next = this.clone();
    let deps = toArray(keys2).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling) next.deps.push(dep.key);
    });
    next.conditions.push(new Condition(deps, options));
    return next;
  }
  typeError(message) {
    var next = this.clone();
    next._typeError = createValidation({
      message,
      name: "typeError",
      test(value) {
        if (value !== void 0 && !this.schema.isType(value)) return this.createError({
          params: {
            type: this.schema._type
          }
        });
        return true;
      }
    });
    return next;
  }
  oneOf(enums, message = mixed.oneOf) {
    var next = this.clone();
    enums.forEach((val) => {
      next._whitelist.add(val);
      next._blacklist.delete(val);
    });
    next._whitelistError = createValidation({
      message,
      name: "oneOf",
      test(value) {
        if (value === void 0) return true;
        let valids = this.schema._whitelist;
        return valids.has(value, this.resolve) ? true : this.createError({
          params: {
            values: valids.toArray().join(", ")
          }
        });
      }
    });
    return next;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    var next = this.clone();
    enums.forEach((val) => {
      next._blacklist.add(val);
      next._whitelist.delete(val);
    });
    next._blacklistError = createValidation({
      message,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        if (invalids.has(value, this.resolve)) return this.createError({
          params: {
            values: invalids.toArray().join(", ")
          }
        });
        return true;
      }
    });
    return next;
  }
  strip(strip = true) {
    let next = this.clone();
    next.spec.strip = strip;
    return next;
  }
  describe() {
    const next = this.clone();
    const {
      label,
      meta
    } = next.spec;
    const description = {
      meta,
      label,
      type: next.type,
      oneOf: next._whitelist.describe(),
      notOneOf: next._blacklist.describe(),
      tests: next.tests.map((fn) => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n, idx, list) => list.findIndex((c) => c.name === n.name) === idx)
    };
    return description;
  }
}
BaseSchema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"]) BaseSchema.prototype[`${method}At`] = function(path, value, options = {}) {
  const {
    parent,
    parentPath,
    schema
  } = getIn(this, path, value, options.context);
  return schema[method](parent && parent[parentPath], _extends({}, options, {
    parent,
    path
  }));
};
for (const alias of ["equals", "is"]) BaseSchema.prototype[alias] = BaseSchema.prototype.oneOf;
for (const alias of ["not", "nope"]) BaseSchema.prototype[alias] = BaseSchema.prototype.notOneOf;
BaseSchema.prototype.optional = BaseSchema.prototype.notRequired;
const isAbsent = (value) => value == null;
function create() {
  return new BooleanSchema();
}
class BooleanSchema extends BaseSchema {
  constructor() {
    super({
      type: "boolean"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (!this.isType(value)) {
          if (/^(true|1)$/i.test(String(value))) return true;
          if (/^(false|0)$/i.test(String(value))) return false;
        }
        return value;
      });
    });
  }
  _typeCheck(v) {
    if (v instanceof Boolean) v = v.valueOf();
    return typeof v === "boolean";
  }
  isTrue(message = boolean.isValue) {
    return this.test({
      message,
      name: "is-value",
      exclusive: true,
      params: {
        value: "true"
      },
      test(value) {
        return isAbsent(value) || value === true;
      }
    });
  }
  isFalse(message = boolean.isValue) {
    return this.test({
      message,
      name: "is-value",
      exclusive: true,
      params: {
        value: "false"
      },
      test(value) {
        return isAbsent(value) || value === false;
      }
    });
  }
}
create.prototype = BooleanSchema.prototype;
var isoReg = /^(\d{4}|[+\-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
function parseIsoDate(date2) {
  var numericKeys = [1, 4, 5, 6, 7, 10, 11], minutesOffset = 0, timestamp, struct;
  if (struct = isoReg.exec(date2)) {
    for (var i = 0, k; k = numericKeys[i]; ++i) struct[k] = +struct[k] || 0;
    struct[2] = (+struct[2] || 1) - 1;
    struct[3] = +struct[3] || 1;
    struct[7] = struct[7] ? String(struct[7]).substr(0, 3) : 0;
    if ((struct[8] === void 0 || struct[8] === "") && (struct[9] === void 0 || struct[9] === "")) timestamp = +new Date(struct[1], struct[2], struct[3], struct[4], struct[5], struct[6], struct[7]);
    else {
      if (struct[8] !== "Z" && struct[9] !== void 0) {
        minutesOffset = struct[10] * 60 + struct[11];
        if (struct[9] === "+") minutesOffset = 0 - minutesOffset;
      }
      timestamp = Date.UTC(struct[1], struct[2], struct[3], struct[4], struct[5] + minutesOffset, struct[6], struct[7]);
    }
  } else timestamp = Date.parse ? Date.parse(date2) : NaN;
  return timestamp;
}
let invalidDate = /* @__PURE__ */ new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends BaseSchema {
  constructor() {
    super({
      type: "date"
    });
    this.withMutation(() => {
      this.transform(function(value) {
        if (this.isType(value)) return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : invalidDate;
      });
    });
  }
  _typeCheck(v) {
    return isDate(v) && !isNaN(v.getTime());
  }
  prepareParam(ref, name) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast)) throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, "min");
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      test(value) {
        return isAbsent(value) || value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    var limit = this.prepareParam(max, "max");
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      test(value) {
        return isAbsent(value) || value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
var toposort$1 = { exports: {} };
toposort$1.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges);
};
toposort$1.exports.array = toposort;
function toposort(nodes, edges) {
  var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (i--) {
    if (!visited[i]) visit(nodes[i], i, /* @__PURE__ */ new Set());
  }
  return sorted;
  function visit(node, i2, predecessors) {
    if (predecessors.has(node)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node);
      } catch (e) {
        nodeRep = "";
      }
      throw new Error("Cyclic dependency" + nodeRep);
    }
    if (!nodesHash.has(node)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
    }
    if (visited[i2]) return;
    visited[i2] = true;
    var outgoing = outgoingEdges.get(node) || /* @__PURE__ */ new Set();
    outgoing = Array.from(outgoing);
    if (i2 = outgoing.length) {
      predecessors.add(node);
      do {
        var child = outgoing[--i2];
        visit(child, nodesHash.get(child), predecessors);
      } while (i2);
      predecessors.delete(node);
    }
    sorted[--cursor] = node;
  }
}
function uniqueNodes(arr) {
  var res = /* @__PURE__ */ new Set();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res);
}
function makeOutgoingEdges(arr) {
  var edges = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    var edge = arr[i];
    if (!edges.has(edge[0])) edges.set(edge[0], /* @__PURE__ */ new Set());
    if (!edges.has(edge[1])) edges.set(edge[1], /* @__PURE__ */ new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges;
}
function makeNodesHash(arr) {
  var res = /* @__PURE__ */ new Map();
  for (var i = 0, len = arr.length; i < len; i++) {
    res.set(arr[i], i);
  }
  return res;
}
const index = {
  register(app) {
    app.addMenuLink({
      to: `plugins/${PLUGIN_ID}`,
      icon: ForwardRef,
      intlLabel: {
        id: `${PLUGIN_ID}.plugin.name`,
        defaultMessage: PLUGIN_ID
      },
      Component: async () => {
        const { App } = await import("./App-CSJtDC2W.mjs");
        return App;
      }
    });
    app.customFields.register({
      name: "geojson",
      pluginId: "geodata",
      type: "json",
      // the geojson will be stored as a json
      intlLabel: {
        id: "geodata.geojson.label",
        defaultMessage: "GeoJSON"
      },
      intlDescription: {
        id: "geodata.geojson.description",
        defaultMessage: "Allows to save and manage geographic locations, supporting latitude, longitude, and geohash."
      },
      default: 12,
      isResizable: true,
      icon: ForwardRef,
      components: {
        Input: async () => import("./Input-CTAIXRLo.mjs")
      },
      options: {
        base: [
          /*
            Declare settings to be added to the "Base settings" section
            of the field in the Content-Type Builder
          */
          {
            sectionTitle: {
              // Add a "Format" settings section
              id: "geodata.geojson.section.info",
              defaultMessage: "Information about the setup"
            },
            items: [
              // Add settings items to the section
              {
                /*
                  Add a "Color format" dropdown
                  to choose between 2 different format options
                  for the color value: hexadecimal or RGBA
                */
                intlLabel: {
                  id: "geodata.geojson.info.label",
                  defaultMessage: "Only one GeoJSON field is allowed per content type. To store latitude, longitude, and geohash separately for queries, create three fields: lat (float), lng (float), and geohash (string). The plugin automatically updates both the lat/lng fields and the geohash field whenever any of these fields are modified. For dynamic creation, write the GeoJSON field in the {`{lat, lng}`} format, and the related fields will be populated automatically."
                },
                name: "options.info",
                type: "checkbox",
                value: "ok",
                // option selected by default
                required: true,
                options: [
                  // List all available "Color format" options
                  {
                    key: "confirm",
                    defaultValue: "off",
                    value: "on",
                    metadatas: {
                      intlLabel: {
                        id: "geodata.geojson.info.confirm",
                        defaultMessage: "Confirm"
                      }
                    }
                  }
                ]
              }
            ]
          }
        ],
        validator: (args) => ({
          info: create().required({
            id: "geodata.geojson.info.error",
            defaultMessage: "Confirm the understanding of the information"
          })
        })
      }
    });
    app.registerPlugin({
      id: PLUGIN_ID,
      initializer: Initializer,
      isReady: false,
      name: PLUGIN_ID
    });
  },
  async registerTrads(app) {
    const { locales } = app;
    const importedTranslations = await Promise.all(
      locales.map((locale) => {
        return __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./translations/en.json": () => import("./en-Byx4XI2L.mjs") }), `./translations/${locale}.json`, 3).then(({ default: data }) => {
          return {
            data: getTranslation(data),
            locale
          };
        }).catch(() => {
          return {
            data: {},
            locale
          };
        });
      })
    );
    return importedTranslations;
  }
};
export {
  ForwardRef as F,
  index as i
};
