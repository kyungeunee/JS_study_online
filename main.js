import _ from 'lodash'

// JS 데이터
//  1. String
//1) String.prototype.indexOf()
//  indexof() 메서드는 호출한 String객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환함. 
//  일치하는 값이 없으면 -1을 반환.

//String.prototype.indexOf()
const result = 'Hello world!'.indexOf('world')
const result2 = 'Hello world!'.indexOf('Tina')
console.log(result) // 6
console.log(result2) // -1

const strWorld = 'Hello world!'
const str = '0123'

console.log(strWorld.indexOf('tina') !== -1)
console.log(str)
console.log(str.length) //문자열의 길이를 반환. 

//slice(인수1, 인수2) : 인수1부터 인수2 직전까지
console.log(strWorld.slice(0, 4)) // Hell
console.log(strWorld.slice(6, 11)) // world

//replace (인수1, 인수2): 인수1을 인수2로 교체
console.log(strWorld.replace('world', 'Tina')) //Hello Tina!
console.log(strWorld.replace(' world!', '')) //Hello

//match(정규표현식) : 배열데이터로 나옴. 
const strEmail = 'gim530@naver.com'
console.log(strEmail.match(/.+(?=@)/)) //["gim530", index: 0, input: "gim530@naver.com", groups: undefined]
//정규표현식 /.+(?=@)/ 을 통해 특정데이터를 매치 시킬수 있으며 이를 배열데이터로 반환.
//@기준으로 앞쪽만 출력하면 됨. (? = @) : 골뱅이 기준으로 앞쪽 일치하는지 여부 파악하는것
// .+ : .은 앞에 한글자인데 .+는 그 앞부분을 최대한 많이 일치시키겠다. 
console.log(strEmail.match(/.+(?=@)/)[0]) //gim530

//trim() : 특정 문자데이터 앞 뒤의 공백을 제거
const strTrim = '      Hello World!  '
console.log(strTrim.trim())



//2. 숫자와 수학.
const pi = 3.14159265358979
console.log(pi) //3.14159265358979

//toFixed(인수) : 숫자데이터에 사용되는 메소드. 인수 = 소숫점의 몇번째까지 사용할 것인지
//출력은 문자 데이터로 나옴. 
const strPi = pi.toFixed(2)
console.log(strPi) //3.14
console.log(typeof strPi) //string

//parseInt, parseFloat : JS에서 제공하는 전역함수들 전체영역들에서 쓸 수 있는 것.
const interger = parseInt(strPi) 
const float = parseFloat(strPi)
console.log(interger) //3
console.log(float) //3.14
console.log(typeof interger, typeof float) //number number

//math math mdn검색해서 사용. 
// 수학적인 상수와 함수를 위한 속성과 메서드를 가진 내장 객체
//JS에 내장되어있음. 수학정보를 가진 객체데이터라보면됨. 

//Math.abs( ) : 절대값 반환 
console.log('abs: ', Math.abs(-12)) //abs: 12

//min, max (인수~~) : 최솟값, 최대값 반환
console.log('min: ', Math.min(2, 8))//min: 2
console.log('max: ', Math.max(2, 8)) //max: 8

//Math.ceil( ) : 올림처림., floor: 내림, round: 반올림 
console.log('ceil: ', Math.ceil(3.14)) //ceil: 4
console.log('floor: ', Math.floor(3.14))//floor: 3
console.log('round: ', Math.round(3.14)) //round: 3

//Math.random() : 랜덤한 숫자(난수) 반환
console.log('random: ', Math.random()) //random: 랜덤한 숫자
//getRandom.js에서 했었어



//3. 배열데이터
//array mdn 검색
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']
//[ 요소, 요소, 요소, ...   ] : 각각의 요소(element, item)의 번호를 index인덱스라 함: indexing

console.log(numbers) //[1, 2, 3, 4]
console.log(numbers[2]) // 3 
console.log(fruits) //['Apple', 'Banana', 'Cherry']
console.log(fruits[1]) //Banana

//.length
console.log(numbers.length) //4
console.log(fruits.length) //3
console.log([1,2].length) //2
console.log([].length) // 0 : 배열이 비어있는지 확인할때 많이 씀. 

//.concat() 
//두개의 배열 데이터를 합쳐주는것. concaternate인가봐
//원본데이터는 손상되지 않는다는점~ 
console.log(numbers.concat(fruits)) // [1, 2, 3, 4, "Apple", "Banana", "Cherry"]
console.log(numbers) //[1, 2, 3, 4]
console.log(fruits) //['Apple', 'Banana', 'Cherry']

