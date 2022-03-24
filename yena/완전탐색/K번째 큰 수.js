function solution(n, k, card) {
    let answer = new Set();
    for (let i = 0; i < card.length; i++) {
        for (let j = i + 1; j < card.length; j++) {
            for (let k = j + 1; k < card.length; k++) {
                answer.add(card[i] + card[j] + card[k]);
            }
        }
    }
    answer = [...answer].sort((a, b) => b - a);
    return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

/**
 * 합해서 같은 값이 나오는 경우 중복 제거
 */
