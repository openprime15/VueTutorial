function solution(n) {
  let a = [];
  let answer = n - 1;
  for (let i = 2; i <= n; i++) {
    a.push(i);
  }
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        answer = answer - 1;
        break;
      }
    }
  }
  //n에서 소수가 아닌 수의 갯수를 소거
  return answer;
}
