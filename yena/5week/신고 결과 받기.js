function solution(id_list, report, k) {
    let answer;

    const a = id_list.reduce(
        (acc, cur) => ((acc[cur] = []), acc),
        {}
    );
    const b = id_list.reduce(
        (acc, cur) => ((acc[cur] = 0), acc),
        {}
    );

    report.sort().forEach((item) => {
        const name = item.split(" ");

        if (! a[name[1]].find(i=>i==name[0])) {
            a[name[1]].push(name[0]);
        }
    });
	let i = 0;
	for (const key in a) {
		if (a[key].length >= k)
			a[key].forEach(item=>{
				b[item]++;
			})
		i++;
	}
	answer = Object.values(b);
    return answer;
}
