function solution(N, stages) {
  var answer = [];
  const report = {};
  [...new Array(N)].forEach((_, i) => {
    report[i + 1] = { stop: 0, dare: 0, fail_rate: 0 };
  });

  Object.keys(report).forEach((stage) => {
    report[stage].stop = stages.filter((s) => s == stage).length;
    report[stage].dare = stages.filter((s) => s >= stage).length;
  });
  Object.entries(report).forEach(([stage, val]) => {
    const { stop, dare } = val;
    report[stage].fail_rate = stop / dare;
  });
  answer = Object.keys(report).sort(
    (i, j) => report[j].fail_rate - report[i].fail_rate
  );
  answer = answer.map((data) => parseInt(data));
  return answer;
}
