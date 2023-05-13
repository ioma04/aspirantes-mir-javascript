function join(array){
    let result = "";
    for (i = 0; i < array.length; i++) {
        result += array[i];

        if (i !== array.length -1) {
            result += " ";
        }
    }
return result
}
console.log(join([1, 2, 3])) // 6
console.log(join([10, 8, 12, 5])) // 35
console.log(join([])) // 0