function reportToMap(report) {
  const reportNotDup = [...new Set(report)];

  const mappedReport = reportNotDup.reduce((acc, report) => {
    const splittedReport = report.split(" ");
    if (acc.get(splittedReport[1]) === undefined) {
      acc.set(splittedReport[1], []);
    }
    acc.get(splittedReport[1]).push(splittedReport[0]);
    return acc;
  }, new Map());

  return mappedReport;
}

function solution(id_list, report, k) {
  const answer = Array.from({ length: id_list.length }, () => 0);

  const mappedReport = reportToMap(report);

  mappedReport.forEach((reporters) => {
    if (reporters.length >= k) {
      reporters.forEach((name) => answer[id_list.indexOf(name)]++);
    }
  });

  return answer;
}
