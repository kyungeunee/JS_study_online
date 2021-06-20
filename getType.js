export default function getType(data){
  //export뒤에 default 붙여주면 기본 통로로 나갈 수 있음. data에 이름을 따로 지정할 필요가 없음.
  //export default getType(data) 로 써도 된다. 
  return Object.prototype.toString.call(data).slice(8,)
}