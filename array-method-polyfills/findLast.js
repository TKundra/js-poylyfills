// return element from last
Array.prototype.customFindLast = function (callback) {
    for (let i = this.length-1; i >= 0; i--) {
        if (callback(this[i], i, this)) {
            return this[i];
        }
    }
    return null;
}

/*
    [1,2,1,4].customFindLast((value, idx, self) => value === 1)   -> 1
*/