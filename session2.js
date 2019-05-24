arr1 = [1, 2, 3, 4]

// Try edit msg
arr1 = [10, 20, 30, 40]

// i need index 0 to 3 to access all the elements one by one 
// valid
// a[0]
// a[1]
// a[2]
// a[3]

// not valid
// a[4]

// for(var i = 0; i < 4; i++) {
  
//   console.log(arr1[i]) 
// }

// i=0 -> 11
// i=1 -> 20
// i=2 -> 30
// i=3 -> 40

// i=4 -> exit from the loop 

// flow:
// 1.initialization
// 2.condition 
// 3.statements
// 4.increments


// Task: do while


// for loop on Javascript object
// Try edit msg
var obj = {
    name: "Adam",
    age: 200
  }
  
  // access using key 
  // console.log(obj.name)
  // console.log(obj.age)
  
  // access using for 
  // no need of condition, incre/decrement
  for(var k in obj) {
    console.log(k)
    console.log(obj[k])
    
    console.log("\n")
  }


// switch
switch(count) {
    case 10:
      console.log("count is 10")
      break
    
    case 20:
      console.log("count is 20")
      break
    
    default:
      console.log("count is not matched")
  }
  
  




