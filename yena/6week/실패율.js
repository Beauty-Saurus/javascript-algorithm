function solution(N, stages) {
    stages.sort((a, b) => a - b);
    let user = [...Array(N + 1)].map((_) => 0);
    let challenger = [...Array(N)].map((_) => 0);

    stages.forEach((i) => {
        user[i - 1]++;
    });
    challenger = user.map((i, id, src) => {
        return user.reduce((acc, cur, idx) => {
            if (id <= idx) return acc + cur;
            return acc;
        }, 0);
    });
    let answer = user.map((i, idx) => {
        return [(i * 1) / (challenger[idx] * 1), idx + 1];
    });
    answer = answer
        .slice(0, answer.length - 1)
        .sort((a, b) => b[0] - a[0])
        .map((i) => i[1]);
    return answer;
}
