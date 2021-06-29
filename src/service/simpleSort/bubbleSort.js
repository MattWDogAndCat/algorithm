const {compareSize, exchangePostion} = require('../../common/common');

const bubbleSort = (arrayList) => {
    for (let i = arrayList.length-1; i>0; i--) {
        for (let j = 0; j<=i; j++) {
            if (compareSize(arrayList[j], arrayList[j+1])){
                exchangePostion(j,j+1,arrayList);
            }
        }
    }
    return arrayList;
};

module.exports = {
    bubbleSort : bubbleSort
}
