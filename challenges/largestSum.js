//[1,2,3,4,3,5,6,7,8] => Total elements -10
//Count largest sum of consecutive Digits
//num -4
//sum => 25

//conditions
//num > array -> error message
//10-4+1 => 7

function findlargest(array, num) {
  if (num > array) {
    throw new Error("Num is not greater than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = findlargest([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);
