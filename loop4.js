
// forinloop
const myobj = {
    cpp :'C++',
    js :'javacsript',
    rb :'rubby',
    swift : 'swift by app'
}

console.log('keys of onject');
for (const key in myobj) {
   console.log(key);
}

console.log('value in object');
for (const key in myobj) {
    console.log(myobj[key]);
}


console.log('pair of keys and values');
for (const key in myobj) {
    console.log(`${key}=>${myobj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
}
//output
/* 
0
1
2
3
4
*/

//print value in array
for (const key in programming) {
    console.log(programming[key]);
}