//.forEach() 
fruits.forEach(function(element, index, array){
  //콜백. 익명함수 추가. array는 잘 쓰지는 않음. 
  //element대신에 item으로 써도됨. 
  console.log(element, index, array)
})
//결과 : fruits의 인수만큼 3번 실행되는 함수.
//Apple 0 (3) ["Apple", "Banana", "Cherry"]
//Banana 1 (3) ["Apple", "Banana", "Cherry"]
//Cherry 2 (3) ["Apple", "Banana", "Cherry"]

fruits.forEach(function(fruit, i){
  console.log(fruit, i)
}) //위와 동일한거얌.

//.map()
const a = fruits.forEach(function(fruit, i){
  console.log(`${fruit}-${i}`)
}) //보간법으로 문자데이터 사용... 
//forEach는 따로 반환하는 값이 없음.....
console.log(a) // undefined

//forEach와 다르게 map은 return을 써서 값을 반환해줄 수 있음
const b = fruits.map(function(fruit, i){
  return `${fruit}-${i}`
}) 
console.log(b) //(3) ["Apple-0", "Banana-1", "Cherry-2"]

//객체 literal방식으로 만드는 법
const c = fruits.map(function(fruit, i){
  return {
    id: i,
    name: fruit
  }
}) 
console.log(c) 

//화살표함수로 만들기
const d = fruits.map((fruit, i) => ({
  id: i,
  name: fruit
}))
console.log(d) 

//.filter()
//기억이 안날수 있는 우리의 배열데이터들 ㅎ
//const numbers = [1, 2, 3, 4]
//const fruits = ['Apple', 'Banana', 'Cherry']

const a2 = numbers.map(number => number < 3)
console.log(a2) //[true, true, false, false]

const b2 = numbers.filter(number => numbers < 3 )

  //특정 기준으로 필터링하는것. 기준이 true인 경우에만 반환.
console.log(b2) // [1,2]

//find(함수) : 주어진 판별함수를 만족하는 첫번째 요소의 값을 반환. 없다면 undefined를 반환. 
const array1 = [5, 12, 8, 130, 44]
const found = array1.find(element => element > 10)
// => : 화살표함수. 매개변수가 하나면 소괄호 생략. 
//중괄호와 return keyword 도 생략할 수 있고, 그 부분에 인수로 들어가는 새로운 함수를 콜백함수.
//element는 array의 인수를 받아서 시작. 5 => false, 12=> true라서 12반환. 첫요소 반환한것.
console.log(found) // 12

//find 예제2 .findIndex()
const aFind = fruits.find(fruit => /^B/.test(fruit))
  //정규표현식 /^B/ : B로 시작하는(^) 문자데이터
  //가장 처음으로 찾은 데이터를 출력
console.log(aFind) //Banana

const bFind = fruits.findIndex(fruit => /^C/.test(fruit))
console.log(bFind) //2

//.includes()

const aInclude = numbers.includes(3)
console.log(aInclude) //true

const bInclude = fruits.includes('Strawberry')
console.log(bInclude) //false

//.push(인수) .unshift(인수)
//두개는 많이 사용된다아ㅏ
// 원본 수정됨 주의!!!!!!
numbers.push(5) //배열 데이터의 끝부분에 인수를 밀어 넣는 것
console.log(numbers) //(5) [1, 2, 3, 4, 5]

numbers.unshift(0) //배열 데이터의 맨 앞부분에 인수를 넣는 것.
console.log(numbers) //(6) [0, 1, 2, 3, 4, 5]

//.reverse()
//원본 수정됨 주의!!!
numbers.reverse()
fruits.reverse()

console.log(numbers) //(6) [5, 4, 3, 2, 1, 0]
console.log(fruits) //(3) ["Cherry", "Banana", "Apple"]

//.splice(인덱스, 지울 갯수)
//.splice(인덱스, 지울 갯수, 새로 깨워넣을수 있음)
// 삭제 및 끼워넣기 기능이 있다. 
//원본 수정됨 주의!!!!!!!
numbers.splice(2, 1) //배열의 인덱스 2번부터 1개를 지워라!
console.log(numbers) //[5, 4, 2, 1, 0]

numbers.splice(2, 0, 999)
console.log(numbers) // [5, 4, 999, 2, 1, 0] 

fruits.splice(2, 0, 'orange')
console.log(fruits) //["Cherry", "Banana", "orange", "Apple"]





