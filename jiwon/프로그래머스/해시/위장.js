function solution(clothes) {
  var answer = 1;
  
  const map = new Map();
  clothes.map((elem) => {
    map.get(elem[1]) ? map.set(elem[1], map.get(elem[1]) + 1) : map.set(elem[1], 1);
  })
  console.log(map);
  for (let key of map) {
    answer *= key[1]+1;
  }

  answer--;
  return answer;
}