function solution(str) {
    const arr = str.split("");
    let max = 0;
    let maxChar;

    const answer = arr.reduce((acc, cur) => {
        acc[cur] = acc[cur] === undefined ? 1 : acc[cur] + 1;
        if (acc[cur] > max) {
            max = acc[cur];
            maxChar = cur;
        }
        return acc;
    }, {});
    console.log(answer);
    return maxChar;
}

let str = "BACBACCACCBDEDE";
console.log(solution(str));