//4. 객체 데이터 
//object mdn검색 후 확인
//정적 메소드 (중간에 prototype이 붙어있지 않음.)
//배열데이터 litertal방식으로 [].reverse() : reverse메소드는 이런식으로 쓸수 있음
//이는 reverse가 prototype에 정의되어 있기 때문에 사용가능한 것.
//객체 {}.메소드는 정의되어 있지 않아서 이런식으로는 사용할 수 없음....ㅠ

//Object.assign()
//해당 메소드는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용함. 
//대상 객체를 반환. 

const target = {a: 1, b: 2}
const source = {b: 4, c: 5}

const returnTarget = Object.assign(target, source)
//target에 source를 병합해버림. 대상 객체인 target에 returnTarget의 값을 반환..
console.log(target)// Object {a: 1, b: 4, c: 5}
console.log(returnTarget) // Object {a: 1, b: 4, c: 5}


const userAge = {
  //key: value
  name: 'Tina',
  age: 22
}
const userEmail = {
  name: 'Tina',
  email: 'gim530@.naver.com'
}

const targetObj = Object.assign(userAge, userEmail)
//Object : JS전역객체 여기에 직접적으로 assign 메소드를 실행
//assign은 object의 prototype으로 만들어진 메소드가 아님. 
//실제 객체 데이터에는 사용 불가 ... : 정적 메소드.
console.log(targetObj) //{name: "Tina", age: 22, email: "gim530@.naver.com"}
console.log(userAge) //{name: "Tina", age: 22, email: "gim530@.naver.com"}
console.log(targetObj === userAge) //true

//참조형 데이터 : 객체데이터 {}, 배열 데이터[], 함수. 메모리의 특정 주소를 참조하여 사용한다.
//targetObj와 userAge는 참조하는 메모리가 동일해진것이라 true가 나오는것.

const a4_1 = { k: 123 }
const b4_1 = { k: 123 }
console.log(a4_1 === b4_1) //false
//a4_1와 b4_1는 생긴 것은 동일하나 다른 객체를 의미. 
//a4_1과 b4_1이 할당된 메모리 주소가 달라서 내부 데이터의 값이 동일하다 하더라도 다른 객체를 의미하게 된다.

//원본의 객체 데이터를 손상시키지 않고 두 데이터를 합치려면....!
//첫 인수를 비어있는 객체 데이터로 넣어주면 된다. 
const targetObjNew = Object.assign({}, userAge, userEmail)
console.log(targetObjNew) 

const targetObjCopy= Object.assign({}, userAge)
console.log(targetObjCopy === userAge) //false 
//원본은 남기고 copy본 만든것. 새로운 주소로 할당한거라 두 개는 같지 않다.


//keys, map
const user = {
  name: 'Tina',
  age: 22,
  email: 'gim530@naver.com'
}

const keys = Object.keys(user)
//property의 이름만 추출해서 새로운 배열로 만들어줌.
console.log(keys) //['name', 'age', 'email']

console.log(user['email']) //인덱스 번호가 아닌 key(property)를 입력하면 됨.
const values = keys.map(key => user[key])
//콜백함수를 반복적으로 사용. 
console.log(values) //["Tina", 22, "gim530@naver.com"]





// 5. 구조 분해 할당 (Destructing assignment)
//비구조화 할당

const user5 = {
  //객체데이터 사용
  name: 'Tina',
  age: 22,
  email: 'gim530@naver.com', 
  address: 'USA'
}

const { name: nickname, age, email, number, address = 'Korea', job = 'doctor'} = user5
//user5객체를 구조 분해해서 내가 원하는 데이터만 사용가능함. 
//이 구조 분해한 애들을 let, const사용한 변수로 만들어 원하는 곳에 사용 가능함.
//name: nickname 처럼 내가 name 항목을 다른 이름으로 대체하고 싶을 때 : 기호 사용.

console.log(`사용자의 이름은 ${nickname}입니다.`) //사용자의 이름은 Tina입니다.
console.log(`${nickname}의 나이는 ${age}세 입니다.`) //Tina의 나이는 22세 입니다.
console.log(`${nickname}의 이메일 주소는 ${email}입니다.`) //Tina의 이메일 주소는 gim530@naver.com입니다.
console.log(number)  //undefined 
console.log(job) //doctor
console.log(address) //USA : 원래의 객체데이터 내용을 우선적으로 사용.
console.log(user5['name'] === nickname) // true

