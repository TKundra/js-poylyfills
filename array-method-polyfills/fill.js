// fills specified elements in array with a value on original array
Array.prototype.customFill = function (value, start = 0, end = this.length) {
    if (start < 0) {
        start = this.length + start;
    }
    if (end < 0) {
        end = this.length + end;
    }
    for (let i = start; i < end; i++) {
        this[i] = value;
    }
    return this;
}

/*
    [1,2,3,4].customFill(0,-3,-1)       -> [1,0,0,4]
    [1,2,3,4].customFill(0,2,3)         -> [1,2,0,4]
*/