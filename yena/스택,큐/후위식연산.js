function solution(str) {
    const stack = [];
    for (let i of str) {
        console.log(stack);
        if (!isNaN(i * 1)) {
            stack.push(i * 1);
        } else if (i === "+") {
            stack.push(stack.pop() + stack.pop());
        } else if (i === "-") {
            const pop = stack.pop();
            stack.push(stack.pop() - pop);
        } else if (i === "/") {
            const pop = stack.pop();
            stack.push(stack.pop() / pop);
        } else if (i === "*") {
            stack.push(stack.pop() * stack.pop());
        }
    }
    return stack.pop();
}
let str = "352+*9-";
console.log(solution(str));
