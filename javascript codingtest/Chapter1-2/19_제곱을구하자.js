//제곱을 구하자

//문제)공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하시오

//정답

const num = prompt().split(" ");

//Math.pow()를 사용하여 구해보기 pow()를 사용하면 첫번째 매개변수가 베이스값이 되고 
//두번째 매개변수가 몇승인지 정하는 숫자
//pow()는 숫자형문자를 사용해도 됨

console.log(Math.pow(parseInt(num[0], 10), parseInt(num[1], 10)));