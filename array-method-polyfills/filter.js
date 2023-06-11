// filter elements and return a new array
Array.prototype.customFilter = function (callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            array[i] = this[i];
        }
    }
    return array;
}

/*
    [1,2,3,4].customFilter((value, idx, self) => value !== 2)   -> [1,3,4]
*/