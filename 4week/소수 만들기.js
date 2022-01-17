function solution(nums) {
    const isPrime = (a, b, c) => {
        const num = a + b + c;

        if (num === 1 || num === 2 || num === 3) return true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i == 0) return false;
        }
        return true;
    };

    const answer = nums.reduce((acc, cur, idx, src) => {
        let rt;

        rt = 0;
        for (let i = idx + 1; i < src.length; i++) {
            for (let j = i + 1; j < src.length; j++) {
                if (isPrime(cur, src[i], src[j])) rt++;
            }
        }
        return acc + rt;
    }, 0);
    return answer;
}
