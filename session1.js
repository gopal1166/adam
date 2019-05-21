// Try edit msg
// variables

var varName = 'value'

var name = "Adam"  // String
var age = 30   // int 

// defining Array
var arr1 = [1, 2, 3] //Array

// updating the value 
name = "Gopal"

// console.log(name)


// naming convension

// don't:
// should not staret with a digit


// do:
// can start with _
// camelCase:
// a-z, A-Z, 0-9


// accessing
console.log(arr1[1]);
// console.log(arr1[4])

// updating: using index
arr1[0] = 10

// console.log(arr1)


// Taks: How to delete element from an array


// conditions
var count = 30

if (count == 20) {
  console.log("Its 20")
} else {
  console.log("Its not 20")
}


// if else if else 
var age = 200

if(age < 30) {
  console.log("age is less than 30")
} else if (age == 30) {
  console.log("age is 30")
} else {
  console.log("age is greater than 30")
}


// defining
var food = {
    fruit: "banana",
    breakfast: "KFC",
    lunch: "Fish",
    price: 200,
    items: ["chicken", "prawns", "snakes"]
}

// accessing using keys in two ways 
console.log(food.fruit)
console.log(food['fruit'])

console.log(food['lunch'])

// update teh value using key 
food['fruit'] = "mango"

console.log(food)

// deleting