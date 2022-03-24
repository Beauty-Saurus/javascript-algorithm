function solution(str) {
    const stack = [];
    const rt = [];
    for (let i of str) {
        if (i === "(") stack.push(i);
        else if (i === ")") stack.pop();
        else {
            if (stack.length === 0) rt.push(i);
        }
    }
    return rt.join("");
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str));
