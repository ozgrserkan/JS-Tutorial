const checkFractionIsProperOrNot = (num1, num2) => {
    return Math.abs(num1 / num2) < 1 ? "Proper Frac" : "Improper Frac"
}

console.log(checkFractionIsProperOrNot(12,30))