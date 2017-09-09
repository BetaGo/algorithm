function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
    i = -1; // i++ 的执行位置是在此次循环结束后.
  }
  return newArr;
}

const res = selectionSort([5,2,1]);
console.log(res);
