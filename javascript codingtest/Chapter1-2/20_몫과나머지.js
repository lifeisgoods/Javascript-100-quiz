// 몫과 나머지

// 문제) 공백으로 구분하여 두 숫자가 주어집니다.
// 두번쨰 숫자로 첫번쨰 숫자를 나누었을 떄 그 몫과 나머지를 공백으로 구분하여 출력하세요.


// 입력: 10 2
// 출력: 5 0

//정답

const num = prompt().split(" ");

//몫을 저장할 변수
let val1 = Math.floor(parseInt(num[0], 10)/parseInt(num[1], 10));

//나머지값을 저장할 변수
let val2 = parseInt(num[0], 10)%parseInt(num[1], 10);
console.log(val1, val2);