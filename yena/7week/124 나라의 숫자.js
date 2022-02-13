function solution(n) {
    if (n < 4) return n === 3 ? "4" : n + "";
    else if (n % 3 === 0) {
        return solution(parseInt(n - 1 / 3)) * 1 + 2;
    } else return solution(parseInt(n / 3)) + solution(n % 3);
}
