//JS Data실습 

//1. 가져오기, 내보내기
//JS코드 끼리는 import 카워드로 가져올 수도 있고, export키워드로 내보낼 수도 있음. 
//가져오는건 import라는 문법을 통해 가져옴. 내보낼 때는 두가지의 방식이 있는데 이름을 지정하는지 안하는지에 따라 다름. 
//이름을 지정하면 named export, 지정하지 않으면 default export (기본 통로.)
// ** 내보낼 내용이 1개면 default 쓰고, 여러개라면 named로 쓰면 된다. 

import _ from 'lodash' //from `node_modules` !
//node modules에서 찾아서 가지고 오는것
import getType from './getType' // getType.js 
//default type이라 getType이라고 꼭 이름 안붙여도 됨. 다른 이름 써도 된다.
//undefined export는 이름을 지정하지 않으니까 1파일에 1개만 내보낼 수 있음. 

//import {getRandom, user as tina} from './getRandom' //getRandom.js
//named export된 애로 나온 데이터를 받을 때는 중괄호를 사용해야함. 
//그 안의 이름은 import하는 함수의 이름과 동일해야 함. 
//named export는 이름을 다 지정해주니 1파일에 여러 개 내보낼 수 있음. 
// 다른 이름을 쓰고 싶으면 as 이용해서 명칭 변경해주면 됨. 
import * as R from './getRandom'
//getRandom 내의 getRandom 전체를 import
// * : wildcard. 모든값을 가져오기할 수 있다. 모든 내보내기 데이터를 의미함. 

console.log(_.camelCase('the Hello world'))
console.log(getType([1, 2, 3]))
//console.log(getRandom(), getRandom())
console.log(R)

//-----------------------------------------------------
// 2. lodash 사용하기
//구글에 lodash 검색해보기.

//1) _.uniq : 배열 내 중복된 값을 제거하고 출력
const usersA = [
  { userId: '1', name: 'Tina'  },
  { userId: '2', name: 'Sam'  }
]
const usersB = [
  { userId: '1', name: 'Tina'  },
  { userId: '3', name: 'Amy'  }
]

const usersC = usersA.concat(usersB) 
//concat: usersA와 usersB를 이어 usersC로 반환.
console.log('concat', usersC) //concat (4) [{…}, {…}, {…}, {…}]
console.log('uniqBy', _.uniqBy(usersC, 'userId')) //uniqBy (3) [{…}, {…}, {…}]
//_.uniqBy(배열데이터, 중복을 구분할 고유 속성)
//uniqBy 메소드 실행하면 중복된 내용을 없애줄 수 있음.
const usersD = _.unionBy(usersA, usersB, 'userId')
//_.unionBy(배열데이터1, 배열데이터2, 고유 속성)
//두 배열 데이터를 고유 속성만으로 합쳐줌. 
//** uniqBy는 배열데이터 1개일때, unionBy는 배열데이터 여러개일때 사용.
console.log('unionBy', usersD)

const users = [
  { userId: '1', name: 'Tina' },
  { userId: '2', name: 'Sam' }, 
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name: 'Amy' })
//_.find(배열, 찾을 내용) : 값 찾기
const foundUserIndex = _.findIndex(users, { name: 'Amy' }) 
// : 값에 대한 배열 index찾기
console.log(foundUser) //{userId: "3", name: "Amy"}
console.log(foundUserIndex) //2 : 배열 데이터는 zero base 0 부터

_.remove(users, { name: 'Tina' })
//제거하기
console.log(users) 


//-----------------------------------------------------
//3. JSON
// JSON(제이슨[1], JavaScript Object Notation)은 속성-값 쌍( attribute–value pairs and array data types (or any other serializable value)) 
// 또는 "키-값 쌍"으로 이루어진 데이터 오브젝트를 전달하기 위해 인간이 읽을 수 있는 텍스트를 사용하는 개방형 표준 포맷이다. (by 위키백과)
// 서버와의 통신에서 데이터를 주고받는 하나의 포멧으로 사용. 
//JSON의 공식 인터넷 미디어 타입은 application/json이며, JSON의 파일 확장자는 .json이다.
//-----------------------------------------------------

