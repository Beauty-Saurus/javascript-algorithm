function solution(s)
{
    const str_stack = []
    for (let i = 0; i < s.length; i++) {
        if (str_stack[str_stack.length - 1] === s[i])
            str_stack.pop()
        else str_stack.push(s[i])
    }
    return str_stack.length > 0 ? 0 : 1;
}