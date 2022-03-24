function solution(a) {
    const stack = [];
    for (let i of a) {
        if (i === "(") stack.push(i);
        else {
            if (stack.length === 0) return "NO";
            else stack.pop();
        }
    }
    if (stack.length === 0) return "YES";
    else return "NO";
}

let a = "(()(()))(()";
console.log(solution(a));
