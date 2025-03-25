// Asynchronous JavaScript

// Topics to cover
// • Timeouts and Intervals
// • Callbacks
// • Promises
// • async await
// • Event loop

// • What and why of async javascript
// • Understand and solve exercise problems on timeouts,callbacks. promises and async await
// • Understand how all of them behave with respect to the event loop

// Async JavaScript - What and Why?
// In its most basic form, JavaScript is a synchronous, blocking. single-threaded language
// • To make async programming possible, JavaScript alone isn't enough. We also need the web browser

// Synchronous
// • If we have two functions which log messages to the console, code executes top down, with only one line executing at any given time

// Blocking
// • No matter how long a previous process takes, the subsequent processes won't kick off until the former is completed
// • If function A had to execute an intensive chunk of code, JavaScript has to finish that without moving on to function B. Even if that code takes 10 seconds or I minute

// Single-threaded
// • A thread is simply a process that your javascript program can use to run a task
// • Each thread can only do one task at a time
// Javascript has just the one thread called the main thread for executing any code

// Async JavaScript - How?
// • Just JavaScript is not enough
// • We need new pieces which are outside of JavaScript to help us write asynchronous code which is where web browsers come into play
// • Web browsers define functions and APIs that allow us to register functions that should not be executed synchronously. and should in$ead be invoked asynchronously when some kind of event occurs
// • For example, that could be the passage of time ( setTimeout or setlnterval), the user's interaction with the mouse (addEventListener), or the arrival of data over the network (callbacks, Promises. async-await)
// • You can let your code do several things at the same time without stopping or blocking your main thread

// Timeouts & Intervals
// The traditional methods JavaScript has available for running code asynchronously -
// • after a set time period elapsed or
// • at regular intervals of time
// • setTimeout()
// • setlnterval()

// setTimeout()
// • The setTimeout() function executes a particular block of code once after a specified time has elapsed
// • The first parameter is a function to run, or a reference to a function defined elsewhere
// • The second parameter is a number representing the duration in milliseconds to wait before executing the code
// • After the second parameter, you can pass in zero or more values that represent any parameters you want to pass to the function when it is run
// • To clear a timeout, you can use the clearTimeout() method passing in the identifier retumed by setTimeout as a parameter
// • A more practical scenario is clearing timeouts when the component is unmounting to free up the resources and also prevent code from incorrectly executing on an unmounted component.

// setlnterval()
// • The setlnterval() function repeatedly runs the same code over and over again at regular intervals
// • The first parameter is the code to execute
// • The second parameter is the duration in milliseconds
// • After the second parameter, you can pass in zero or more values that
// represent any parameters you want to pass to the function when it is run
// • Intervals keep running a task forever so you should clear the interval when appropriate

// Noteworthy points
// 1. Timers and intervals are not part of JavaScript itself. They are implemented by the browser and setTimeout and setlnterval are basically names given to that functionality in JavaScript
// 2. duration parameter is the minimum delay, not guaranteed delay
// 3. It is possible to achieve the same effect as setlnterval with a recursive setTimeout

// Callbacks
// In JavaScript, functions are first class objects
// • Just like an object, a function can be passed as an argument to a function
// • A function can also be returned as values from other functions
// • Any function that is passed as an argument to another function is called a callback function in JavaScript
// • The function which accepts a function as an argument or retums a function is called a higher order function

// Why callbacks?
// Synchronous vs Asynchronous

// Synchronous callbacks
// A callback which is executed immediately is called a synchronous callback
// eg--sort(), filter(), map()

// Asynchronous callbacks
// • An asynchronous callback is a callback that is often used to continue or resume code execution after an asynchronous operation has completed
// • Callbacks are used to delay the execution of a function until a particular time or event has occured
// • Data fetching takes time and we can only run the function we want to after the data has been fetched and not immediately
// eg--SetTimeout()

// Problem with the callbacks pattern
// If you have multiple callback functions where each level depends on the result obtained from the previous level, the nesting of functions becomes so deep that the code becomes difficult to read and maintain

// Callbacks summary for interview
// • Callbacks are functions passed as arguments to other functions
// • They can be synchronous if they execute immediately or they can be asynchronous where they get exected after some time has passed, some event has occured or some data has been fetched
// • Callbacks were the go to pattern for asynchronously running code after fetching some data
// • As more and more requests had to be made based on the data obtained from the previous requests. developers started to encounter what is known as the callback hell
// • Callback hell makes the code difficult to reason about
// • An altemative and the recommend approach now is to use Promises


//  Promise
// Promise in layman terms - Dinner Scenario
// • Consider a scenario where you and your roommate want to have dinner at home
// • You want to prepare your special soup
// • At the same time, you feel like having tacos from the food truck nearby
// • You ask your roommate. "hey can you go down to the food truck and get us some tacos?"
// • When he is about to leave, you tell him
// • "There is no point in me waiting till you're back to prepare the soup. So I'll start with the soup now but when you reach the place, can you promise that you'll text me so I can start setting up the dining table?"
// • "Also let me know if something goes wrong. If you can't find the food truck or if they are out of tacos for the night. Let me know that you can't get the tacos and I'll start cooking some pasta instead"
// • Your friend says "Sure, I promise. I'll head out now and text you in some time."
// • Now, you go about preparing your soup but the status on tacos? We can say that it is currently pending till you receive that message from your friend
// • When you get back a text message saying that he is getting the tacos, your desire to eat tacos has been fulfilled. You can then proceed to set up the table
// • If the text message says that he can't bring back any tacos, your desire to have tacos have been rejected and you now to cook some pasta instead


