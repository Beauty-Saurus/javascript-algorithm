function solution(a, b) {
    const callback = (acc, cur) => {
        if (acc.has(cur)) acc.set(cur, acc.get(cur) + 1);
        else acc.set(cur, 1);
        return acc;
    };

    const aMap = a.split("").reduce(callback, new Map());
    const bMap = b.split("").reduce(callback, new Map());
    console.log(aMap, bMap);

    if (aMap.size !== bMap.size) return "NO";
    for (let key of aMap.keys()) {
        if (aMap.get(key) !== bMap.get(key)) return "NO";
    }
    return "YES";
}

let a = "AbaAeC3";
let b = "baeeACA";
console.log(solution(a, b));
