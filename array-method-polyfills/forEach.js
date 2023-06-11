// loop through array elements
Array.prototype.customForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

/*
    [1,2,3,4].customForEach((value, idx, self) => console.log(value))   -> [1,2,3,4]
*/