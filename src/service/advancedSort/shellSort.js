const {compareBigger, exchangePostion} = require('../../common/common');

const shellSort = (arrayList) => {
    let h = 1; 
    //确定h的初始值
    while(h < arrayList.length/2){
        h = 2*h + 1;
    }

    while (h>=1) {
        for( let i = h ; i < arrayList.length; i++){
            for (let j = i; j>=h ; j-=h){
                if(compareBigger(arrayList[j-h], arrayList[j])){
                    exchangePostion(j-h,j,arrayList);
                }
            }
        }
        h = parseInt(h/2);
        
    }
    return arrayList;
};

module.exports = {
    shellSort: shellSort
}
