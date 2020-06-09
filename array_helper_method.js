// forEach

const colors = ["red", "blue", "green"];

// 배열의 요소를 순회 & 출력
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// 순회문으로서의 for문
for (let color of colors) {
  console.log(color);
}

// forEach 헬퍼 메서드
const result = colors.forEach(function (color) {
  console.log(color);
});

console.log(result);

// II. filter()
const numbers = [-20, -15, 5, 10];

const positiveNumbers1 = [];
numbers.forEach((number) => {
  if (number > 0) {
    positiveNumbers1.push(number);
  }
});

console.log(positiveNumbers1);

//filter를 통해 코드를 줄일 수 있음

const positiveNumbers2 = numbers.filter((number) => {
  return number > 0;
});

console.log(positiveNumbers2);

// III. map()
// -> 순회를하며, 내부의 모든 요소에 동일한 작업을 해야하는 경우
// -> 숫자배열 <-> 문자배열, 동일한 숫자, 또는 데이터를 적용해야하는 경우

inputs = ["1", "5", "3", "6"];
const numberInputs = inputs.map((input) => {
  return parseInt(input);
});

console.log(numberInputs);
let sum = 0;
numberInputs.forEach((num) => {
  sum += num;
});

console.log(sum);

// IV. reduce() 문 12944
// - 순회를 하며, 내부의 모든 요소를 하나의 값으로 환원해야 하는 경우

sum = numberInputs.reduce(function (acc, cur) {
  console.log("누적값:" + acc);
  console.log("현재값:" + cur);
  return acc + cur;
});

console.log(sum);

// find, some, every
