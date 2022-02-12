function solution(name) {
  var answer = 0;
  const name_arr = name.split('');
  const change_arr = 'A'.repeat(name.length).split('');
  let idx = 0;  
  let check_cnt = 0;
  while (name !== (change_arr + '').replace(/,/g, '')) {
    check_cnt++;
    // 이 아래로 i위치의 알파펫 바꿔주는 코드 짜기
    if (name_arr[idx].charCodeAt(0) >= 78)
      answer += (91 - name_arr[idx].charCodeAt(0));
    else
      answer += (name_arr[idx].charCodeAt(0) - 65);
    change_arr[idx] = name_arr[idx];
    name_arr[idx] = 'A'

    if ((name_arr+'').replace(/,/g, '') === 'A'.repeat(name.length))
    {
      break;
    } 
      
    
    //이 아래로 i의 위치를 바꿔주는 코드 짜기
    let r_cnt = 1;
    let l_cnt = 1;
    let r_idx = (idx === name.length - 1) ? 0 : idx + 1;
    let l_idx = (idx === 0) ? name.length - 1 : idx - 1;

    while  (r_idx !== idx) {
      if (name_arr[r_idx] !== 'A')
        break;
      r_idx = (r_idx === name.length - 1) ? 0 : r_idx + 1;
      r_cnt++;
    }

    while (l_idx !== idx) {
      if ( name_arr[l_idx] !== 'A')
        break;
      l_idx = (l_idx === 0) ? name.length - 1 : l_idx - 1;
      l_cnt++;
    }
    if (r_cnt < l_cnt) {
      idx = r_idx;
      answer += r_cnt;
    }
    else {
      idx = l_idx;
      answer += l_cnt;
    }
  }
  return answer;
}