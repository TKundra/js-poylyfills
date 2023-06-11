// check if atleast one element in an array passed a test
Array.prototype.customSome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

/*
    [1,2,3].customSome(v => v === 2)    -> true
*/