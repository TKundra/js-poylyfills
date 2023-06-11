// return first index of searched element in an array (first occurence of element's index)
Array.prototype.customFindIndex = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

/*
    [1,2,3,2].customFindIndex((value, idx, self) => value === 2)  -> 1
    [1,2,3,2].customFindIndex((value, idx, self) => value === 5)  -> -1
*/