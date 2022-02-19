function divisor(max, min) {
    if (max % min === 0) return min;
    return divisor(min, max % min);
}
function solution(w, h) {
    const minDivisor = w > h ? divisor(w, h) : divisor(h, w);
    return w * h - (w + h - minDivisor);
}
