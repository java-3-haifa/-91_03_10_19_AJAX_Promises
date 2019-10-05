// setTimeout(function () {
//     console.log('Time one');
//     setTimeout(function () {
//         console.log('Second Timeout');
//     },3000);
// },3000);


var p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Time out 1');
        resolve('hello from promise');
        // reject('Something went wrong');
    },2000);
});

p.then(function (data) {
    console.log(data);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Time out 2');
            resolve();
        },2000);
    })
}).then(function () {
    console.log('Then 2');
    return 'Hello from then 2';
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.error(error);
}).finally(function () {
    console.log('finally');
});
