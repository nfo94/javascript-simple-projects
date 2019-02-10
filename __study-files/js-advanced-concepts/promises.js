/**
 * Simply put: A callback is a function that is to be executed
 * after another function has finished executing — hence the name 
 * ‘call back’.
 */

let promiseToCleanTheRoom = new Promise(function(resolve, reject){
  //change below to see resolve and reject 
  let isClean = false;
  if(isClean){
    resolve('clean');
  }else{
    reject('not clean');
  }
})

// if resolved
promiseToCleanTheRoom.then(function(fromResolve){
  console.log('The room is ' + fromResolve);
}).catch(function(fromReject){
  console.log('The room is ' + fromReject);
})