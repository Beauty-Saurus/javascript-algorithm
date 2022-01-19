function checkPrime(num) {
  for (let n = 2; n * n <= num; n++) {
    if (!(num % n)) return true;
  }
  return false;
}

function solution(nums) {
  let answer = 0;

  nums.forEach((num1, index1, origin1) => {
    const rest1 = origin1.slice(index1 + 1);
    rest1.forEach((num2, index2, origin2) => {
      const rest2 = origin2.slice(index2 + 1);
      rest2.forEach((num3) => {
        const sum = num1 + num2 + num3;
        if (!checkPrime(sum)) answer++;
      });
    });
  });

  return answer;
}
