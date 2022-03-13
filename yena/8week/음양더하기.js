function solution(absolutes, signs) {
    const answer = absolutes.reduce((acc, cur, idx) => {
        if (signs[idx]) return acc + cur;
        else return acc - cur;
    }, 0);
    return answer;
}
