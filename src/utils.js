const timeIt = (label, fn) => {
    console.time(label)
    fn()
    console.timeEnd(label)
}

const arrayFromRandoms = 
     randomCeil =>
     length => 
     Array.from({length: length}, () => 
     Math.floor(Math.random() * randomCeil))

const isEven = num => !(num % 2)

const multiplyByThree = num => num * 3

const multiplyByTwo = num => num * 2


module.exports = {
    timeIt,
    arrayFromRandoms,
    isEven,
    multiplyByThree,
    multiplyByTwo
}