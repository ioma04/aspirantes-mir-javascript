function max(array){
    let maxNum = array[0];
    for (let i = 1; i < array.length; i++){
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    return maxNum;
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined