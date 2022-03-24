function solution_old1(k, arr) {
    let max = -1;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (j = i; j < i + k && j < arr.length; j++) {
            sum += arr[j];
        }
        if (max < sum) {
            max = sum;
        }
    }
    return max;
}

function solution(k, arr) {
    let max = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i < k) {
            max += arr[i];
            sum = max;
        } else {
            sum -= arr[i - k];
            sum += arr[i];
            if (max < sum) max = sum;
        }
        console.log(sum);
    }
    return max;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

/**
 * solution_old1 : for문을 두번 돌려 시간복잡도가 O(n^2)
 */
