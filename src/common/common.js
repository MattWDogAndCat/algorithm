const compareSize = (a, b) => {
    if (a > b) {
        return true;
    };
    return false;
}

const exchangePostion = (index1, index2, array) => {
    let temp;
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

module.exports = {
    compareSize : compareSize,
    exchangePostion : exchangePostion
}