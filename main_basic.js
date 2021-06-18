//조건문 if else

import random from './getRandom'

//console.log(random())

const a = random()

if (a === 0 ){
  console.log('a is 0')
} else if(a === 2) {
  console.log('a is 2')
} else{
  //console.log('rest...')
}

//조건문 switch
// a에 대한 조건이 딱 떨어질 때 사용하기 더 편리함 

switch(a){
  case 0: //a가 0일 때
    console.log('a is 0')
    break
  case 2:
    console.log('a is 2')
    break
  case 4:
    console.log('a is 2')
    break
  default:
    //console.log('rest...')
}

// 반복문 (for statement)
//for (시작조건; 종료조건; 변화조건) {}
const ulEl = document.querySelector('ul')
//console.log(ulEl) // => 이렇게 했을 때 ul이 나오면 ul tag를 잘 찾을 수 있다는 상태이다. 

for (let i = 0; i < 10; i += 1 ){ 
  // 값이 재할당 될 수 있도록 let i 변수 선언. 
  //console.log(i)
  const li = document.createElement('li')
  //실제로 뭔가가 쓰이는건 아니지만 메모리 상에 li태그를 만들어줘서 const변수 li에 넣어준다.
  li.textContent = `list-${i + 1}` //list-1, list-2, list-3을 출력하는 li 태그 만듬. 
  if((i+1) % 2 === 0){ //짝수 번 클릭시에만 나타남.
    li.addEventListener('click', function(){ //li태그에 클릭 이벤트 추가
      console.log(li.textContent) //li 태그 클릭시 li태그 내 문자가 출력됨
    })
  }
  ulEl.appendChild(li) //ul 태그 안에 li 태그 만들어짐. 
}

//변수 유효범위 (Variable Scope)
//var, let, const

function scope(){
  if(true){
    //console.log(c) //유효한 범위이기는 하나, 선언되기 전에 출력하므로 undefined가 나옴. 
    const c = 123
    //console.log(c) // 이땐 동작
  }
  //console.log(c) //이때는 에러임. 이 이유는 c가 선언된 유효 범위가 if문 안쪽이기 때문. 
}

scope()

function scope2(){
  //var 변수는 블록레벨의 유효범위가 아닌 함수 레벨의 유효범위를 가짐. 
  if(true){
    console.log(d) //선언되지 않았기에 undefined
    var d =456
    console.log(d) //456출력
  }
  console.log(d) //456출력. => 블록레벨의 단계가 아닌 함수단계여서 의도하지 않은 범위에서 사용가능하며, 
                 // 메모리를 차지하여 메모리 누수가 될 수 있음. 블록 레벨의 유효범위가 더 관리하기 용이함. 
}

scope2()

//형변환 (Type conversion) _ 자료형 변환

const e = 1
const f = '1'

console.log(e === f) //false
console.log(e == f) //true
// === : 일치연산자 / == : 동등 연산자 
// == 동등 연산자 사용하게 되면 기본적으로 형 변환이 일어난다. 되도록이면 안쓰는걸 권장. 

//Truthy (참 같은 값)
//true, {}, [], 1, 2, 'false', -12, '3.14' ...

//Falsy (거짓 같은 값) falsy값 정도는 기억해 주세요
// false, '', null, undefined, 0, -0, NaN(Not a Number)
//NaN : 숫자에서 연산되는 값이지만, 값이 숫자는 아님... 숫자와 없는 값을 연산했을 시...

if (true){
  console.log(123) //123 출력
}
if (false){
  console.log(456) //출력값 X
}
if ('false'){ //문자형으로 false입력하면 true가 되는 매직매직매직
  console.log(789) //789 출력
}










