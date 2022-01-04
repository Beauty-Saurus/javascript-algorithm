function solution(a, b) {
    let answer = 0;
    a.forEach((item, idx) => {
        answer += item * b[idx];
    });
    return answer;
}
