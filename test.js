let n = 100;
let a = [];
let answer = 0;

for (let i = 2; i <= n; i++) {
  a[i] = true;
}

for (let i = 2; i <= n; i++) {
  if (!a[i]) {
    continue;
  }
  for (let j = i * 2; j <= n; j += i) {
    a[j] = false;
  }
}

for (let i = 2; i <= n; i++) {
  if (a[i]) {
    console.log(i);
    answer++;
  }
}
console.log(answer);
