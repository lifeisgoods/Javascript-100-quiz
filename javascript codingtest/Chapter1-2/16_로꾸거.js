//로꾸거

//문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다

//입력 거꾸로
//출력 로꾸거

//정답

var str = "거꾸로";
//문자열을 배열로 변환하는 함수 split() , 매개변수로 문자열을 집어넣을 수 있음
//reverse 배열을 거꾸로 출력하는 함수
//배열을 문자열로 바꾸는 함수 join / 매개변수로 문자열을 집어넣을 수 있음
//이렇게 메소드를 연결해서 처리하는 방식을 메소드체이닝이라고 합니다~js만의 특징
console.log(str.split('').reverse().join(''));