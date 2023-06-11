class Sequence {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return {
            next: () => {
                if (nextIndex < this.end) {
                    let result = { value: nextIndex, done: false };
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            },
            return: () => {
                console.log('cleaning....')
                return { value: undefined, done: true };
            }
        }
    }
}

const sequence = new Sequence();
const result = sequence[Symbol.iterator]();
console.log(result.next())
console.log(result.next())
console.log(result.return())

/*
    { value: 0, done: false }
    { value: 1, done: false }
    cleaning....
    { value: undefined, done: true }
*/

class NumberIterator {
    constructor(numbers) {
        this.numbers = numbers;
        this.current = 0;
    }
    next() {
        if (this.current < this.numbers.length) {
            return { value: this.numbers[this.current++], done: false };
        } else {
            return { value: undefined, done: true };
        }
    }
    return(value = undefined) {
        return { value: value, done: true };
    }
}

const iterator = new NumberIterator([1,2,3]);
let iteratorResult = iterator.next();

while (!iteratorResult.done) {
    console.log(iteratorResult.value);
    if (iteratorResult.value === 3) {
        iteratorResult = iterator.return('loop end prematurely');
    } else {
        iteratorResult = iterator.next();
    }
}
console.log(iteratorResult)

/*
    1
    2
    3
    { value: 'loop end prematurely', done: true }
*/