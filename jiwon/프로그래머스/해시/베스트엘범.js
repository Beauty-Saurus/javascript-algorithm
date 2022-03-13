/*
노래: 고유번호 가짐
장르별 가장 많이 재생 된 노래 두개
1. 장르 선택
노래의 총 재생 횟수가 많은 장르 수록
2. 노래 선택
가장 많이 재생 된 노래 수록
3. 같은 재생 횟수
고유번호가 낮은 노래 수록
4. 장르에 곡이 하나 들어있을 때
하나의 곡만 수록

각 인자 배열의 idx : 고유번호(노래 종류)

1. 장르 선택하기
2. 노래 선택하기
*/

function solution(genres, plays) {
  var answer = [];
  const music = genres.reduce((acc, elem, i) => {
      if (acc[elem]){
          acc[elem].musics.push({play: plays[i], id: i});
          acc[elem].wholePlay += plays[i];
      }
      else {
          acc[elem]= {genre: elem, musics: [{play: plays[i], id: i}], wholePlay: plays[i]};
      }
      return acc;
  }, {});
  let arr = []
  for (let k in music) {
      arr.push(music[k])
  }
  arr = arr.sort(function(a, b) { return b.wholePlay - a.wholePlay})
  arr.map((elem, i) => {
      elem.musics = (elem.musics).sort(function(a, b){return b.play - a.play});
      let cnt = 0;
      elem.musics.map((element, idx) => {
          
      })
      for (let i = 0; i < 2; i++) {
          answer.push(elem.musics[i].id);
          if (elem.musics.length == 1) break;
      }
  })
  return answer;
}