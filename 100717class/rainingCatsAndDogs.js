let dogs = {
	raining: true,
	noise: "Woof!",
	makeNoise: function(){
		if (this.raining === true){
			console.log(this.noise)
		}
	}
}

let cats = {
	raining: false,
	noise: "Meow!",
	makeNoise: function(){
		if (this.raining === true){
			console.log(this.noise)
		}
	}
}

dogs.makeNoise();
cats.raining = true;
cats.makeNoise();

function massHysteria() {
	if (dogs.raining === true && cats.raining === true) {
		console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!")
	}
}

massHysteria();