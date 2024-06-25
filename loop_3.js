
//forof loop
const arr1 =[1,2,3,4,5]

for (const num of arr1) {
    console.log(num);
}

const greeting = 'hello wold'

for (const greet of greeting) {
    console.log(`value of each char is ${greet}`)
}


const map = new Map()
map.set('IN','INDIA')
map.set('USA','United states of america')
map.set('fr','france')

console.log(map);


// for (const key of map) {
//     console.log(key);
// }

//print object


for (const [key, value] of map) {
    // console.log(key, ':-', value);
}