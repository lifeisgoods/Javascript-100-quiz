//평균 점수

// //문제)영하네 반은 국어, 수학, 영어 시험을 보았습니다.
// 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
// 단, 소숫점 자리는 모두 버립니다.

// 입력 20 30 40
// 출력 30

//입력값을 prompt()로 받고 문자열을 배열로 반환해주는 split() 사용
const score = prompt().split(" ");

let sum = 0; //평균값을 입력받을 변수 선언

for(let i = 0; i < score.length; i++){
    //parseInt()는 입력받을 문자열을 숫자로 반환해줍니다.
    sum = sum + parseInt(score[i],10);
}
//Math.floor:주어진 값보다 이하의 가장 큰 정수를 반환합니다.
console.log(Math.floor(sum/score.length));