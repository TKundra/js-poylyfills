// return index of element from last
Array.prototype.customFindLastIndex = function (callback) {
    for (let i = this.length - 1; i >= 0; i--) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
}

/*
    [1,2,3,2].customFindLastIndex((value, idx, self) => value === 2)  -> 3
    [1,2,3,2].customFindLastIndex((value, idx, self) => value === 5)  -> -1
*/