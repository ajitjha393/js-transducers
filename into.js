const { isPlainObject, isNumber } = require('lodash')
const { map, filter, transduce, } =  require('./transducers')
const { pushReducer, objReducer } = require('./reducers')
const { compose } = require('./compose')

const into = (to, xf, collection) => {
    if(Array.isArray(to)) {
        return transduce(xf, pushReducer, to, collection)
    }
    if(isPlainObject(to)) {
        return transduce(xf, objReducer, to, collection)
    }
    throw new Error('into adapter only supports arrays and objects as `to`')
}


// Usage

into(
    [],
    compose(
        map(x => x/2),
        map(x => x * 10)
    ),
    [1,2,3,4,5]
)


into(
    [],
    compose(
        filter(isNumber),
        map(x => ({ [x]: x }))
    ),
    [1,2,3,"hello", () => "foo", 4]
)

// Export
module.exports = {
    into
}