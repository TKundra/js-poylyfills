// check if element is in an array
Array.prototype.customIncludes = function (element, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === element) {
            return true;
        }
    }
    return false;
}

/*
    [11,22,33,22].customIncludes(22)            -> true
    [11,22,33,22].customIncludes(44)            -> false
    [11,22,33,22].customIncludes(22, 2)         -> true
    [11,22,33,22].customIncludes(11, 2)         -> false
*/