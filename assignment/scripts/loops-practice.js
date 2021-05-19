console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}//The part of the example loop that we would need to change would be the number 4
//to a 6 in the parameter. We want the number to be 1 more than the comparison value so that
//when we run our loop, it would eventually result in false to stop the loop.

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i = 3; i<6; i++) {
  console.log(i);
}//We would need to define i to 3 and change the length value to generate a false output at 6
//to stop counting at 5.

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i<11; i+=2) {
  console.log(i);
}//Fixed the loop by fixing the i+2 index to i+=2. I also changed the comparison index
//to i<12 to i<11. I guess the second fix wasn't necessary to fix the infinite loop but
//I guess it just helps me to keep things tight.

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i >= 0; i--) {
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let name of stars) {
  console.log(name);
}//Not sure how this works exactly. What I think is happening is the of statement allows
//the name variable to list the stars array.
//Referenced https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i = 0;
  while (i < stars.length) {
    console.log(stars[i]);
    i++;
}//So I ended up getting some help from some friends because I got stuck. I did try the route
//of creating a new variable earlier but I couldn't figure out how to make it work because
//I ended up getting stuck in a loop again. My friend hinted at something I did in an earlier code
//with increments. I tried that which kinda fixed my issue where it listed 4/5 of the star names but
//not the first. It was because I put the i++ before the console.log versus after. He explained by
//putting the i++ first forces it to skip the first star because I am forcing it to start at 1
//in the array and not 0. When I moved the i++ underneath the console.log, it fixed the problem.

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
let count = ['0', '1', '2', '3', '4', '5'];
let x = 0;
  while (x < count.length) {
    console.log(count[x]);
    x++;
    }

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let counting = ['10', '9', '8', '7', '6', '5'];
let y = 10;
  while (y > 4) {
  console.log(y);
  y--;
}


//***Extra*** (trying to debug for myself. Friend gave me a suggestion on how to debug throughout
//the original problem code I produced.)
let counting1 = ['10', '9', '8', '7', '6', '5'];
let z = 7;
  while (z > counting1.length) {
console.log('***start**');
  console.log("index:", z);
console.log("value using index:", counting1[z]);console.log('***end**');
  z--;
}
