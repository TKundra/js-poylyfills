// pause function call ----------------------------------------------------------------
function* generatorC() {
    console.log('1st time');
    yield 1;
    console.log('2nd time');
    yield 2;
}

console.log("\n");
const resultC = generatorC();
console.log(resultC);
console.log(resultC.next());
console.log(resultC.next());
console.log(resultC.next());

/*
    Object [Generator] {}
    1st time
    { value: 1, done: false }
    2nd time
    { value: 2, done: false }
    { value: undefined, done: true }
*/

// using whith while loop -------------------------------------------------------------
function* generatorW() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

console.log("\n");
const resultW = generatorW();
console.log(resultW.next().value);
console.log(resultW.next().value);
console.log(resultW.next().value);

/*
    0
    1
    2
*/

// return value -----------------------------------------------------------------------
function* generatorR() {
    yield 1;
    yield 2;
}

console.log("\n");
const resultR = generatorR();
console.log(resultR.next());
console.log(resultR.next());
console.log(resultR.next());

/*
    { value: 1, done: false }
    { value: 2, done: false }
    { value: undefined, done: true }
*/

// return undefined -------------------------------------------------------------------
function* generatorU() {
    yield;
    yield;
}

console.log("\n");
const resultU = generatorU();
console.log(resultU.next());
console.log(resultU.next());
console.log(resultU.next());
/*
    { value: undefined, done: false }
    { value: undefined, done: false }
    { value: undefined, done: true }
*/

// passing value to next --------------------------------------------------------------
function* generatorP() {
    console.log(`inside generator -> ${yield}`)
}

console.log("\n");
const resultP = generatorP();
console.log(resultP.next());
console.log(resultP.next(69));

/*
    { value: undefined, done: false }
    inside generator -> 69
    { value: undefined, done: true }
*/

// yield in an array ------------------------------------------------------------------
function* generatorA() {
    console.log(`inside generator -> ${[yield, yield]}`);
}

console.log("\n");
const resultA = generatorA();
console.log(resultA.next());
console.log(resultA.next(69));
console.log(resultA.next(96));
console.log(resultA.next(49));
console.log(resultA.next(56));
/*
    { value: undefined, done: false }
    { value: undefined, done: false }
    inside generator -> 69,96
    { value: undefined, done: true }
    { value: undefined, done: true }
    { value: undefined, done: true }
*/

// yield to return array --------------------------------------------------------------
function* generatorRA() {
    yield 1;
    yield [2,3,4,5];
}

console.log("\n");
const resultRA = generatorRA();
console.log(resultRA.next());
console.log(resultRA.next());
console.log(resultRA.next());
/*
    { value: 1, done: false }
    { value: [ 2, 3, 4, 5 ], done: false }
    { value: undefined, done: true }
*/

// yield to return individual element of array ----------------------------------------
function* generatorI() {
    yield 1;
    yield* [2,3];
}

console.log("\n");
const resultI = generatorI();
console.log(resultI.next());
console.log(resultI.next());
console.log(resultI.next());
console.log(resultI.next());
/*
    { value: 1, done: false }
    { value: 2, done: false }
    { value: 3, done: false }
    { value: undefined, done: true }
*/