//JSON (Javascript Object Notation). JS의 객체 표기법
//nodeJS환경헤서 npm은 package라는 이름의 JSON파일로 이 환경의 구성 옵션을 만들어 관리하는 것. (npm init -y로 만들수 있음.)
//JSON은 하나의 데이터처럼 관리할 수 있음. 
//기본적으로 JSON은 하나의 데이터라서 주석자체도 데이터 취급함...ㅠㅠ

import myData from './myData.json' //Js파일만 확장자 생략 가능

console.log(myData) //JSON이란 파일은 문자 데이터임. 

const userJ = {
  name: 'Tina',
  age: 22,
  emails: [
    'gi@naver.com',
    'gi@gmail.com'
  ] 
}
console.log('userJ', userJ)

const str = JSON.stringify(userJ)
//JSON :  전역 객체. 이미 JS에 정의되어있으니 언제든 사용가능,  
//stringify(인수)  : JSON의 형태로, 문자열로 만들어주는 메소드.
//인수는 그냥 모든 형태의 데이터를 넣을 수 있음.
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
//parse : JS 데이터 (실제 객체 데이터)처럼 사용할 수 있음. 가공할 수 있는 데이터로 만들어주는것. 
console.log('obj', obj)

//** 정리) stringify는 JS 데이터를 JSON화 시킴, 즉 문자열로 변경, 
//        parse는 JSON데이터를 JS 데이터화 시킴. 문자열을 가공할 수 있는 데이터들로 만들어 객체 데이터로 만듦.

//-----------------------------------------------------
//3. Storage
//개발자도구 보면 console쪽 application 부분에 보면 Storage있음. 
//Local Storage는 우리가 현재 사용하고 있는 프로젝트가 하나의 목록으로 있음. (http://localhost:1234/)
//  해당 주소로 들어가보면 key, value값으로 나눠져 있음. => 데이터 저장소임
//  해당 스토레지의 데이터는 만료되지 않음. 반영구적이라 일반적으로 활용도가 더 높음.
//Session Storage
//  페이지 세션이 끝날 때(= 페이지를 닫을 때) 사라지는 데이터 저장소. (데이터 만료됨.)

// 구글 local storage mdn 검색.
// window.localStorage 
//  :localStorage를 사용하면 storage 객체에 접근할 수 있음. 
// => 저장된 데이터는 브라우저 세션간에 공유됨. : local storage에 저장되는 데이터는 해당하는 도메인의 주소에 종속되서 저장됨. (=하나의 사이트에 저장됨.)

localStorage.setItem('myCat', 'Tom')
// key, value 문자데이터 형태로 저장.
// 객체 데이터의 경우는 JSON으로 stringify해서 사용하고, 실 사용할 때는 parsel해서 사용. 
const cat = localStorage.getItem('myCat')
// 특정 아이템을 읽어오기만 할 때는 getItem. key 값만 넣어주면 얻을 수 있어 인수가 1개만 사용됨. 
localStorage.removeItem('myCat')
//제거하기

const userS = {
  name: 'Tina',
  age: 22,
  emails: [
    'gi@naver.com',
    'gi@gmail.com'
  ] 
}
localStorage.setItem('userS', userS)
//이렇게만 저장하면 객체데이터라 value = [Object Object] 로 출력됨. 
localStorage.setItem('userS', JSON.stringify(userS)) //userS데이터를 문자화해서 넣어줌
//출력:  value = {"name":"Tina","age":22,"emails":["gi@naver.com","gi@gmail.com"]}

console.log(localStorage.getItem('userS')) //문자 데이터 형태로 출력.
console.log(JSON.parse(localStorage.getItem('userS'))) //JS형태로 출력
//localStorage.removeItem('userS')
const str_data = localStorage.getItem('userS')
const obj_data = JSON.parse(str_data)
obj_data.age = 23
console.log(obj_data)
localStorage.setItem('userS', JSON.stringify(obj_data))
//lodash 패키지 통해 데이터 관리를 더 쉽게 할 수 있음. 
//lowdb 검색 


