// 산술 연산자 (arithmetic operator)_ 더하기 빼기 곱하기 나누기
// + - * / %

//할당 연산자 (assignment operator)
//+= -= *= /= %=

let a = 2 // const 특성을 가진 a 라는 변수에 2의 값을 할당한다. 
//a = a + 1
a += 1 //+= 할당 연산자. a+1값을 다시 a에 넣는것.

// 비교 연산자 (comparison operator)
// === : 일치하는지 확인. 일치시 true, 불일치시 false
//!== : 불일치하는지 확인. 불일치시 true, 일치시 false
// < , > , <= , >=  숫자 비교 (미만, 초과, 이하, 이상)

// 논리 연산자 (logical operator)
// && : AND연산자. 전부 true인 경우만 true. 하나라도 거짓이면 false
// || : OR 연산자. 하나만 true여도 true. 전부 거짓이여야 false
// ! : NOT연산자. 부정 연산자. 특정 데이터의 반대값. 

//삼항 연산자 (ternary operator)
// : 항이 세개 있는 것. ? 와 : 을 이용해서 조건을 만든 것임. 

const b = 1 < 2  //1 < 2가 참이므로 b는 true인 boolean데이터일 것 

if (b){
  console.log('참')
}else{
  console.log('거짓')
}

console.log( b ? '참' : "거짓")
//?를 기준으로 그 앞의 값을 확인해야해
//? 앞의 값이 true면 : 앞의 값을 출력, false면 : 뒤의 값을 출력한다.