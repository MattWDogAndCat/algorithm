const {compareBigger, exchangePostion} = require('../../common/common');

const quickSort = (arrayList) => {
    let indexStart = 0; 
    let indexEnd = arrayList.length-1;
    return sort(arrayList, indexStart, indexEnd);
}

const sort = (arrayList, indexStart, indexEnd) => {

    if(indexStart >= indexEnd){
        return arrayList;
    }
    //1. 返回分组的边界值key 在分组后的index索引号
    let partitionIndex = partition(arrayList, indexStart, indexEnd);
    //2. 对边界值左边的数组进行排序
    sort(arrayList, indexStart, partitionIndex-1);
    // //3. 对边界值右边的数组进行排序
    sort(arrayList, partitionIndex+1, indexEnd);
    return arrayList;
}

const partition = (arrayList, indexStart, indexEnd) => {
    let keyValue = arrayList[indexStart];
    let leftPoint = indexStart;
    let rightPoint = indexEnd + 1;

    while(true) {
        while(!compareBigger(keyValue, arrayList[--rightPoint])){
            if(rightPoint==indexStart){
                break;
            } 
        }
        

        while(!compareBigger(arrayList[++leftPoint], keyValue)){
            if(leftPoint==indexEnd) {
                break;
            }
            
        }

        if(rightPoint <= leftPoint){
            break;
        }else{
            exchangePostion(leftPoint,rightPoint,arrayList)
        }
    }
    exchangePostion( indexStart, rightPoint, arrayList);
    return rightPoint;
}

module.exports = {
    quickSort : quickSort
}
