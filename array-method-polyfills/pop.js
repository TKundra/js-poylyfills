// remove element from end of original array
Array.prototype.customPop = function () {
    if (this.length > 0) {
        const elementToRemove = this[this.length-1];
        this.length = this.length-1;
        return elementToRemove;
    }
}

/*
    [1,2,3,4].customPop()       -> 4 -> [1,2,3]
*/