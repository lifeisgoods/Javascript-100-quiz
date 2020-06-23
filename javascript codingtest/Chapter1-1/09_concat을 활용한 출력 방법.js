//concat을 활용한 출력 방법

//문제) 다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.

//데이터
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';


//출력해야할 값 2019/04/26 11:34:27


//정답 
var result = year.concat('/',month,'/',day,' ',hour,':',minute,':',+second);
console.log(result);

//concat = concatenate 라는 동사에서 왔음 (무엇과 무엇을 연결하다.)

