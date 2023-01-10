const getDateCount = (date) => {
  let sum = 0;
  const [year, month, day] = date.split(".").map((elem) => parseInt(elem));
  sum += year * 12 * 28;
  sum += month * 28;
  sum += day;
  return sum;
};

function solution(today, terms, privacies) {
  var answer = [];
  const todayCount = getDateCount(today);
  const newTerms = terms.map((elem) => {
    const [term, month] = elem.split(" ");
    return { term, month, day: month * 28 - 1 };
  });
  let index = 0;
  privacies.map((privacy) => {
    index += 1;
    const [date, term] = privacy.split(" ");
    let [year, month, day] = date.split(".").map((elem) => parseInt(elem));
    day = day + newTerms.find((elem) => elem.term === term).day;
    const limitDateCount = getDateCount([year, month, day].join("."));
    if (todayCount > limitDateCount) answer.push(index);
  });
  return answer;
}
