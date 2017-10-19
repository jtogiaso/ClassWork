/* ES5 */

let isMomHappy = false;

// Promise
let willIGetNewPhone = new Promise(
    function (fulfilled, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            fulfilled(phone); // fulfilled
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
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
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
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