//-----------------------------------------------------
// 3. Omdb API 사용하기
//구글에 omdbapi 검색해보기.(open movie api)
// http://www.omdbapi.com/?apikey=[yourkey]& => 이런식으로 주소를 사용해서 api 요청할 수 있는데 이 요청을 위한 parameter 필요.
// api key : 사이트 내에서 이메일 입력햐서 key 받음. 
// 쿼리(검색) 스트링(문자)   : 주소? 속성 = 값 & 속성 = 값 & 속성 = 값
// 주소 (웹사이트, 서버주소..) ? apikey = 키 값.  => 이 키 값 넣어서 요청하면 특정 주소에서 이 키 값을 통해 사용자를 인증함. 
// & 속성 = 값 : 속성 (S) 입력해서 영화 search 할 수 있음. &를 통해 속성들을 구분함. 

//http://www.omdbapi.com/?apikey=7******&s=frozen
//아래와 같이 JSON 기반의 string형태로 표시됨.
//{"Search":[{"Title":"Frozen","Year":"2013","imdbID":"tt2294629","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"},{"Title":"Frozen II","Year":"2019","imdbID":"tt4520988","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjA0YjYyZGMtN2U0Ni00YmY4LWJkZTItYTMyMjY3NGYyMTJkXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_SX300.jpg"},{"Title":"Frozen","Year":"2010","imdbID":"tt1323045","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTc5MTg0ODgxMF5BMl5BanBnXkFtZTcwODEzOTYwMw@@._V1_SX300.jpg"},{"Title":"The Frozen Ground","Year":"2013","imdbID":"tt2005374","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BYzM3Mjc1ZDItMTE1OC00ODk0LWFmZjctYzgxZmYwNzliMTdkXkEyXkFqcGdeQXVyMTAxNDE3MTE5._V1_SX300.jpg"},{"Title":"Frozen Planet","Year":"2011–2012","imdbID":"tt2092588","Type":"series","Poster":"https://m.media-amazon.com/images/M/MV5BOGM5YWU2N2QtYjVhZi00MzYyLTk0ODctYmVlNDZlMjU5N2Q5XkEyXkFqcGdeQXVyMzU3MTc5OTE@._V1_SX300.jpg"},{"Title":"Frozen River","Year":"2008","imdbID":"tt0978759","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk2NjMwMDgzNF5BMl5BanBnXkFtZTcwMDY0NDY3MQ@@._V1_SX300.jpg"},{"Title":"Frozen Fever","Year":"2015","imdbID":"tt4007502","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMjY3YTk5MjUtODBjOC00NzAwLTgyYjYtMzFmMzAxOTZmOWRlXkEyXkFqcGdeQXVyNDgyODgxNjE@._V1_SX300.jpg"},{"Title":"Olaf's Frozen Adventure","Year":"2017","imdbID":"tt5452780","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BOWQ1NjNiZTEtYzc3Zi00Nzk4LTg5MTYtNzc5NmJjYTg1MGQ4XkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_SX300.jpg"},{"Title":"Frozen Stiff","Year":"2002","imdbID":"tt0301634","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTk5NDc0MjU3Nl5BMl5BanBnXkFtZTcwNDc3NTU3OQ@@._V1_SX300.jpg"},{"Title":"Frozen Land","Year":"2005","imdbID":"tt0388318","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BMTczMjgyMjQxNF5BMl5BanBnXkFtZTcwNjUxMjU3Mg@@._V1_SX300.jpg"}],"totalResults":"286","Response":"True"}
//이거를 js 코드에서 처리하기 위해 axios 라는 패키지를 사용할 것..

//Promise based HTTP client for the browser and node.js

import axios from 'axios'

function fetchMovies(){
  axios
    .get('https://www.omdbapi.com/?apikey=70c&s=frozen')
    .then((res) => {
        console.log(res)
        const h1El = document.querySelector('h1')
        const imgEl = document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title 
        imgEl.src = res.data.Search[0].Poster
    })
    //메소드 체이닝
}
fetchMovies()
//데이터 처리 방식. 콘솔창에서 데이터가 어떻게 출력되는지 확인을 많이 해보는게 중요함당@@