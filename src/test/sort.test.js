const { bubbleSort } = require('../service/simpleSort/bubbleSort');
const { selectionSort } = require('../service/simpleSort/selectionSort');
const { insertSort } = require('../service/simpleSort/insertSort');

test('bubble sort function', () => {
    expect(bubbleSort([9,7,8,3,1,4])).toEqual([1,3,4,7,8,9]);
  });

test('selection sort function', () => {
  expect(selectionSort([9,7,8,3,1,4])).toEqual([1,3,4,7,8,9]);
});

test('insert sort function', () => {
  expect(insertSort([9,7,8,3,1,4])).toEqual([1,3,4,7,8,9]);
})
