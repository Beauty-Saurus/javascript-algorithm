function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);

  const realLost = lost.filter((man) => !reserve.includes(man));
  const realReserve = reserve.filter((man) => !lost.includes(man));
  let answer = n - realLost.length;

  realLost.forEach((man) => {
    if (realReserve.includes(man - 1)) {
      realReserve.splice(
        realReserve.findIndex((val) => val === man - 1),
        1
      );
      answer++;
    } else if (realReserve.includes(man + 1)) {
      realReserve.splice(
        realReserve.findIndex((val) => val === man + 1),
        1
      );
      answer++;
    }
  });

  return answer;
}
