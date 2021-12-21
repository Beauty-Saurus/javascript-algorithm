function solution(numbers, hand) {
    var answer = '';
    const left = {
        1: {0: 4, 2: 1, 5: 2, 8: 3},
        4: {0: 3, 2: 2, 5: 1, 8: 2},
        7: {0: 2, 2: 3, 5: 2, 8: 1},
        '*': {0: 1, 2: 4, 5: 3, 8: 2},
        2: {0: 3, 2: 0, 5: 1, 8: 2},
        5: {0: 2, 2: 1, 5: 0, 8: 1},
        8: {0: 1, 2: 2, 5: 1, 8: 0},
        0: {0: 0, 2: 3, 5: 2, 8: 1},
    }
    const right = {
        3: {0: 4, 2: 1, 5: 2, 8: 3},
        6: {0: 3, 2: 2, 5: 1, 8: 2},
        9: {0: 2, 2: 3, 5: 2, 8: 1},
        '#': {0: 1, 2: 4, 5: 3, 8: 2},
        2: {0: 3, 2: 0, 5: 1, 8: 2},
        5: {0: 2, 2: 1, 5: 0, 8: 1},
        8: {0: 1, 2: 2, 5: 1, 8: 0},
        0: {0: 0, 2: 3, 5: 2, 8: 1},
    }
    var l_position = '*';
    var r_position = '#';
    
    for (var i = 0; i < numbers.length; i++){
        var n = String(numbers[i]);
        if (numbers[i]===1 || numbers[i]===4 || numbers[i]===7) {
            answer = answer.concat('L');
            l_position = n;
        }
        else if (numbers[i]===3 || numbers[i]===6 || numbers[i]===9) {
            answer = answer.concat('R');
            r_position = n;
        }
        else {
            if (left[l_position][n] < right[r_position][n]) {
                answer = answer.concat('L');
                l_position = n;
            }
            else if (left[l_position][n] === right[r_position][n]){
                if (hand==="left") {
                    answer = answer.concat('L');
                    l_position = n;
                }
                else if( hand === "right") {
                    answer = answer.concat('R');
                    r_position = n;
                }
            }
            else{
                answer = answer.concat('R');
                r_position = numbers[i];
            }
        }
    }
    return answer;
}
