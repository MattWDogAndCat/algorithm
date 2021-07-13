const {compareBigger, exchangePostion} = require('../../common/common');

const insertSort = (arrayList) => {
    for (let i = 0; i < arrayList.length-1; i++){
         for (let j = i; j >= 0; j--) {
             if(compareBigger(arrayList[j], arrayList[j+1])){
                 exchangePostion(j, j+1, arrayList);
             }
         }
    }
    return arrayList;
}

module.exports = {
    insertSort : insertSort
}