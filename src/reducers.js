// reducer :: (acc,val) => acc

const numberOrStringReducer = (acc, val) => acc + val

const setReducer = (acc, val) => acc.add(val)

const objReducer = (acc, obj) => ({...acc, ...obj})


// Reducing teansformation

const arrayOfNumbers = [1, 2, 3, 4, 5]

const user = {
    name: "Bishwajit",
    age: 22,
}


numberOrStringReducer(6, 5) // 11
numberOrStringReducer(user.name, user.age) // Bishwajit 22
arrayOfNumbers.reduce(reducer, 0) // 15
objReducer(user, { email:  "xyz.com" }) // { name: "Bishwajit",age: 22, email: "xyz.com" }

