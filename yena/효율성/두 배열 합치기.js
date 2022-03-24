function solution(arr1, arr2) {
    answer = [];
    while (arr1.length && arr2.length) {
        const tmp = arr1[0] < arr2[0] ? arr1.shift() : arr2.shift();
        answer.push(tmp);
    }
    for (const num of arr1.length ? arr1 : arr2) {
        answer.push(num);
    }
    return answer;
}

let a = [1, 3, 5];
let b = [2];
console.log(solution(a, b));

/**
 * 투포인터 (two pointers) 알고리즘 :
 * - 포인터 두 개를 이동시키면서 O(n)을 구현하는거
 * - 병합정렬 내부 동작과 비슷함.
 */
