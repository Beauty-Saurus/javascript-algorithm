function solution(numbers) {
  var answer = 0;
  for(let i=0; i<10; i++) {
    if (!numbers.includes(i)) {
      answer += i;
    }
  }
  return answer;
}

numbers = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution(numbers));