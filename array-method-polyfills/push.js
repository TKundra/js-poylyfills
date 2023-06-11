// add one or more elements to the end of original array
Array.prototype.customPush = function () {
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    return this;
}

/*
    [1,2,3,4].customPush(5)       -> [1,2,3,4,5]
    [1,2,3,4].customPush(5,6)     -> [1,2,3,4,5,6]
*/