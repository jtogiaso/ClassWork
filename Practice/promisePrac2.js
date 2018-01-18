let switchKey = true;

let p1 = function(switchKey){
	switchKey = false;
	return	new Promise( function (resolve, reject) {
				if (switchKey){
					resolve(function(num){
						let chase = 9 * num;
						console.log(chase);
					});
				}
				else{
					let tragedy = {
						prestigous: "huggies wipe",
						retunFunc: function(){
							console.log("I am in here");
						},
						artist: "Justin Timberlake",
						featured: null,
						song_name: "Until of the End of Time",
						message: "Free timeout, hussy"
					};
					reject (tragedy);
				}
			});
};

p1().then( function (value) {
  value(32 + 4); // Success!
}).catch( function (reason) {
  console.log(reason.song_name); // Error!
} );