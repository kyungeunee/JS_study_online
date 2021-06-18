//클래스 - 생성자 함수 (prototype)
//다른 언어의 클래스와는 약간 다른 개념.
const tina = {
  //객체데이터로 이루어진 변수 tina 선언
  firstName: 'Tina',
  lastName: 'Kim', //속성(property)
  getFullName: function(){
    return `${this.firstName} ${this.lastName}` 
    //그레이브. 벡틱 기호. 그 사이에 값은 보간되어 들어감. `${} ${}` 
    //this는 이 함수가 실행되어지는 객체데이터를 지칭. 즉, tina를 의미.
    //tina라는 변수이름으로 대체해도 되지만, 변수는 언제나 바뀔수도 있기때문에 this 를 사용

  } // property에 함수가 선언이 되어져 있다면 method임.
} //통틀어서 member(멤버)라 부름.
//console.log(tina) //{firstName: "Tina", lastName: "Kim", getFullName: ƒ}firstName: "Tina"getFullName: ƒ getFullName()lastName: "Kim"__proto__: Object
//console.log(tina.getFullName()) //Tina Kim
//이렇게 계속 만들어내면 메모리 많이 사용되므로 비효율적임. 

//위와 동일하게 class써서 표현함.
function User(first, last){
  // 일반 함수랑 구분하기 위해 camelCase아닌 Pascal케이스(대문자)로 사용함. 
  this.firstName = first
  this.lastName = last
} //firstName, lastName은 그때그때 생성자 함수로 값이 다르게 들어오니까 통일하여 메모리를 관리하기 어렵..

User.prototype.getFullName2 = function(){
  return `${this.firstName} ${this.lastName}`
} //getFullName2는 로직이 완벽히 같기 때문에 통합해서 효율적으로 메모리를 관리할 수 있음. 
//인스턴스가 얼마나 생성이 되던, 이 함수는 한번만 메모리에 저장된다. = 아주 효율적


const tinytina = new User('Tina', 'Kim')
//user함수 = 생성자 함수 (하나의 객체 데이터를 생성한다)
//new 라는 키워드를 통해 생성된 함수로 실행한 결과물을 반환하여 선언된 변수를 인스턴스라 함. (tinytina, amy, neo 모두 instance) 
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

//console.log(tinytina.getFullName2()) //Tina Kim
//console.log(amy)
//console.log(neo)

//this
//일반(Normal)함수는 호출 위치에 따라 this를 정의함.!!
//화살표 (Arrow)함수는 자신이 선언된 함수 범위에서 this정의!

const tina3 = {
  name: 'Tina', 
  normal: function(){
    console.log(this.name) //normal이 호출되는 위치에서 this가 정의.즉, tina3에서 호출됨. 
  },
  arrow: () => {
    console.log(this.name) //arrow가 선언된 함수 범위에서 정의. 
    //즉, this가 뭘 지칭하는지 모르고, 그 this의 name을 찾으려 하니...뭔지 모르는 것.
  }
}

//tina3.normal() //normal method 실행 //Tina
//tina3.arrow() //arrow method 실행 //undefined

const amy2 = {
  name: 'Amy',
  normal: tina3.normal, //normal 데이터 부분이 들어가는것, 즉, function(){~~} 이게 그대로 들어가
  arrow: tina3.arrow //arrow 데이터 부분이 들어가는것, 즉, () => {~~} 이게 그대로 들어가
}
//amy2.normal() //tina3.normal()과 동일. amy가 this.
//amy2.arrow() // tina3.arrow()와 동일


//Pascal case로 된 이름. 생성자 함수!
function User_this(name){
  this.name = name
} 

User_this.prototype.normal = function(){
  console.log(this.name)
} 

User_this.prototype.arrow = () => {
  console.log(this.name)
} 

const tina4 = new User_this('Tina')

//tina4.normal()
//tina4.arrow()

const timer = {
  name: 'tina~!',
  timeout: function(){
    setTimeout( function(){
      console.log(this.name) //setTimeout 함수 어딘가에서 실행. 
    }, 2000)
  },
  timeout2: function(){
    setTimeout( () => {
      console.log(this.name) //화살표 함수가 만들어진 함수 내에서 정의하기 때문에 
      //timeout2 메소드를 정의한 함수 내에서 정의가 되는것. 그 함수는 객체데이터 timer를 의미. 
      //여기서 this = timer
    }, 2000)
  }//timer 함수들 쓸 때는 콜백함수로 일반 함수보다는 화살표 함수 쓰는 것이 더 활용도가 높음. 
}
timer.timeout()
timer.timeout2()

//추가)
const tina5 = {
  name: 'Tina',
  normal: function(){
    console.log(this.name)
  },
  normal2(){
    //위 : function 부분 지워도 동일하다. normal = normal2
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  } 
}

tina5.normal() //Tina
tina5.normal2() //Tina
tina5.arrow() //undefined

//ES6 Classes 

// function User2(first, last){
//   this.firstName = first
//   this.lastName = last
// } 
// User2.prototype.getFullName3 = function(){
//   return `${this.firstName} ${this.lastName}`
// } 

//위 주석처리된 내용과 동일. 
//좀더 깔끔하게 만들 수 있다 ㅎㅎ
class User2{
  constructor(first, last){
    //constructor함수임.
    this.firstName = first
    this.lastName = last
  }
  getFullName3(){
    //prototype 속성을 사용하지 않고도 해당 속성으로 만들어지는 메소드 정의하는 것.
    return `${this.firstName} ${this.lastName}`
  }
}


const tina_= new User2('Tina', 'Kim')
const amy_ = new User2('Amy', 'Clarke')
const neo_ = new User2('Neo', 'Smith')

console.log(tina_.getFullName3()) //Tina Kim
console.log(amy_)
console.log(neo_)

//상속 (확장)
class Vehicle { 
  //Vehicle class
  constructor(name, wheel){
    //constructor 함수
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
// myVehicle이라는 변수를 선언. 인스턴스.

class Bicycle extends Vehicle {
  //extends : 확장 키워드 (=상속)
  //Vehicle에 대한 정보를 bicycle이라는 클래스에 확장시킴., 상속함
  constructor(name, wheel){
    super(name, wheel)
    //super에 쓰이는 name, wheel은 line158의 Vehicle 클래스 내부의 constructor의 name, wheel에 들어가게 된다.
    //미리 만들어진 클래스에 추가적으로 살을 붙여서 상속하여 쓸 수 있다는 개념이다.
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)

console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle{ //진정한 의미의 확장..!
  //기본적으로 정의되어져 있는 기능을 가져다가 쓸 수 있음.
  constructor(name, wheel, license){ //인수 추가
    super(name, wheel)
    this.license = license 
  }
}

const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar)