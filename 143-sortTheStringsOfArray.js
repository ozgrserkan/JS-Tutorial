const sortTheStringsOfArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i].length > arr[j].length) {
                let a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr;
}

console.log(sortTheStringsOfArray(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]))