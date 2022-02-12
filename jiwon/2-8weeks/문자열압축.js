function solution(s) {
  var answer = s.length;
  for (let i = 1; i < (s.length/2) + 1; i++) {
      let temp = s;
      let shortStrLen = 0;
      while (temp.length >= i){
          let cnt = 0;
          const split_str = temp.substr(0, i);
          let regex = new RegExp(`^(${split_str})+`);
          cnt = regex.exec(temp)[0].length/i;
          shortStrLen += cnt === 1 ? i : (cnt+'').length + i;
          temp = temp.replace(regex, '');
      }
      shortStrLen += temp.length;
      answer  = answer > shortStrLen ? shortStrLen : answer;
  }
  return answer;
}