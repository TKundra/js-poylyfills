// remove first element from original array and return removed element
Array.prototype.customShift = function () {
    if (this.length > 0) {
        const firstElement = this[0];
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i + 1];
        }
        this.length -= 1;
        return firstElement;
    }
}

/*
    [1,2,3].customShift()       -> [2,3]
    [3].customShift()           -> []
    [].customShift()            -> undefined
*/