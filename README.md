# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

**NPM Package Link**
https://www.npmjs.com/package/@umarkhan167/lotide

## Usage

**Install it:**

`npm install umarkhan167/lotide`

**Require it:**

`const _ = require('umarkhan167/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns first element in an array.
* `tail`: Returns array without the first element in it.
* `middle`: Returns array of exact middle elements.
* `assertArraysEqual`: Returns pass or fail assertion for an array.
* `assertEqual`: Returns pass or fail assertion for a value.
* `assertObjectsEqual`: Returns pass or fail assertion for a object.
* `countLetters`: Returns counted number of letters occured in a string.
* `countOnly`: Returns counted number of items/names occured in an array.
* `eqArrays`: Returns true or false from comparing two arrays.
* `eqObjects`: Returns true or false from comparing two objects.
* `findKey`: Returns first key to a truthy value.
* `findKeyByValue`: Returns first key to a specific value passed in.
* `flatten`: Returns new array by taking two arrays and flattening them.
* `letterPositions`: Returns a number based on letter position in the array.
* `map`: Returns first letter from the passed in array.
* `takeUntil`: Returns a new array until the passed in condition is met.
* `without`: Returns a new array without removing the items.

