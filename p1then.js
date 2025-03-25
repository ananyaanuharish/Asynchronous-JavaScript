const promise = new promise((resolve, reject) => {
    resolve() 
})

promise.then(onFulfillment)
promise.catch(onRejection)

// then() can accept both success and error callbacks but it is not applicable for catch()
const promisee = new promise((resolve, reject) => {
    resolve() 
})

promisee.then(onFulfillment, onRejection)