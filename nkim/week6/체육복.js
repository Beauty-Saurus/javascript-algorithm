function solution(n, lost, reserve) {
    var answer = n - lost.length;
	const lost_arr = lost.sort((a, b) => a - b);
	const re_arr = reserve.filter((re, i) => {
		const idx = lost_arr.indexOf(re);
		const flag = idx != -1;
		if (flag)
		{
			lost_arr.splice(idx, 1);
			answer++;
		}
		return !flag;
	}).sort((a, b) => a - b);

	re_arr.forEach((re, i) => {
		let idx;
		idx = lost_arr.indexOf(re - 1);
		console.log(idx);
		if (idx != -1) {
			lost_arr.splice(idx, 1);
			answer++;
			return false;
		}
		idx = lost_arr.indexOf(re + 1);
		if (idx != -1) {
			lost_arr.splice(idx, 1);
			answer++;
			return false;
		}
	});

    return answer;
}