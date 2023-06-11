// merge two arrays into an array and return a new array
Array.prototype.customConcat = function () {
    const array = [];
    let i = 0;

    for (i = 0; i < this.length; i++) {
        array[i] = this[i];
    }

    for (let j = 0; j < arguments.length; j++) {
        for (let k = 0; k < arguments[j].length; k++) {
            array[i] = arguments[j][k];
            i += 1;
        }
    }

    return array;
}

/*
    [1,2,3].customConcat()              -> [1,2,3]
    [1,2,3].customConcat([4,5])         -> [1,2,3,4,5]
    [1,2,3].customConcat([4], [5,6,7])  -> [1,2,3,4,5,6,7]
    [].customConcat([4], [5,6,7])       -> [4,5,6,7]
*/