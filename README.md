# @iter-tools/set

[![Build Status](https://travis-ci.org/iter-tools/set.svg?branch=trunk)](https://travis-ci.org/iter-tools/set)
[![codecov](https://codecov.io/gh/iter-tools/set/branch/trunk/graph/badge.svg)](https://codecov.io/gh/iter-tools/set)

A simple `Set` which is almost identical to the es6 `Set` builtin. In fact it is a transparent facade over an internal `Set` builtin instance. To understand why this is useful see [rationale](#rationale).

Package includes Typescript libdefs. Suitable for node or browser environments. Supports native es imports in `node > 13.2`. Supports native es imports in `node > 13.2`.

## Usage

```js
const Set = require('@iter-tools/set'); // OR
import Set from '@iter-tools/set';
```

## Rationale

`@iter-tools/set` adds two key pieces of functionality to the `Set` builtin:

First, the iter-tools `Set` class can be safely extended. While es6 permits the extending of builtin classes, such a practice tends to choke transpilers. This occurs because it is not legal for the `Set` builtin to be invoked as `Set.call({}, values)`, as it would be in transpiled code.

Second, the builtin `Set` has a shortcoming: it lacks a `Set.isSet()` comparable to `Array.isArray`. While it is possible to detect an instance with `instanceof`, that operator has shortcomings surrounding realms. For more reading on realms and `instanceof`, I recommend [this Stack Overflow question](https://stackoverflow.com/questions/49832187/how-to-understand-js-realms).

## API

The basic API is that of the [Set builtin](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set).

In addition the following is supported:

`Set.isSet(inst)`: returns `true` if `inst` was constructed by this library and `false` otherwise. Note that it will return `true` even if the version of the library is different. It will return `false` for instances constructed with the `Set` builtin.