// comparing dinner scenario and JavaScript
// JavaScript
// 1. Promise
// 2. Asynchronous operation in javascript (fetchTacos)
// 3. Promise return value
// 4. Promise is said to be fulfilled
// 5. Promise is said to be rejected
// 6. Success callback
// 7. Failure callback

// Promise - MDN definition
// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason

// What?
// A Promise is simply an object in JavaScript

// A promise is always in one of the three states
// • pending: which is initial state, neither fulfilled nor rejected
// • fulfilled: meaning that the operation completed successfully
// • rejected: meaning that the operation failed

// Why?
// Promises help us deal with asynchronous code in a far more simpler way comapred to callbacks
// Callback hell can be avoided with Promises

// How to create a Promise?
// const promise = new promise()

// How to fulfill or reject the promise?
//  arrow functions in promise automatically receives two arguments (resolve , reject)--> both are functions
// resolved is a function which when called changes the status of a promise from pending to fullfil---> resolve fnc is called to fullfill promise
// reject is a function which when called changes the status of a promise from pending to rejected---> reject fnc is called to reject promise

// • Promise status : pending to fulfilled? then() is executed
// • Promise status : pending to rejected? catch() is executed

// Summary for interview
// • Begin by explaining what is a Promise
// • Don't have to give the technical definition from MDN
// • Explain in your own words
// • How Promises are used for async operations in JavaScript
// • Give an analogy to a real world scenario and connect it back to JavaScript
// • Talk about the three states that a Promise can be in namely pending, fulfilled and rejected
// • Talk about the function that is passed into the Promise constructor function
// • Talk about the resolve and reject functions and how they change the state of the Promise from pending to fulfilled or pending to rejected
// • Finally, talk about the onFulfillment and onRejection callback functions which let you decide what to run when a Promise is fulfilled or rejected

// Promise - Part II

// I. then() function
// • The then() function is called when a promise is resolved
// • Encouraged approach
// • onRejection callback handles error from only the Promise
// • If your callback functions itself throws an error or exception, there is no code to handle that

// 2. Chaining Promises
// • Both then and catch methods return promises
// • then() and catch() methods can be chained in JavaScript

// 3. Promise - Static methods

// 3.1 Promise.all()-> takes an array of promises and returns a single promise
// -> Resolves when all promises in the array have been resolved
// -> Rejects as soon as even one of the promises in the array rejects

// 3.2 Promise.allSettled()
// -> Promise.allSettled() waits for all input promises to complete regardless of whether or not one of them is rejected

// 3.3 Promise.race()
// -> The Promise.race() method retums a promise that fulfills or rejects as soon as one of the input promises fulfills or rejects, with the value or reason from that promise

// 3.4 Promise.any()
// -> Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise that resolves with the value from that promise  
// -> If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors

// async await
// • How chaining Promises solves the problem we had with callback hell
// • There is a way to improve it even further
// • By using the async/await keywords introduced in ES2017 (ES8)
// • The async await keywords allow us to write completely synchronous- looking code while performing asynchronous tasks behind the scenes

// async
// • The async keyword is used to declare an async function (and async keyword returns a promise)
// • Async functions are functions that are instances of the AsyncFunction constructor
// • Unlike normal functions, async functions always retum a promise

// await
// • await keyword can be put infront of any async promise based function to pause your code until that promise settles and retums its result
// • await only works inside async functions. Cannot use await in normal functions

// Sequential vs concurrent vs parallel execution

// sequential execution ->
// consider two functions, func 1 has assigned to 2 sec time to compute and func 2 has been assigned with 1 sec, no matter what the time has assigned the func 2 will take up additional time inorder to complete func 1 before, this is called sequential execution = 3sec

//  concuurent execution ->
//  no need to take additional time it would do immediatelty = 2sec

// Summary for interview
// • The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains
// • async-await introduced in ES2017
// • async keyword returns a Promise
// • await keyword pause execution till the Promise is resolved or rejected
// • sequential vs concurrent vs parallel

//  Event Loop
// 4 Lectures
// Lecture 1 - recap about async programming, different parts, synchronous code snippet
// Lecture 2 - setTimeout
// Lecture 3 - Promise
// Lecture 4 - Combination of the above

//  Event Loop (For Synchronous)
// - Call stack -> starts execution with global scope in stack - push - store it in console - pop
// - Web API's
// - Console
// - Callback queue/ Task queue

//  Event Loop (For Async SetTimeout)
// - Call stack -> global scope in stack first - push - store it in console - execution moves to line 3 - pop
// - Web API's -> line 2 with the setTimeout() and callback() handed over to Web API
// - Console
// - Callback queue/ Task queue -> web API's sends the callback() fn to CallBack queue
// - Event Loop -> it constantly checks whether the call stack is empty or not, if its empty it will push callback()
// applies same for setTimeout() 0 seconds also




