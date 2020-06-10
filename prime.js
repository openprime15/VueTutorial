// let n = 100;
// let a = [];
// let answer = 0;

// for (let i = 2; i <= n; i++) {
//   a.push(i);
// }
// for (i = 2; i <= n; i++) {
//   if (a.find((num) => num === i) === undefined) {
//     continue;
//   }

//   for (j = 2; j <= Math.sqrt(i); j++) {
//     if (i % j === 0) {
//       a = a.filter((num) => {
//         return num % i !== 0;
//       });
//       break;
//     }
//   }
// }
// answer = a.length;

// console.log(a);
// console.log(answer);

function solution(n) {
  let a = [];
  let answer = 0;
  //true: 소수, false: 합성수
  for (let i = 2; i <= n; i++) {
    a[i] = true;
  }

  for (let i = 2; i <= n; i++) {
    /* if (a.find((num) => num === i) === undefined) {
      continue;
    } */
    if (a[i] === false) {
      continue;
    }

    for (let j = i * 2; j <= n; j += i) {
      a[j] = false;
    }

    /* for (j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        a = a.filter((num) => {
          return num % i !== 0;
        });
        break;
      }
    } */
  }

  for (let i = 2; i <= n; ++i) {
    if (a[i]) {
      console.log(i);
      ++answer;
    }
  }

  //console.log((answer = a.length));
  //console.log(a);
  return answer;
}

console.log("answer" + solution(100));
