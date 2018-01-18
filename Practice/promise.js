/* ES5 */

let isMomHappy = true;

// Promise
let willIGetNewPhone = new Promise(
    function (fulfilledFunction, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            fulfilledFunction(phone);
        } else {
            let reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);
// // promise syntax look like this
// new Promise( executor function (resolve, reject) { ... } );

// /* ES5 */
// ...

// call our promise
let askMom = function () {

    willIGetNewPhone
        .then(function (passedVariable) {
            // yay, you got a new phone
            //function
            console.log(passedVariable);
         // output: { brand: 'Samsung', color: 'black' }
        },function (error) {
            // oops, mom don't buy it
            // console.log(error.message);
            console.log(error.message);
         // output: 'mom is not happy'
        }
    );
};

askMom();