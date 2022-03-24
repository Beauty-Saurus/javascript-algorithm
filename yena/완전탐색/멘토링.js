function solution(test) {
    const studentNum = test[0].length;
    const arr = [];
    for (let i = 0; i < test.length; i++) {
        for (let j = 0; j < studentNum; j++) {
            for (let k = j + 1; k < studentNum; k++) {
                if (i === 0) {
                    arr.push([test[i][j], test[i][k]]);
                } else {
                    let index = -1;
                    arr.forEach((item, idx) => {
                        if (
                            item.join("") === [test[i][k], test[i][j]].join("")
                        ) {
                            index = idx;
                            return;
                        }
                    });
                    if (index > -1) arr.splice(index, 1);
                }
            }
        }
    }
    return arr.length;
}

let arr = [
    [3, 4, 1, 2],
    [1, 4, 5, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
];

console.log(solution(arr));
