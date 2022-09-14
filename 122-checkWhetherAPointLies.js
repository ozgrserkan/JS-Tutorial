const checkWhetherAPointLies = (a, b, x, y, r) => {

    let point = (a - x) * (a - x) + (b - y) * (b - y);
    r *= r;
    if (point < r) {
        return true;
    }
    return false;
}


console.log(checkWhetherAPointLies(0, 0, 2, 4, 8))
console.log(checkWhetherAPointLies(0, 0, 6, 8, 6))