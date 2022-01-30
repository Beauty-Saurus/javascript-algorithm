function solution(array, commands) {
    const answer = commands.map((command) => {
        const a = array
            .slice(command[0] - 1, command[1])
            .sort(function compareNumbers(a, b) {
                return a - b;
            });
        return a[command[2] - 1];
    });
    return answer;
}
