const checkNumberFindThirdOne = (x, y, z) => {
    if ((x !== y) && (x !== z) && (y !== z))
        return false;
    if (x == y) return z;
    if (x == z) return y;
    return x;
}