// Putting a code block inside of a function so it only runs when the function is invoked/called
const fixIt = (moving, shouldBeMoving) => {
    if (moving) {
      if (shouldBeMoving) {
        console.log("No problem! This should be moving and it does!");
      } else {
        console.log("OK, time for some duct tape!");
      }
    } else {
      if (shouldBeMoving) {
        console.log("Ok, some WD-40 should get this going!");
      } else {
        console.log("No problem! This should NOT be moving and it does not!");
      }
    }
  };
  
// fixIt(true, true);
// fixIt(true, false);
// fixIt(false, false);
// fixIt(false, true);


// Loops

// While loops are great when we don't have a defined range for executing our code: like an AC
// let temp = 75
// while(temp > 70){
//     console.log('Keep that baby going!')
//     console.log('Cooling...')
//     // Line below lowers temp so we can eventually break the loop.
//     temp -= 1
// }
// console.log('Ahh that feels better.')


// For loops: when you have a defined range, or set amount of times you'd like to run a piece of code(arrays)
// console.log('building for loops')

// console.log("you only have three guesses, be careful with your choices");

// let access = false;

// for (let i = 3; i >= 1; i--) {
//   let password = prompt("what is the password");
//   console.log(i);
//   if (password === "password1234") {
//     access = true;
//     break;
//   }
//   if (i === 3) {
//     alert(`You only have 2 guesses left`);
//   } else if (i === 2) {
//     alert("You only have 1 guess left!");
//   }
// }

// if (access) {
//   alert("Congratulations! You now have access to your account");
// } else {
//   alert("Sorry, you have lost access forever");
// }

// Truthiness & Falsiness
// falsey values: "", null, undefined, 0, NaN, false
// let access = ""
// if("1" === 1){
//     console.log('cool')
// } else {
//     console.log('not cool')
// }



// Polya Problem Solving Methodology:
// 1: Understand the problem (ask clarifying q's)
// 2: Make a plan (pseudocoding out the steps)
// 3: Carry out the plan (write the code!)
// 4: Look back, check and interpret (revise for edge cases)


const isPrime = (num) => {
    // check if the argument is a positive whole number
    // Line below first checks if num is a number datatype, then checks if it is positive, then checks if it is an integer(no decimal)
    if(typeof num !== 'number' || num <= 0 || num !== parseInt(num)) return "Argument must be a positive whole number"
    // start iterating at 2 and iterate up until the num argument
    for(let i = 2; i < num; i++){
        // determine if it's a prime by dividing the num by our iterator, and seeing if it has no remainder.
        if(num % i === 0){
            // if there is no remainder: it is not prime, return false
            return false
        }
    }
    // Return true, bc we iterated through all the numbers and didn't return false
    return true
}

// console.log(isPrime(7))
// console.log(isPrime(11))
// console.log(isPrime(13))
// console.log(isPrime(17))
// console.log(isPrime(25))


const printPrimes = (limit) => {
    // start with an empty array
    const primes = []
    // write a loop starting at 2 and ending at the number entered
    for(let i = 2; i < limit; i++){
        // check if the number is prime
        if(isPrime(i)){
            // if prime, push into the array
            primes.push(i)
        }
        // if not prime, do nothing. Go to the next number.
    }
    return primes
}

console.log(printPrimes(100))
console.log(isPrime(79))


// Function Declaration: will "hoist" to the top of it's scope. Meaning the function can be referenced anywhere, even before it is defined
function myFunction(){}

// Function Expression
const myFunc = function(){}

// Arrow Function (another function expression)
const myArrowFunc = () => {}


