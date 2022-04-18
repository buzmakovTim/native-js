
// Promises

let p = new Promise((resolve, reject) => {

    let a = 1 + 1; 
    
    if(a === 2){
        resolve('Success')
    } else {
        reject('Failed')
    }
})


p.then((message) => {
    console.log('This is in the then '+ message);
}).catch((message) => {
    console.error('This is in catch '+ message);
})


console.log("====== EXAMPLE using call back! ======")
// // Example using call back function
const userLeft = true;
const userWatchingTheVideo = false;

function watchTheVideoCallBack(callBack, errorCallBack) {

    if(userLeft){
        errorCallBack({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingTheVideo) {
        errorCallBack({
            name: 'User watching the video',
            message: 'From reject state'
        })
    } else {
        callBack('Thumbs up and Subscribe!');
    }
} 

watchTheVideoCallBack((message) => {
    console.log('Susess ' + message);
}, (error) => { 
    console.log(error.name + " " + error.message);
})
console.log('')

//===========================================================================
console.log("====== EXAMPLE using PROMISE! ======")
// Example using call back function


function watchTheVideoPromise() {

    return new Promise((resolve, reject) => {
        if(userLeft){
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingTheVideo) {
            reject({
                name: 'User watching the video',
                message: 'From reject state'
            })
        } else {
            resolve('Thumbs up and Subscribe!');
        }
    })    
} 
watchTheVideoPromise().then((message) => {
    console.log('Susess ' + message);
}).catch((error) => { 
    console.log(error.name + " " + error.message);
})
console.log('')


// =============================================================
// Another example of using promises
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded');
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded');
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded');
})

// Will wait till all promises are resolved
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages);
}).catch((message) => {
    console.log(message);
}) 

// Will wait till first is completed 
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
}) 

