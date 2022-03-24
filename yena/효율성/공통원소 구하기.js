function solution1(arr1, arr2) {
    const answer = arr1.filter((i) => arr2.includes(i));
    return answer.sort((a, b) => a - b);
}

function solution(arr1, arr2) {
    let p1 = 0;
    let p2 = 0;
    const answer = [];

    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    while (p1 < arr1.length && p2 < arr2.length) {
        if (arr1[p1] === arr2[p2]) {
            answer.push(arr1[p1]);
            p1++;
            p2++;
        } else if (arr1[p1] > arr2[p2]) p2++;
        else p1++;
    }
    return answer;
}

let a = [1, 3, 9, 5, 2, 8];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));
