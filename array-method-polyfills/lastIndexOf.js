// return index from last
Array.prototype.customLastIndexOf = function (element, fromIndex = this.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
        if (this[i] === element) {
            return i;
        }
    }
    return -1;
};

/*
    [1,2,3,2].customLastIndexOf(2)          -> 3
    [1,2,3,2].customLastIndexOf(2, 2)       -> 1
    [1,2,3,2].customLastIndexOf(5)          -> -1
*/