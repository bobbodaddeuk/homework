function solution(n) { //가장 작은 값 구하기
    let answer = 0;
    let arr = [];
    for (let i = 3; i < n; i++) {
        if (n % i === 1) {
            arr.push(i);
        }
    }
    return Math.min(...arr);
}
console.log(solution(12))