// transform array elements and return new array
Array.prototype.customMap = function (callback) {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        array[i] = callback(this[i], i, this)
    }
    return array;
}

/*
    [1,2,3,4].customMap((value, idx, self) => value *= 2)   -> [2,4,6,8]
*/