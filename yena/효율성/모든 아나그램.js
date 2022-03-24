function solution_my(a, b) {
    const map = new Map();
    const target = new Map();
    const len = b.length;
    let answer = 0;

    const check_anagram = () => {
        console.log(target);
        let add = 1;
        for (let key of target.keys()) {
            if (map.get(key) !== target.get(key)) add = 0;
        }
        answer += add;
        console.log(answer);
    };

    for (let i = 0; i < len; i++) {
        if (map.has(b[i])) map.set(b[i], map.get(b[i]) + 1);
        else map.set(b[i], 1);
        if (target.has(a[i])) target.set(a[i], target.get(a[i]) + 1);
        else target.set(a[i], 1);
    }
    console.log(map, target);
    check_anagram();
    for (let i = len; i < a.length; i++) {
        console.log("target:", a[i], a[i - len]);
        if (target.has(a[i])) target.set(a[i], target.get(a[i]) + 1);
        else target.set(a[i], 1);
        if (target.get(a[i - len]) === 1) target.delete(a[i - len]);
        else target.set(a[i - len], target.get(a[i - len]) - 1);
        check_anagram();
    }
    return answer;
}

function solution(s, t) {
    let answer = 0;
    let sH = new Map();
    for (let x of t) {
        sH.set(x, (sH.get(x) || 0) - 1);
    }
    console.log(sH);

    let len = t.length - 1;

    for (let i = 0; i < len; i++) {
        sH.set(s[i], (sH.get(s[i]) || 0) + 1);
        if (sH.get(s[i]) === 0) sH.delete(s[i]);
    }
    console.log(sH);
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
        sH.set(s[rt], (sH.get(s[rt]) || 0) + 1);
        if (sH.get(s[rt]) === 0) sH.delete(s[rt]);

        if (sH.size === 0) answer++;

        sH.set(s[lt], (sH.get(s[lt]) || 0) - 1);
        if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
        lt++;
    }
    return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));
