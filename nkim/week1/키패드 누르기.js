function getDistance(key1, key2) {
  const location1 = { x: 0, y: 0 };
  const location2 = { x: 0, y: 0 };
  location1.x = /^[1-9]$/.test(key1) ? parseInt((key1 - 1) / 3) : 3;
  location2.x = /^[1-9]$/.test(key2) ? parseInt((key2 - 1) / 3) : 3;
  location1.y = /^[1-9]$/.test(key1)
    ? (key1 - 1) % 3
    : key1 === "*"
    ? 0
    : key1 === 0
    ? 1
    : 2;
  location2.y = /^[1-9]$/.test(key2)
    ? (key2 - 1) % 3
    : key2 === "*"
    ? 0
    : key2 === 0
    ? 1
    : 2;
  return (
    Math.abs(location1.x - location2.x) + Math.abs(location1.y - location2.y)
  );
}

function solution(numbers, hand) {
  var answer = "";
  let lhand = "*";
  let rhand = "#";

  for (const num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      lhand = num;
      answer += "L";
    } else if (num === 3 || num === 6 || num === 9) {
      rhand = num;
      answer += "R";
    } else {
      d;
      const lDistance = getDistance(lhand, num);
      const rDistance = getDistance(rhand, num);
      if (lDistance < rDistance) {
        lhand = num;
        answer += "L";
      } else if (lDistance > rDistance) {
        rhand = num;
        answer += "R";
      } else {
        if (hand === "right") {
          rhand = num;
          answer += "R";
        } else {
          lhand = num;
          answer += "L";
        }
      }
    }
  }
  return answer;
}
