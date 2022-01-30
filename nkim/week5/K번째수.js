function solution(array, commands) {
  var answer = [];

  commands.forEach(([i, j, k]) => {
    const slice_arr = array.slice(i - 1, j);
    slice_arr.sort((a, b) => a - b);
    answer.push(slice_arr[k - 1]);
  });
  return answer;
}
