function is_prime(num) { 
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(nums) {
  var answer = 0;
  const arr_sum = [];

  for(let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        arr_sum.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  arr_sum.forEach(elem => {
    if (is_prime(elem)) {
      answer++;
    }
  })
  return answer;
}