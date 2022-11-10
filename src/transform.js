const { timeIt, arrayFromRandoms, multiplyByThree, isEven } = require('./utils.js')

const arrayOfThousand = arrayFromRandoms(100)(1e3)
const arrayOfMillion = arrayFromRandoms(100)(1e7)

// Declarative Transformations
timeIt('Thousands -> map', () => {
    arrayOfThousand
    .map(multiplyByThree)
})

timeIt('Millions -> map', () => {
    arrayOfMillion
    .map(multiplyByThree)
})

timeIt('Thousands -> map & filter', () => {
    arrayOfThousand
    .map(multiplyByThree)
    .filter(isEven)
})

timeIt('Millions -> map & filter', () => {
    arrayOfMillion
    .map(multiplyByThree)
    .filter(isEven)
})


// Imperative Transformations
timeIt('Millions -> map & filter (Imperative)', () => {
    const result = []
    arrayOfMillion
    .forEach(
        x => {
            const value = multiplyByThree(x)
            if(isEven(value)) {
                result.push(value)
            }
        }
    )
})

