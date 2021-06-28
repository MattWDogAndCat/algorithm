const {compareSize, exchangePostion} = require('../../common/common');

const bubbleSort = (numberList) => {
    for (let i = numberList.length-1; i>0; i--) {
        for (let j = 0; j<=i; j++) {
            if (compareSize(numberList[j], numberList[j+1])){
                exchangePostion(j,j+1,numberList);
            }
        }
    }
    return numberList;
};

module.exports = {
    bubbleSort : bubbleSort
}
