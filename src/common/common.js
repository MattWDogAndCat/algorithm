const compareBigger = (compareA, compareB) => {
    if (compareA > compareB) {
        return true;
    };
    return false;
}

const exchangePostion = (index1, index2, arrayList) => {
    let temp;
    temp = arrayList[index1];
    arrayList[index1] = arrayList[index2];
    arrayList[index2] = temp;
}

module.exports = {
    compareBigger : compareBigger,
    exchangePostion : exchangePostion
}