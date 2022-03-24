function solution_old1(num, arr) {
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        let tmp = arr[i];
        if (tmp === num) answer++;
        for (let j = i + 1; j < arr.length || tmp > num; j++) {
            tmp += arr[j];
            if (tmp === num) answer++;
        }
    }
    return answer;
}

function solution_old2(num, arr) {
    let p1 = 0;
    let p2 = 0;
    let cnt = 0;
    let answer = 0;

    while (p1 < arr.length && p2 < arr.length) {
        cnt += arr[p2];
        if (cnt < num) {
            p2++;
        } else {
            if (cnt === num) answer++;
            cnt = 0;
            p1++;
            p2 = p1;
        }
    }
    return answer;
}

function solution(num, arr) {
    let p1 = 0;
    let p2 = 0;
    let cnt = 0;
    let answer = 0;

    while (p2 < arr.length) {
        cnt += arr[p2++];
        if (cnt === num) {
            answer++;
        }
        while (cnt >= num) {
            cnt -= arr[p1];
            p1++;
            if (cnt === num) {
                console.log("");
                answer++;
            }
        }
    }
    return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
