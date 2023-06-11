// add one or more elements to the beginning of the original array and return length of array
Array.prototype.customUnshift = function () {
    if (arguments.length > 0) {
        /*
            move all elements ahead i.e 
            from [1,2,3]
            to   [1,1,2,3]
        */
        for (let i = this.length - 1; i >= 0; i--) {
            this[i + arguments.length] = this[i];
        }
        // add element at front
        for (let i = 0; i < arguments.length; i++) {
            this[i] = arguments[i];
        }
    }
    return this.length;
}

/*
    [].customUnshift()          -> []
    [].customUnshift([3])       -> [[3]]
    [1,2].customUnshift(3,4)    -> [3,4,1,2]
*/