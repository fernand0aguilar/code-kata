function moveZeros(arr) {
    for (let i = arr.length; i >= 0; i--) {
        if (arr[i] === 0) {
            arr[arr.length] = 0;
            arr.splice(i, 1);
        }
    }
    return arr;
}
// OPTIMIZED
//function moveZeros (arr) {
//     return arr
//         .filter((val) => val !== 0)
//         .concat(arr.filter((val) => val === 0));
// }