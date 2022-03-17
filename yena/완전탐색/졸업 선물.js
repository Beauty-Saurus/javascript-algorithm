function solution(m, product) {
    let answer = 0;
    //const sortFunc = (a, b) => a[0] + a[1] - (b[0] + b[1]);
    //product.sort(sortFunc);
    //console.log(product);
    for (let i = 0; i < product.length; i++) {
        let tmp = 0;
        let money = m;
        for (let j = 0; j < product.length; j++) {
            if (i == j) money -= product[i][0] / 2 + product[i][1];
            else money -= product[i][0] + product[i][1];
            if (money > 0) tmp++;
            else break;
        }
        if (tmp > answer) answer = tmp;
    }
    return answer;
}

let arr = [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
];
console.log(solution(28, arr));
