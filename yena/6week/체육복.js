function solution(n, lost, reserve) {
    let answer = n;

    reserve = reserve
        .sort((a, b) => a - b)
        .reduce((acc, cur) => ((acc[cur] = false), acc), {});
    lost = lost
        .sort((a, b) => a - b)
        .reduce((acc, cur) => ((acc[cur] = false), acc), {});
    for (let key in lost) {
        key = key * 1;
        console.log(key);
        if (reserve[key] === false) {
            reserve[key] = true;
            lost[key] = true;
        }
    }
    for (let key in lost) {
        key = key * 1;
        if (reserve[key - 1] === false) {
            reserve[key - 1] = true;
            lost[key] = true;
        } else if (reserve[key + 1] === false) {
            reserve[key + 1] = true;
            lost[key] = true;
        }
    }
    for (const key in lost) {
        if (lost[key] === false) answer--;
    }
    return answer;
}
