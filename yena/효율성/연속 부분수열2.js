function solution(num, arr) {
    let lt = 0;
    let rt = 0;
    let sum = 0;
    let answer = 0;

    for (rt = 0; rt < arr.length; rt++) {
        sum += arr[rt];
        if (sum <= num) answer += rt - lt + 1;
        while (sum > num && lt < arr.length) {
            sum -= arr[lt];
            lt++;
            if (sum <= num) answer += rt - lt + 1;
        }
    }
    return answer;
}

let a = [1, 3, 1, 2, 3];
console.log(solution(5, a));

/**
 * 부분수열 더하기 rt - lt + 1 가 핵심..
 */
