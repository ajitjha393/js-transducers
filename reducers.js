// reducer :: (acc,val) => acc

const numberOrStringReducer = (acc, val) => acc + val

const setReducer = (acc, val) => acc.add(val)

const objReducer = (acc, obj) => ({...acc, ...obj})

const pushReducer = (acc, val) => ([...acc, val])


// Reducing transformation

const arrayOfNumbers = [1, 2, 3, 4, 5]

const user = {
    name: "Bishwajit",
    age: 22,
}

const mySet = new Set([1,2,3,4]);

numberOrStringReducer(6, 5) // 11
numberOrStringReducer(user.name, user.age) // Bishwajit 22
arrayOfNumbers.reduce(numberOrStringReducer, 0) // 15
objReducer(user, { email:  "xyz.com" }) // { name: "Bishwajit",age: 22, email: "xyz.com" }
setReducer(mySet, 4);


// Implementing Map and filter as reducers

const map = () => (xf, xs) => 
    xs.reduce((acc, val) => [...acc, xf(val)] , [])


const filter = (p, xs) => 
xs.reduce((acc, val) => { if(p(val)) [...acc, val] } , []) 


// Usage as Array.Prototype Methods (Traditional)

const { multiplyByTwo, isEven } = require('./utils.js')

xs.map(multiplyByTwo)
xs.filter(isEven)

// Usage as Reducer Methods (functional)

map(multiplyByTwo, xs)
filter(isEven, xs)


module.exports = {
    map,
    filter,
    pushReducer,
    objReducer,
    setReducer
}