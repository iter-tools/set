const NativeSet = require('./native-set');

const inst = Symbol('proxied set inst');
const flag = Symbol.for('@iter-tools/set');

class Set {
  constructor(entries) {
    this[inst] = new NativeSet(entries);
  }

  static isSet(inst) {
    return inst != null && inst[flag];
  }

  get [flag]() {
    return true;
  }

  get size() {
    return this[inst].size;
  }

  clear() {
    this[inst].clear();
  }

  has(key) {
    return this[inst].has(key);
  }

  add(key, value) {
    this[inst].add(key, value);
  }

  delete(key) {
    this[inst].delete(key);
  }

  forEach(cb, thisArg) {
    if (thisArg != null) {
      cb = cb.bind(thisArg);
    }
    for (const value of this.values()) cb(value, value, this);
  }

  keys() {
    return this[inst].keys();
  }

  values() {
    return this[inst].values();
  }

  entries() {
    return this[inst].entries();
  }

  [Symbol.iterator]() {
    return this[inst][Symbol.iterator]();
  }
}

module.exports = Set;
