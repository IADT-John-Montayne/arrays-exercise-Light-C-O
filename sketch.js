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

//removes the item at the start
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




function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
