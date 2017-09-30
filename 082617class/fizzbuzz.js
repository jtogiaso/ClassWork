/**
 * * Write a script that prints the numbers 1 to 100 in 
 * the console. But for multiples of three, print `Fizz` instead 
 * of the number. For multiples of five, print `Buzz`. For numbers 
 * hich are multiples of both three and five, print `FizzBuzz`.


 HINT: Modulus -- gives the remainder of division

    5 % 2 === 1
    5 % 3 === 2
 */


//Write a for loop incrementing a value from 1 to 10
//Inside the loop check each value for factors of 2 and 3
//If a factor of 2 then print only fizz
//If a factor of 3 the only print buzz
//If a factor of both then print only fizzbuzz
//If not a factor of either than print only the number

for (var i = 0 ; i < 100 ; i++) {
	if (i % 2 === 0 && i % 3 ===0){
		console.log("FizzBuzz");
	}
	else if (i % 3 ===0) {
		console.log("Buzz");
	}
	else if (i % 2 ===0) {
		console.log("Fizz");
	}
	else {
		console.log(i);
	}

}