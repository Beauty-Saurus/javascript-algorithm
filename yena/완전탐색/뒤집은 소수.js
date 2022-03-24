function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function solution(arr) {
    const reverseArr = arr.map((i) => {
        return i.toString().split("").reverse().join("") * 1;
    });
    return reverseArr.filter((i) => isPrime(i));
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
