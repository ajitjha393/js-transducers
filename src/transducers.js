const { multiplyByTwo, isEven} = require('./utils.js')

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

const doubleMap=  map(multiplyByTwo)

const pushReducer = (acc, val) => [...acc, val]

const result = [1,2,3,4].reduce(
    isNotTwoFilter(
     isEvenFilter(
      doubleMap(pushReducer)
     )
    )
    , []
)

console.log(result)