// compose(f,g)(x) ==> f(g(x))

const Identity = x => x

const compose = (...fns) => fns.reduce(
    (acc, fn) => (...args) => acc(fn(...args)),
    Identity
)

module.exports = {
    compose,
    Identity
}