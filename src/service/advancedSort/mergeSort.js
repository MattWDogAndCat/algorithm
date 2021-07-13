const { compareBigger } = require('../../common/common');

const mergeSort = (arrayList) => {
    let indexStart = 0;
    let indexEnd = arrayList.length-1;
    return sort(arrayList, indexStart,indexEnd);
}

const sort = (arrayList, indexStart,indexEnd) => {
    if(indexEnd <= indexStart){
        return;
    }
    let mid = indexStart + parseInt((indexEnd-indexStart)/2);
    sort(arrayList , indexStart, mid);
    sort(arrayList, mid+1,indexEnd);
    return merge(arrayList, indexStart,indexEnd, mid);
}

const merge = (arrayList, indexStart,indexEnd, mid) => {
   let assistArray = [];
   let assistPoint = indexStart;
   let point1 = indexStart;
   let point2 = mid+1;


   while(point1<=mid && point2<=indexEnd) {
        if(compareBigger(arrayList[point1], arrayList[point2])){
            assistArray[assistPoint]= arrayList[point2];
            point2++;
        }else{
            assistArray[assistPoint]= arrayList[point1];
            point1++
        }
        assistPoint++;
   }

   while(point1<=mid){
        assistArray[assistPoint]= arrayList[point1];
        point1++;
        assistPoint++;
   }

   while(point2<=indexEnd){
        assistArray[assistPoint]= arrayList[point2];
        point2++;
        assistPoint++;
   }
   for(let a = indexStart; a<=indexEnd; a++ ){
       arrayList[a] = assistArray[a];
   }
   return arrayList;
} 


module.exports = {
    mergeSort: mergeSort
}
