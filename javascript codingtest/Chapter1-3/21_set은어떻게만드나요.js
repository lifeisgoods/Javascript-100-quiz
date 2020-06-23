//set은 어떻게 만드나요

//다음 중 set을 만드는 방법으로 올바른 것을 모두 고르시오.

// -- 보기 --
// 1) var x = {1,2,3,5,6,7}; 
// 2) var x = {}; 
// 3) var x = new Set('javascript'); 정답
// 4)var x = new Set(range(5));
// 5) var x = new Set(); 정답






//set은 중복되지 않는 데이터를 저장하는 데이터 구조입니다.
const list = [1,2,2,3,4,5,5,5,6];

let setVal = new Set(list); //list에서 중복되는 숫자는 안나옴
setVal.add(10); //add 값을 추가하는 메서드
setVal.delete //값을 삭제하는 메서드
setVal.has //값이 있는지 없는지 true나 false로 반환해줌

console.log(setVal);