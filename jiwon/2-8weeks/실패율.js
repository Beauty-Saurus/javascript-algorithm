function solution(N, stages) {
  var answer = [];
  stages.sort();

  const range = [...Array(N).keys()].map(i => i+1);
  const tryStage = range.reduce((acc, cur, index) => {
    const temp = new Object()
    const cnt = stages.filter(elem => elem===cur).length
    const users = stages.filter(elem => elem >= cur).length
    cnt === 0 ? (temp["stage"]= cur, temp["pct"]= 0 ): (temp["stage"]= cur, temp["pct"]= (cnt/users))
    acc.push(temp);
    return acc;
  }, [])

  answer = tryStage.sort(function(a, b){ return b.pct - a.pct}).map((elem)=> elem.stage);
  return answer;
}