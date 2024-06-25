const num =[1,2,3,4,5,6,7,8,9]

// let newNum = num.map((value)=>{return value+10})

let newNum = num.map((value)=>{return value*10}).map((value)=>{return value+1 })

newNum = newNum.filter((value)=> value>40)

console.log(newNum);