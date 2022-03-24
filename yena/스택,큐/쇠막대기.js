function solution(str) {
    const stack = [];
    let answer = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "(" && str[i + 1] === ")") {
            answer += stack.length;
            i++;
        } else if (str[i] === "(") {
            stack.push("(");
            answer++;
        } else if (str[i] === ")") {
            stack.pop();
        }
    }
    return answer;
}
let a = "(((()(()()))(())()))(()())";
console.log(solution(a));
