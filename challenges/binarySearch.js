//Divide and -Conquerer Technique
//Find the index of given no in a sorted array 7
//[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6 ->output

//min =0, element = 1
//max=array.length-1, element = 15
//minIndex= (min+max)/2 => 7(index) , element = 8
//if array[minIndex] < number(7)
//min = minIndex +1;
//array[minIndex] > number(7)
//max = minIndex -1, min =0, max = 6 , {1,2,3,4,5,6.7}
//(min+max)/2=3(minIndex)
//min= 3+1 = 4 max = 6 {5,6,7}
//(min+max)/2=5(minIndex)
//min = 5 + 1=6,max =6 {6}
//(min+max)/2= 6(minIndex)
//else minIndex => 6 ,element = 7

function searchAlgo(array, num) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let midIndex = Math.floor((min + max) / 2);
    if (array[midIndex] < num) {
      min = midIndex + 1;
    } else if (array[midIndex] > num) {
      max = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}

const result = searchAlgo(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(result);
