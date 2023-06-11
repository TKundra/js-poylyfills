// reverse the original array
Array.prototype.customReverse = function () {
    let start = 0, end = this.length-1;
    while (start < end) {
        const temp = this[start];
        this[start] = this[end];
        this[end] = temp;
        start++;
        end--;
    }
    return this;
}

/*
    [1,2,3,4].customReverse()   -> [4,3,2,1]
*/