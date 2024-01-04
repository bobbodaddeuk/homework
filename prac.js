function solution(n) {
    var answer = 0;
    for (i = 0; i<n.length; i++) {
        answer += i;
    }
    return answer;
}
let a = solution(10)
console.log(a)