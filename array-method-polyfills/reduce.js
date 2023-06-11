// reduce elements of an array to a value
Array.prototype.customReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback(accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
    }

    return accumulator;
}

/*
    [1,2,3].customReduce((prev, curr, idx, self) => {
        prev += curr;
        return prev;
    }) -> 6
    [1,2,3].customReduce((prev, curr, idx, self) => {
        prev += curr;
        return prev;
    }, 1) -> 7
*/