function solution(s) {
  var answer = 0;
  const dict = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  const s_arr = s.split("", s.length);
  console.log(s_arr);
  s_arr.map((elem)=> {
    if (elem >= "0", elem <= "9") {
      answer = answer*10 + parseInt(elem);
      s = s.substr(1);
    }
    else {
      var i = 0;
      dict.map(num => {
        if (s.indexOf(num) === 0) {
          answer = answer*10 + i;
          s = s.substr(num.length)
        }
        i ++;
      })
    }
  })
  return answer;
}