// flatten array recursively upto a specified depth
Array.prototype.customFlat = function (depth = 1) {
    const result = [];
    (function flatten(array, depth) {
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i]) && depth > 0) {
                flatten(array[i], depth-1);
            } else {
                result.push(array[i]);
            }
        }
    })(this, depth);
    return result;
}

/*
    [1,2,3].customFlat()            -> [1,2,3]
    [1,2,[3]].customFlat(1)         -> [1,2,3]
    [1,2,[[3]]].customFlat(1)       -> [1,2,[3]]
    [1,2,[[3]]].customFlat(2)       -> [1,2,3]
*/