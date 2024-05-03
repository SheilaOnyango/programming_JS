//Functins passed as arguements to other functions

/*function doSomething(callback) {
  console.log("Doing something...");
  callback();
}

function onComplete() {
  console.log("Task Copleted");
}
doSomething(onComplete); */

//function doSomething takes a single parameter called 'callback'. Inside the function, it logs 'doing something' to the console then calls the 'callback' function
//Another function which logs 'task completed' to the console.
//Passing a function as an Arguement; the do something function is called with 'onComplete' as an arguement. This means that 'oncomplete' is passed as a callback to 'doSomething'.
//Execution Flow; When do something is called, it logs doing something to the console. It then invokes the 'callback' function, which is 'onComplete' in this case. As a result, 'Task completed' is logged to the console.
