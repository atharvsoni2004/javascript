const heros =['spiderman','batman','ironman','thor','hulk']

//const values =  heros.forEach((item)=>
// {
//     console.log(item);
// })

// console.log(values);

const num = [1,2,3,4,5,6,7,8,9,10]

// const value = num.filter((digit)=>{
//  return    digit > 4
 
// })

const newarr = []

  num.forEach((value)=>{
    if (value > 4) {
         return newarr.push(value)
    }
})

// console.log(newarr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let userBooks = books.filter((module)=> module.genre =='Non-Fiction')
 console.log(userBooks); 

  userBooks = books.filter((module)=>{return module.publish >2000})
  console.log(userBooks);