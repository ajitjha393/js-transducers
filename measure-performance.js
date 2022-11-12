const { timeIt, arrayOfRandoms, multiplyByThree, isEven } = require('./utils.js')

const { seq } = require('./seq.js')
const { map, filter } = require('./transducers.js')
const { compose } = require('./compose.js')


const arrOfMillion = arrayOfRandoms(100)(1e7);


console.log("\n======== Traditional Implementation ======== \n")

timeIt('million - chained', () => {
    arrOfMillion
      .map(multiplyByThree)
      .filter(isEven);
  });

timeIt('million - chained x2', () => {
  arrOfMillion
    .map(multiplyByThree)
    .map(multiplyByThree)
    .filter(isEven);
});

timeIt('million - chained x4', () => {
  arrOfMillion
    .map(multiplyByThree)
    .map(multiplyByThree)
    .map(multiplyByThree)
    .map(multiplyByThree)
    .filter(isEven);
});


// USING OUR TRANSDUCER IMPLEMENTATION

console.log("\n======== Transducer Implementation ======== \n")

timeIt('million - transduce', () => {
  seq(
    compose(
      map(multiplyByThree),
      filter(isEven),
    ),
    arrOfMillion,
  );
});
 

timeIt('million - transduce x2', () => {
  seq(
    compose(
      map(multiplyByThree),
      map(multiplyByThree),
      filter(isEven),
    ),
    arrOfMillion,
  );
});
 

timeIt('million - transduce x4', () => {
  seq(
    compose(
      map(multiplyByThree),
      map(multiplyByThree),
      map(multiplyByThree),
      map(multiplyByThree),
      filter(isEven),
    ),
    arrOfMillion,
  );
});