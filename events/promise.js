const promiseOne = new Promise (function(resolve,reject)
{
    setTimeout(() => {
        console.log('Async task is completed');
        resolve()
    }, 1000);
})

promiseOne.then(function()
{
    console.log('promise consumed');
})


new Promise(function(resolve,reject)
{
    setTimeout(() => {
        console.log('async 2 is completed');
        resolve()
    }, 1000);
}).then(function()
{
    console.log('whole process is completed');
})