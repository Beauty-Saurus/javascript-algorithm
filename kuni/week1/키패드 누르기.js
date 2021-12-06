function calDistanceGetHand(num, hand, l_cur, r_cur, keyPad) {
  const l_distance =
    Math.abs(keyPad[l_cur][0] - keyPad[num][0]) +
    Math.abs(keyPad[l_cur][1] - keyPad[num][1]);
  const r_distance =
    Math.abs(keyPad[r_cur][0] - keyPad[num][0]) +
    Math.abs(keyPad[r_cur][1] - keyPad[num][1]);
  if (l_distance === r_distance) {
    return hand === "right" ? "R" : "L";
  }
  return l_distance > r_distance ? "R" : "L";
}

function solution(numbers, hand) {
  const keyPad = {
    1: [0, 3],
    2: [1, 3],
    3: [2, 3],
    4: [0, 2],
    5: [1, 2],
    6: [2, 2],
    7: [0, 1],
    8: [1, 1],
    9: [2, 1],
    "*": [0, 0],
    0: [1, 0],
    "#": [2, 0],
  };

  let answer = "";
  let r_cur = "#";
  let l_cur = "*";
  const len = numbers.length;
  let i = 0;

  while (i < len) {
    if (numbers[i] % 3 === 1) {
      answer += "L";
      l_cur = numbers[i];
    } else if (numbers[i] % 3 === 0 && numbers[i] !== 0) {
      answer += "R";
      r_cur = numbers[i];
    } else {
      answer += calDistanceGetHand(numbers[i], hand, l_cur, r_cur, keyPad);
      answer[answer.length - 1] === "L"
        ? (l_cur = numbers[i])
        : (r_cur = numbers[i]);
    }
    i++;
  }

  return answer;
}
