function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((output, i) => {
    const work = 100 - output
    return Math.ceil(work / speeds[i])
  })
  let deploy_day = days[0]
  let cnt_work = 0
  days.map((day, i) => {
    if (deploy_day < day){
      answer.push(cnt_work)
      cnt_work = 1
      deploy_day = days[i]
    }
    else {
      cnt_work++
    }
  })
  answer.push(cnt_work)
  return answer;
}