const fruitsNew = ['Apple', 'Banana', 'Cherry']
//배열데이터도 구조 분해 할당 가능. 
const [a5, b5, c5, d5] =fruitsNew
//데이터 타입에 맞게 괄호 종류 사용해야함. fruitsNew는 배열데이터이니 [] 사용
//인덱스 순서대로 넣어주는것..순서대로 추출
console.log(a5, b5, c5, d5) //Apple Banana Cherry undefined

const [, b5_2]=fruitsNew//banana만 추출하고 싶을 때
console.log(b5_2) //banana 



//6. 전개 연산자 (Spread)
console.log(fruitsNew)  //["Apple", "Banana", "Cherry"]
console.log(...fruitsNew) //Apple Banana Cherry
// ...를 앞에 붙이면 문자데이터로 추출이 됨. ... 가 전개하는 연산자임 

function toObject(a6, b6, c6){
  // 객체 데이터로 변환해주는 함수임. 
  return{
    a6: a6, 
    b6: b6,
    c6: c6
  }
}
console.log(toObject(...fruitsNew)) //{a6: "Apple", b6: "Banana", c6: "Cherry"}

const fruitsNew2 = ['Apple', 'Banana', 'Cherry', 'Orange']
function toObjectRest(a6_2, b6_2, ...c6_2){
  // ... 가 매개변수 안으로 들어가면 rest parameter라 함. 그 뒤 나머지를 넣어주는것 
  return{
    //속성의 이름과 데이터의 이름이 동일할 시 축약 가능. 
    a6_2, b6_2,c6_2
  }
}
//위와 동일한 함수 만들기. 
const toObjectRest2 = (a6_2, b6_2, ...c6_2) => ({ a6_2, b6_2, c6_2})

console.log(toObjectRest(...fruitsNew2)) //{a6_2: "Apple", b6_2: "Banana", c6_2: Array(2)}
console.log(toObjectRest2(...fruitsNew2)) //{a6_2: "Apple", b6_2: "Banana", c6_2: Array(2)}

//7. 데이터 불변성(immutability)
//원시데이터: String, Number, Bpplean, undefined, null
//Js에서 쓸 수 있는 기본 데이터
//참조형 데이터: Object, Array, Function
//함수의 인수로 사용되는 또 다른 함수: 콜백함수
//------------------------------
//원시데이터
//=> 메모리에 모든 값이 새로이 기록되는게 아님. 데이터는 불변한다. =데이터 불변성
// 생긴게 같으면 그냥 같은거고, 다르면 다른거임. 
// 메모리
//------------------------------
//|ㄱ: 1  |ㄴ: 4 |ㄷ: 7  |ㄹ:
//------------------------------
//
let a7 = 1
let b7 = 4
console.log(a7, b7, a7 === b7 ) // 1 4 false
// ㄱ메모리에 1값이 할당이 되고, ㄴ 메모리에 4값이 할당됨. 
//a7은 ㄱ 메모리를, b7은 ㄴ 메모리를 참조하여 데이터를 씀. 
// 메모리 주소를 다른걸 보기때문에 false가 나오는 것. 
b7 = a7
//b7에 a7의 주소를 할당하는 것. 
//a7, b7 둘 다 ㄱ 메모리를 참조하여 데이터를 씀. 
console.log(a7, b7, a7 === b7 ) // 1 1 true
a7 = 7
// 7은 새로운 데이터라 ㄷ 메모리에 값이 할당이 되고, a7은 ㄷ메모리를 참조하게 된다.
console.log(a7, b7, a7 === b7 ) // 7 1 false
let c7 = 1
//1은 ㄱ메모리에 있으니까 c7은 ㄱ메모리를 보면됨. 
console.log(b7, c7, b7 === c7 ) // 1 1 true

