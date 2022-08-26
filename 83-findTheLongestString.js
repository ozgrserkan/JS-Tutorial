const longestString = (array) => {
    let long = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > long.length) {
            long = array[i];
        }
    }
    return long;
}


console.log(longestString(['a','aa','aaa','aaaa','aaaaa']))