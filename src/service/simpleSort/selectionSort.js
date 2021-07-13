const {compareBigger, exchangePostion} = require('../../common/common');

const selectionSort = (arrayList) => {
    let minIndex;
    for (let i = 0; i<arrayList.length-1; i++){
        minIndex = i ;
        for ( let j = i+1 ; j<arrayList.length; j++ ){
            if (compareBigger(arrayList[minIndex], arrayList[j])) {
                minIndex = j; 
            }
        }
        exchangePostion(i, minIndex, arrayList);
    }
    return arrayList;
};

module.exports = {
    selectionSort: selectionSort
}
