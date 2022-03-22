function solution(target, arr) {
    const queue = Array.from(target);
    for (let sub of arr) {
        if (queue[0] === sub) queue.shift();
    }
    if (queue.length) return "NO";
    else return "YES";
} //순서가 꼬인채로 다시 등장하면?

console.log(solution("CBA", "CBBDAGE"));
