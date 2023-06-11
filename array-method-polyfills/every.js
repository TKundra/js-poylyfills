// check if every element in array passes a test
Array.prototype.customEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

/*
    [1,2,3,4].customEvery((value, idx, self) => value < 5)
*/