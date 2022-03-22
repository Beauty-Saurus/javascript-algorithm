function solution(N, K) {
    let arr = new Array(N).fill(0).map((i, idx) => idx + 1);
    let idx = 1;
    while (arr.length > 1) {
        console.log(arr);

        const q = arr.shift();
        if (idx % K !== 0) {
            arr.push(q);
        }
        idx++;
    }
    return arr[0];
}

console.log(solution(8, 3));
