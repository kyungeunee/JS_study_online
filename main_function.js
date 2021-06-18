// 함수 복습
//함수 선언(기명 함수_함수 이름이 있는 함수.) , 함수 표현 (익명 함수_함수 이름없는 함수)

//함수 선언시, 정의하는 변수 : 매개변수 (아래의 예에서는 x, y)
function sum(x, y){
  //console.log(x + y)
  return x + y //x+y 값을 반환 
  //return 사용할 시, 그 부분에서 함수가 종료되는 것. 그 이하는 코드는 실행되지 않는다. 
}

//sum(1, 3)
//sum(4, 12)
// 함수 사용시 매개변수에 넣어주는 값 : 인수

const a = sum (1, 3) //a = 4
const b = sum (4, 12) //b = 16

//console.log(a) //4
//console.log(b) //16
//console.log(a + b) //20
//함수는 대게 복잡한 로직이 있는 경우가 많아 효율을 위해 여러번 실행하지 않는 것이 좋다. 
//함수 호출 횟수를 줄이는게 좋음. 

//return 예제
function sum2(x, y){
  if(x < 2){
    return
  }
  return x + y //x+y 값을 반환 
}
//console.log(sum2(1,2)) //출력 : undefined
//console.log(sum2(3,4)) //출력 : 7

// 함수에 굳이 매개변수 안넣어줘도 됨. 기본적으로 arguments가 있어서, 배열 형식으로 값을 반환함. 
//하지만 일반적으로 arguments 사용하는건 직관적이지 못해 매개변수를 넣어주는게 좋음. 
function sum3(){
  console.log(arguments) //출력 : Arguments(2) [3, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  return arguments[0] + arguments[1]
}
//console.log(sum3(3,7)) //출력: 10

//화살표 함수
// () => {} vs function (){}

const double = function(x){
  return x * 2
}
//console.log('double: ', double(7)) //double: 14

//위와 동일. function키워드가 없는 대신, 중괄호를 꺽쇠괄호에 화살표 모양으로 넣고 있음. : 화살표 함수
// 화살표 함수 : 기본적인 로직을 축약형으로 줄여나갈 수 있음. 
const doubleArrow = (x) => {
  return x * 2
}
//위와 동일 코드 (중괄호와 return키워드 축약 가능. 함수 최소화 할 수 있음.)
//대부분의 데이터는 잘 출력되지만, 중괄호를 쓰는 객체데이터는 소괄호로 감싸서 출력해야해. ....
const doubleArrow2 = (x) => x * 2
const doubleArrow3 = x => x * 2
const doubleArrow4 = x => ({ name: 'Tina' })
//console.log('doubleArrow: ', doubleArrow(7)) //doubleArrow: 14
//console.log('doubleArrow2: ', doubleArrow2(7)) //doubleArrow2: 14
//console.log('doubleArrow3: ', doubleArrow3(7)) //doubleArrow3: 14
//console.log('doubleArrow4: ', doubleArrow4(7)) //doubleArrow4:  {name: "Tina"}
//화살표함수는 많이 쓸 것.

//즉시 실행 함수
//IIFE, Immediately- Invoked Function Expression

const c = 7
function double_c(){
  //console.log(c * 2) //14
}
double_c();
//함수를 만들자마자 실행할 수 있는 함수임. 
(function (){
  //console.log(c* 2) //14 
})();
//위와 동일한 함수. 이 방법을 더 권장함. 
(function (){
  //console.log(c* 2) //14
}());

//호이스팅 (Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

const d = 4

//double_d() //더블_디 함수를 먼저 선언할 수는 없지... => 에러 나옴. 
//함수 표현식에서는 안됨...
const double_d = function(){
  //console.log(d * 2)
}
double_d()

double_d2() //에러 없음. 호이스팅이 발생한 것. 
function double_d2(){
  //console.log(d * 3)
}
//함수 선언부를 작성하면 함수 호이스팅이 발생하여 가장 최상단으로 끌어올려지게 되어, 
//함수 선언한 부분 위애서도 함수가 호출될 수 있음. 
//권장은 아니지만, 할수 있으므로 혼동하지 않기

//타이머 함수
//setTimeout(함수, 시간): 일정 시간 후 함수 실행
//setInterval(함수, 시간): 일정 간격마다 함수 실행
//clearTimeout(): 설정된 Timeout함수를 종료
//clearInterval(): 설정된 Interval 함수를 종료

const timer = setTimeout(function(){
  console.log('Tina!')
}, 3000) //시간 단위: ms.  3000ms =  3초
// 3초 뒤에 함수가 실행될 것. 

//위와 동일한 함수. 
setTimeout(() => {
  //console.log('Tina!')
}, 3000) //시간 단위: ms.  3000ms =  3초

//interval. 시간이 지날 수록 증가함. 
const intervalTimer = setInterval(function(){
  console.log('Tina Again!')
}, 3000) 

//timeout
const h1El = document.querySelector('h1')
h1El.addEventListener('click', ()=> {
  clearTimeout(timer)
  clearInterval(intervalTimer)
})

//콜백 (Callback)
//함수의 인수로 사용되는 또다른 함수
//특정한 실행 위치를 보장해준다. 

//예) setTimeout(함수, 시간)
//setTimeout이라는 함수를 호출할 때는 함수를 인수로 받음. 

function Timeout(cb){
  setTimeout(() => {
    console.log('Tinaaa~~')
    cb()
  }, 3000)
}
//Timeout()
//console.log('Done!') // 이렇게 되면 timeout함수가 실행되고, 바로 console log가 출력되므로 바로 done이 나옴 

Timeout(()=> {
  console.log('Done!')
}) //콜백함수. 콜백함수 내부에서 console log 출력
// cb <= ()=> {console.log('Done!')}  이 함수 전체 부분이 cb로 들어가게 되는것. 매개변수에 함수가 인수로 들어가는것























