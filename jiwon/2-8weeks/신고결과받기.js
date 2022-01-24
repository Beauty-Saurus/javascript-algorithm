function solution(id_list, report, k) {
  var answer = [];
  const userObj = id_list.reduce((acc, cur, index)=>{
    acc[cur] = [new Set(), 0];
    return acc;
  }, {});


  report.map((elem, index) => {
    const [user, bad] = elem.split(' ');
    userObj[bad][0].add(user);
  })

  for(const prop in userObj) {
    if (userObj[prop][0].size >= k) {
      for (const elem of userObj[prop][0]) {
        userObj[elem][1] ++;
      }
    }
  }

  id_list.map((elem, i) => {
    answer.push(userObj[elem][1])
  })  
  return answer;
}