# js-transducers

The Functional and Declarative Implementation of `map`, `reduce`, `filter` were added to JS in ES2015 to `Array.Prototype`.

Since then we use them to perform all sorts of operations, filtering, and transformation declaratively on Array for manipulating data.

But all these operations are independent of each other, which means we produce
an intermediate resultant array which is passed as an input and we loop over it again in the next chained operation.


```js 
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

```

This implementation and existing behavior works really well in our normal day to day usage involving very smaller amount of data values.
But what if we need to perform these operations and transformations multiple times over `millions` of data values.

We see a significant performance degradation.


## Imperative Solution

Now we can go back to the imperative solution but will loose all the benefits that `Declarative` and `Functional Programming` provided us.
The Truthness and Referentiality of the codebase will not be maintained 

```js
timeIt('million - imperative', () => {
  const result = [];
  arrOfMillion
    .forEach(val => {
      const tripled = tripleIt(val);
      if (isEven(tripled)) result.push(tripled);
    });
});
```

Is there a way where I can get best of both the worlds?
And do not have to tradeoff on performance?

And the answer is YES!  - ***Using transducers***


## Transducer Solution

I implemented these transducers and other functional adapter and helpers - `into` and `seq`
Using this utiltiy we can rewrite the above mentioned code as - 

 

```js

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

```

## Measuring the Performance of our Transducers

As it is evident from the metric, the transduers allow us to perform all these operations and transformations in a much performant way
when dealing with huge amount of data and values that we want to iterate over.

It also enables us with more flexibility over the type of collection as it is agnostic to the container and not limited to only using Arrays.


![image](https://user-images.githubusercontent.com/42679346/201461654-fb4ab017-2da0-4c8a-8fb4-c2c84fc83888.png)
