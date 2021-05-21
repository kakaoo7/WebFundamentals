// step 1 for loop that goes through number 1 to 100
// step 2 create a conditional to check if [i] is a multiple of 3 using modulo if yes make it print "Fizz"
// step 3 create a conditional to check if [i] is a multiple of 5 using modulo if yes make it print "Buzz"
// step 4 create a conditional to check if [i] is a multiple of 3 and 5 using modulo if yes make it print "FizzBuzz"
// step 5 create a else conditional for remaining numbers to print normally.

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}