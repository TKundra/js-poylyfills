// return first occurrence of searched element in an array
Array.prototype.customFind = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return null;
}

/*
    [1,2,1,4].customFind((value, idx, self) => value === 1)   -> 1
*/