function solution(arr, move) {
    let len = arr.length;
    let answer = 0;
    const stack = [];

    move.forEach((mv) => {
        for (let i = 0; i < len; i++) {
            if (arr[i][mv - 1] !== 0) {
                if (
                    stack.length &&
                    stack[stack.length - 1] === arr[i][mv - 1]
                ) {
                    stack.pop();
                    answer += 2;
                } else {
                    stack.push(arr[i][mv - 1]);
                }
                arr[i][mv - 1] = 0;
                break;
            }
        }
    });
    return answer;
}

let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));
