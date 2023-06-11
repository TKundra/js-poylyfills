class Sequence {
    constructor(start = 0, end = Infinity, interval = 1) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    *[Symbol.iterator]() {
        for (let i = this.start; i < this.end; i++) {
            yield i;
        }
    }
}

const sequence = new Sequence();
const result = sequence[Symbol.iterator]()

console.log(result.next())
console.log(result.next())
console.log(result.next())

/*
    { value: 0, done: false }
    { value: 1, done: false }
    { value: 2, done: false }
*/
