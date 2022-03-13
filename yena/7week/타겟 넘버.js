function solution(numbers, target) {
    let answer = 0;
    const numlen = numbers.length;

    function _soultion(number, i) {
        if (i === numlen) {
            if (number === target) {
                answer++;
            }
            return;
        }
        _soultion(number + numbers[i], i + 1);
        _soultion(number - numbers[i], i + 1);
    }
    _soultion(0, 0);
    return answer;
}
