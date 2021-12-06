function solution(numbers, hand) {
    let left = 10;
    let right = 12;

    const distance = (hd, tg) => {
        const hand = hd === 0 ? 11 : hd;
        const target = tg === 0 ? 11 : tg;
        const dis = Math.abs(target - hand);
        if (dis <= 1) return dis;
        return parseInt(dis / 3) + (dis % 3);
    };

    let answerArr = numbers.map((item) => {
        if (item === 1 || item === 4 || item === 7) {
            left = item;
            return "L";
        } else if (item === 3 || item === 6 || item === 9) {
            right = item;
            return "R";
        } else if (distance(left, item) > distance(right, item)) {
            right = item;
            return "R";
        } else if (distance(left, item) < distance(right, item)) {
            left = item;
            return "L";
        } else {
            if (hand === "right") {
                right = item;
                return "R";
            } else {
                left = item;
                return "L";
            }
        }
    });
    const answer = answerArr.join("");
    return answer;
}
