let numeric_args_Array = [];
let filter_and_rearrange = function(array){
	for (let i = 2; i < array.length; i++){
		let num_check = parseInt(array[i]);
		if(!isNaN(num_check)){
			numeric_args_Array.push(num_check);
		}
	}
	numeric_args_Array.sort(function(a, b){return a-b})
}
filter_and_rearrange(process.argv);
console.log(numeric_args_Array);


