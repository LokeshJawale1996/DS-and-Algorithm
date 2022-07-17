//checking Square in another array
//arr1=[1,2,3,4], arr2=[1,9,4,16]
//if(arr1[i] * arr1[j] === arr2[j])
//let isSquare = true

function isSqaureCheck(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let isSquare = false;
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] * array1[j] === array2[j]) {
        isSquare = true;
      }
      //if square is not exist then it returns false
      if (j === array2.length - 1) {
        if (isSquare) {
          return false;
        }
      }
    }
  }
}

let result = isSqaureCheck([1, 2, 3, 4], [1, 16, 4, 9]);
console.log(result);

//time complexity O(n^2)
