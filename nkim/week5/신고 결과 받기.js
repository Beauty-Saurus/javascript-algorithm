function solution(id_list, report, k) {
  var answer = {};
  const repoCount = {};
  const repoSet = {};
  const repoFilter = new Set();
  const stopId = new Set();

  id_list.forEach((id) => {
    answer[id] = 0;
    repoCount[id] = 0;
    repoSet[id] = [];
  });
  report.forEach((data) => repoFilter.add(data));
  repoFilter.forEach((repo) => {
    const [user_id, report_id] = repo.split(" ");
    repoCount[report_id] += 1;
    if (repoCount[report_id] >= k) stopId.add(report_id);
    repoSet[user_id].push(report_id);
  });
  Object.entries(repoSet).forEach(([user_id, report_id_list]) => {
    stopId.forEach((stop_id) => {
      if (report_id_list.includes(stop_id)) answer[user_id] += 1;
    });
  });
  answer = Object.values(answer);

  return answer;
}
