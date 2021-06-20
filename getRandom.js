export function getRandom(){
  //이름이 필요한 통로로 내보낼 때
  return Math.floor(Math.random() * 10)
} //랜덤한 숫자에 * 10을 해서 내림 처리 할것 : 0~9까지의 랜덤한 숫자 반환.

export const user = {
  name: 'Tina',
  age: 100
}

export default 123
//named와 default모두 쓸 수 있음. 