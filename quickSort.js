function timer(func, times) {
  const startTime = Date.now();
  let i = 0;
  while( i < times) {
    func();
    i++;
  }
  const endTime = Date.now();
  console.log(`消耗时间: ${endTime - startTime}`)
}

function sum(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

// console.log(sum([1,2,3,4,5,6]));


function quicksortES6(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < arr.length; i++) {
      arr[i] <= pivot ? less.push(arr[i]) : greater.push(arr[i]);
    }
    return [...quicksortES6(less), pivot, ...quicksortES6(greater)];
  }
}

function quicksortES5(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < arr.length; i++) {
      arr[i] <= pivot ? less.push(arr[i]) : greater.push(arr[i]);
    }
    return quicksortES5(less).concat([pivot]).concat(quicksortES5(greater));
  }
}
const arr = [1,6,7,6,8,4,13,95,1,0,5];

// console.log(arr.sort((a,b) => a - b));
// console.log(quicksortES6(arr));
// console.log(quicksortES5(arr));

timer(()=>arr.sort((a,b) => a - b), 100000); // first
timer(()=>quicksortES6(arr), 100000); // third
timer(()=>quicksortES5(arr), 100000); // second
