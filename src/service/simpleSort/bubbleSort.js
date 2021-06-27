const bubbleSort = (numberList) => {
    for (let i = numberList.length-1; i>0; i--) {
        for (let j = 0; j<=i; j++) {
            if (compareSize(numberList[j], numberList[j+1])){
                exchange(j,j+1,numberList);
            }
        }
    }
    return numberList;
};

const compareSize = (a, b) => {
    if (a > b) {
        return true;
    };
    return false;
}

const exchange = (index1, index2, array) => {
    let temp;
    temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const numberList = [9,7,8,3,1,4];
console.log(`排序前的列表为: ${numberList}`);
const sortResult = bubbleSort(numberList);
console.log(`排序后的列表为: ${sortResult}`);