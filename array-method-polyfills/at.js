// access element using both -ve & +ve indexes
Array.prototype.customAt = function (index) {
    if (index < 0) {
        index = this.length + index;
    }
    return this[index];
}

/*
    [1,2,3,4].customAt(0)   -> 1
    [1,2,3,4].customAt(-1)  -> 4
    [1,2,3,4].customAt(22)  -> undefined
*/