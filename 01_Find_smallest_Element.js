const arr = [5, 3, 8, 1, 4];
let mini = Infinity;

const getSmallestElement = (arr) => {
    for (let i = 0;i < arr.length; i++) {
        if (arr[i] < mini) {
            mini = arr[i];
        }
    }
    return mini;
}

let ans = getSmallestElement(arr);
console.log(ans);