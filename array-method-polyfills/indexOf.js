// locate an element in an array
Array.prototype.customIndexOf = function (element, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === element) {
            return i;
        }
    }
    return -1;
}

/*
    [1,2,3,2].customIndexOf(2)          -> 1
    [1,2,3,2].customIndexOf(2, 2)       -> 3
    [1,2,3,2].customIndexOf(5)          -> -1
*/