function solution(record) {
  var answer = [];
  const result = [];
  const users = {};
  record.map((elem, i) => {
      const record_arr = elem.split(' ');
      if (record_arr[0] === 'Enter') {
          answer.push({ userId: record_arr[1], message: '님이 들어왔습니다.', });
          users[record_arr[1]] = record_arr[2];
      }
      else if (record_arr[0] === 'Leave') {
          answer.push({ userId: record_arr[1], message: '님이 나갔습니다.', });
      }
      else if (record_arr[0] === 'Change') {
          users[record_arr[1]] = record_arr[2];
      }
  })
  answer.map((elem, i) => {
      result.push(`${users[elem.userId]}${elem.message}`);
  })

  return result;
}