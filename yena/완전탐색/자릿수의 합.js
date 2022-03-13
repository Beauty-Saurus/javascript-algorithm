function solution(n, arr) {
    const sumArr = arr.map((item) => {
        const numArr = item.toString().split("");
        const sum = numArr.reduce((acc, cur) => +acc + +cur);
        return sum;
    });
    const max = Math.max(...sumArr);
    const maxArr = arr.filter((i, idx) => sumArr[idx] === max);
    return Math.max(...maxArr);
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
