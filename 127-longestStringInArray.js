const longestStringInArray = (arr) => {

    let max_str = arr[0].length;
    let ans = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let max = arr[i].length;
        if (max > max_str) {
            ans = arr[i];
            max_str = max;
        }
    }
    return ans;

}

console.log(longestStringInArray(["abc", "a", "abcde", "abcdggfhgfhs"]))