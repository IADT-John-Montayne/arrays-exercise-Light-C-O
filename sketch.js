//====================== START OF PRACTICE =======================================

//displays all the items in the array
let names = ["Eve","Adam", "John", "Nora", "Victor", "Dora"];
console.log(names)

// this is how you change an item if you know the index value
console.log(names[0])

names[1] = "Moses";
console.log(names)

// adding a new item into the array, by default at the end
names.push("Flora");
console.log(names)

//removes the last item
names.pop();
console.log(names)

//adds an new item at the start
names.unshift("Bob");
console.log(names)

//removes the item at the end
names.shift("Bob");
console.log(names)

//looping through arrays
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}

//looping with for & of...
for (let name of names) {
	console.log(name);
}

//find an item - if it doesn't exist it will be -1. note; case sensitive
console.log(names.indexOf("Vicky"))

//find an item - if it does exist it will be the index of it, in the case it will be 0
console.log(names.indexOf("Eve"))

//showing the items from first mentioned item to the begininng of the first
let girls = names.slice(1, 4);
console.log(girls)

//changing the array
names.splice(1, 1);
console.log(names)

//replacing an item the array
names.splice(1, 1, "Tori");
console.log(names)


//=================== START OF FRUIT BASKET TASK 1 ==================================================

//Initialise
let basket = ["apple", "banana", "orange", "pear"];
console.log(basket)

//read from array
	//Log the first fruit
	console.log(basket[0])

	//Log the last fruit - use .length
	console.log(basket[basket.length - 1])

//modify
	//replace banana with kiwi (find banana first)
	let findb = basket.indexOf("banana")
	basket[findb] = "kiwi";
	console.log(basket)

	//remove the last item
	basket.pop();
	console.log(basket)

	//Add "mango" to the start of the array
	basket.unshift("mango");
	console.log(basket)

	//loop through basket
	for (let i = 0; i < basket.length; i++) {
	console.log(basket[i]);
	}

	//use FOR loop to every
	for (let i = 0; i < basket.length; i++) {
		
	console.log("Fruit " + (i + 1)+ ": " + (basket[i]));
	}
//search fruit
	//Check if "orange exists"
	console.log(basket.indexOf("orange"))

	//if stament if orange exists
	if (basket.indexOf("orange") === -1) {
		console.log("Orange not found");
	} else {
		console.log("Orange found at index s" + (basket.indexOf("orange")));
	}

//copy part of the basket
	//create array called citrus
	let citrus = [];

		




function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
