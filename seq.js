const { isPlainObject } = require('lodash')
const { pushReducer, objReducer } = require('./reducers')
const { transduce, map } = require('./transducers.js')
const { compose } = require('./compose')

const seq = (xf, collection) => {
    if(Array.isArray(collection)){
        return transduce(xf, pushReducer, [], collection)
    }

    if(isPlainObject(collection)) {
        return transduce(xf, objReducer, {}, collection)
    }

    throw new Error('`seq` adapter only supports arrays and objects as `collection`')
}

seq(map(x => x*2), [1,2,3])

const flip = compose(
  map(([k,v]) => ({[v*10]:k})),
);

seq(flip, {one: 1, two: 2, three: 3});

module.exports = {
    seq
}