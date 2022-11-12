const { multiplyByTwo, isEven, toUpper, isVowel} = require('./utils.js')
const { compose } = require('./compose.js')
const { pushReducer } = require('./reducers')
const { isPlainObject, entries } = require('lodash')

// Transducer => Transform + Reducer

const map = xf => reducer => {
    return (acc, val) => reducer(acc, xf(val))
}

const filter =  predicate => reducer => {
    return (acc, val) => predicate(val) ? reducer(acc, val) : acc
}

// Defining the maps, filters, and reducers 

const isEvenFilter = filter(isEven)
const isNotTwoFilter = filter(x => x !== 2)

const doubleMap =  map(multiplyByTwo)

const transduce = (xf, reducer, seed, _collection) => {
    const transformedReducer = xf(reducer)
    let accumulation = seed

    const collection = isPlainObject(_collection) ? entries(_collection): _collection

    for (const val of collection) {
        accumulation = transformedReducer(accumulation, val)
    }

    return accumulation
}


transduce(
    compose(filter(isVowel), map(toUpper)),
    (acc, str) => acc + str,
    "",
    "Bishwajit"
);

const myMap = new Map()
myMap.set('a', 1)
myMap.set('b', 2)
myMap.set('c', 3)
myMap.set('d', 4)


transduce(
    compose(isNotTwoFilter, isEvenFilter,doubleMap),
    pushReducer,
    [],
    myMap.values()
);


module.exports = {
    map,
    filter,
    transduce
}