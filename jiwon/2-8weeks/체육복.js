function solution(n, lost, reserve) {
  var answer = 0;
  lost.sort();
  reserve.sort();
  let temp = [...lost];
  temp.map((elem, i) => {
    if(reserve.includes(elem)) {
      lost.splice(lost.indexOf(elem), 1);
      reserve.splice(reserve.indexOf(elem), 1);
    }
  })
  temp = [...lost];

  temp.map((elem)=> {
    if (reserve.includes(elem-1)) {
      lost.splice(lost.indexOf(elem), 1);
      reserve.splice(reserve.indexOf(elem-1), 1);
    }
    else if (reserve.includes(elem+1)) {
      lost.splice(lost.indexOf(elem), 1);
      reserve.splice(reserve.indexOf(elem+1), 1);
    }
  })
  answer = n - lost.length;

  return answer;
}