//참조형 데이터
// => 새로운 데이터를 만들때마다 새로운 메모리에 할당함. =가변한다
// 생긴게 같아도 다른 데이터로 취급될 수 있음. 
// 메모리_객체데이터 예제
//--------------------------------------
//|ㄱ: {k: 1}|ㄴ: {k: 1 }|ㄷ: {  }|ㄹ: {   }
//--------------------------------------
//
let aObj = { k: 1 }
let bObj = { k: 1 }
console.log(aObj, bObj, aObj === bObj) // { k: 1 } { k: 1 } false
//a와 b가 다른 메모리를 바라보고있음. 
//a는 ㄱ 메모리를, b는 ㄴ 메모리를 참조한다.
aObj.k = 7 //ㄱ메모리의 값을 k: 7로 변경. 여전히 aObj는 ㄱ을 참조한다.
bObj = aObj //aObj의 값을 bObj에 할당하는거라 bObj는 ㄱ메모리를 참조하게됨. 
console.log(aObj, bObj, aObj === bObj) //{ k: 7 } { k: 7 } true
aObj.k = 2 //ㄱ메모리의 값을 k: 2로 변경. 여전히 aObj와 bObj는 ㄱ을 참조한다.
console.log(aObj, bObj, aObj === bObj) //{ k: 2 } { k: 2 } true
let cObj = bObj
console.log(aObj, bObj, cObj, aObj === cObj) // { k: 2 } { k: 2 } { k: 2 } true
aObj.k = 9
console.log(aObj, bObj, cObj, aObj === cObj) // { k: 9 } { k: 9 } { k: 9 } true
//a, b, c모두 ㄱ메모리를 참조하고 있으니까 값도 동일, 메모리도 동일! 
//즉, = 의 기본 원리는 메모리의 주소만 같은곳으로 바꿔주는것
//한 쪽 수정하면 다른쪽도 수정할 수 있다는걸 알아야 함!!!

//따라서, 참조형 데이터의 경우 메모리를 동시에 할당하려는게 아니라 값을 변경하고자 하는거라면, 복사를 사용할 것.
//복사 - 얕은 복사 : 표면만 복사, 깊은 복사 : 내부에 있는 모든 참조관계까지 복사. 


// 8. 얕은 복사(Shallow copy), 깊은 복사(Deep copy)
// 객체 데이터 안에 내용이 간단하면 얕은 복사로도 충분히 사용가능하지만, 
// 아래 예시처럼 객체안에 배열 데이터처럼 데이터 구조가 복잡할 시 깊은 복사를 사용하는걸 고려해야 한다.
// 메모리_복사 예제
//--------------------------------------
//|ㄱ:    |ㄴ:   |ㄷ:     |ㄹ: 
//--------------------------------------
//
const user8= {
  name: 'Tina',
  age: 22,
  emails: ['gim530@naver.com'] 
}
const copyUser = user8
console.log(copyUser === user8) //true
//copyUser와 user8모두 ㄱ메모리를 참조
user8.age = 27

console.log('user', user8) //user {name: "Tina", age: 27, emails: Array(1)}
console.log('copyUser', copyUser) //copyUser {name: "Tina", age: 27, emails: Array(1)}
//user8과 copyUser가 바라보는 메모리가 동일. 서로 영향을 갖고있음. 

//복사하기 - 얕은복사!
const copyUser2 = Object.assign({}, user8)
//동일 코드 : const copyUser2 = {...user8} 전개 연산자 
//대상객체에 출처 객체의 값을 넣어 반환한다.
//ㄴ메모리에 새로이 user8에 대한 데이터가 카피가되고, copyUser2는 ㄴ 메모리를 참조한다.
console.log(copyUser2 === user8) //false
user8.age = 42
console.log('user', user8) //user {name: "Tina", age: 42, emails: Array(1)}
console.log('copyUser2', copyUser2) //copyUser2 {name: "Tina", age: 27, emails: Array(1)}

console.log('------')
console.log('------')

user8.emails.push('gim0627@gmail.com')
console.log(user8.emails === copyUser2.emails) //true
console.log('user', user8) //user {name: "Tina", age: 42, emails: Array(2)}
console.log('copyUser2', copyUser2) //copyUser2 {name: "Tina", age: 27, emails: Array(2)}

//깊은 복사 : Js로 구현하기 조금 어려워서 lodash 설치해줄것.
//npm i lodash 설치 후 main.js에 import _ from 'lodash' 넣어준다.
// lodash 대신 _ 써도 되는 것
const userA= {
  name: 'Tina',
  age: 22,
  emails: ['gim530@naver.com'] 
}

//clone deep 사용 : clone method와 유사하나, 값을 재귀적으로 복사하는 개념
//This method is like -.clone except that it recursively clones value
//재귀 : 반복 실행
const copyUserA = _.cloneDeep(userA)
console.log(copyUserA === userA) //false

userA.age = 50
console.log('userA', userA) //userA {name: "Tina", age: 50, emails: Array(1)}
console.log('copyUserA', copyUserA) //copyUserA {name: "Tina", age: 22, emails: Array(1)}

userA.emails.push('gim0627@gmail.com')
console.log(userA.emails === copyUserA.emails) //false
console.log('userA', userA) //userA {name: "Tina", age: 50, emails: Array(2)}
console.log('copyUserA', copyUserA) //copyUserA {name: "Tina", age: 22, emails: Array(1)}
