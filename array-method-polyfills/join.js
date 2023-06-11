// concat all elements of array into string separated by seperator
Array.prototype.customJoin = function (seperator = ",") {
    let result = "";
    for (let i = 0; i < this.length; i++) {
        if (i === this.length-1) {
            result += this[i];
        } else {
            result += this[i] + seperator;
        }
    }
    return result;
}

/*
    [1,2,3].customJoin()        -> "1,2,3"
    [1,2,3].customJoin(":")     -> "1:2:3"
*/