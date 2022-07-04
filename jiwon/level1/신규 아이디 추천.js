function clean_special_char(str) {
  const special_char = '~!@#$%^&*()=+[{]}:?,<>/';
  special_char.split('').map((elem) => {
      let newRegExp = new RegExp('\\' + elem, 'g')
      str = str.replace(newRegExp, '')
  })
  return str
}

function merge_and_delete_dot(str) {
  return str.split('.').filter((elem) => elem.length > 0 ).join('.')
}

function insert_a(str) {
  if (str.length === 0) return 'a'
  return str
}

function slice_length(str) {
  return merge_and_delete_dot(str.substring(0, 15))
}

function increase_length(str) {
  if (str.length >= 3) return str
  return increase_length(str+str[str.length - 1])
}

function solution(new_id) {
  var answer = new_id.toLowerCase();
  answer = clean_special_char(answer)
  answer = merge_and_delete_dot(answer)
  answer = insert_a(answer)
  answer = slice_length(answer)
  answer = increase_length(answer)
  return answer
}