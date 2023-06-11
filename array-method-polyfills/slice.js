// copy elements of array and return new array
Array.prototype.customSlice = function (start = 0, end = this.length) {
    const result = [];
    if (start < 0) {
        start = this.length + start;
    }
    if (end < 0) {
        end = this.length + end;
    }
    for (let i = start; i < end; i++) {
        result[i] = this[i];
    }
    return result;
}

/*
    [1,2,3,4].customSlice()         -> [1,2,3,4]
    [1,2,3,4].customSlice(0,2)      -> [1,2]
    [1,2,3,4].customSlice(-3, -1)   -> [2,3]
*/