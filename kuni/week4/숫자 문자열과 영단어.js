//https://programmers.co.kr/learn/courses/30/lessons/81301

const numberToWordObject = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToNumber(s) {
  const wordArray = Object.keys(numberToWordObject);

  wordArray.map((word) => {
    if (s.includes(word)) {
      //RegExp에 global 옵션으로 모든 word를 해당 숫자로 바꿔줌
      s = s.replace(new RegExp(word, "g"), numberToWordObject[word]);
    }
  });
  return s;
}

function solution(s) {
  const answer = wordToNumber(s);

  return Number(answer);
}

const s = "23four5six7";

console.log(solution(s));
