function solution(s) {
    let answer = 0;

    answer = s
        .replace(/one/g, "1")
        .replace(/zero/g, "0")
        .replace(/two/g, "2")
        .replace(/three/g, "3")
        .replace(/four/g, "4")
        .replace(/five/g, "5")
        .replace(/six/g, "6")
        .replace(/seven/g, "7")
        .replace(/eight/g, "8")
        .replace(/nine/g, "9");
    answer = answer * 1;
    return answer;
}
