const checkPermutation = (arr, n) => {
    for (let i = 0; i < n; i++) {
        if (arr.indexOf(i + 1) < 0)
            return false;
    }
    return true;
}

console.log(checkPermutation([1,2,3,4,5],5))