function solution(d, budget) {
    let answer = 0;
    d.sort((a, b) => a - b).forEach((i) => {
        if (budget - i >= 0) (budget = budget - i), answer++;
    });
    return answer;
}
