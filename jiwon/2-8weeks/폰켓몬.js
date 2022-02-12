function solution(nums) {
  var answer = 0;
  let k = nums.length % 2 ? (nums.length-1)/2 : nums.length/2;
  nums = new Set(nums);
  answer = nums.size > k ? k : nums.size;
  return answer;
}