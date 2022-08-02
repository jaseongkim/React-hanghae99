let list = [
  {
    id:1,
    text:0
  },
  {
    id:5,
    text:1
  }
]

let map = list.map((x) => {
  if(x.text === 0){
    x.text = 5
    return x
  } else {
    return x
  }
  
})
 
console.log(map)