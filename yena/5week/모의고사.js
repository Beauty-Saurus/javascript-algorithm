function solution(answers) {
    let a = [1, 2, 3, 4, 5];
    let b = [1, 3, 4, 5];
    let c = [3, 1, 2, 4, 5];

    let answer = [0, 0, 0];
    answers.forEach((i, idx) => {
        if (i === a[idx % 5]) answer[0]++;
        if (i === (idx % 2 === 0 ? 2 : b[parseInt(idx / 2) % 4])) answer[1]++;
        if (i === c[parseInt((idx % 10) / 2)]) answer[2]++;
    });
    const max = Math.max(...answer);
    answer = answer.reduce((acc, cur, idx) => {
        if (max === cur) return acc.concat(idx + 1);
        return acc;
    }, []);
    return answer;
}
