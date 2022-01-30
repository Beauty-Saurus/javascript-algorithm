function solution(numbers) {
    let answer;
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numbers = numbers.sort();

    arr = arr.filter((item) => {
        let rt;
        rt = true;
        numbers.forEach((i) => {
            if (i === item) rt = false;
        });
        return rt;
    });
    answer = arr.reduce((acc, cur) => acc + cur);
    return answer;
}
