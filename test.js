function solution(s) {
  console.log(s.length);
  console.log(s.charAt(0));
  console.log(s.indexOf(" "));
  for (i = 0; i < s.indexOf(" "); i++) {
    if (i % 2 === 0) {
      s.charAt(i).toUpperCase();
    } else {
      s.charAt(i).toLowerCase();
    }
  }
}

solution("try hello world");
