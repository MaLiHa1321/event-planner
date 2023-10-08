1.let greeting;
greetign = {};
console.log(greetign);


- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

answer: B

explaination: 

The correct answer is greeting is not defined. Here, you declare greeting but assign the empty object to greetign which is not defined and show the greetign. So the correct answer is B.


2.function sum(a, b) {
  return a + b;
}

sum(1, "2");
- A: NaN
- B: TypeError
- C: "12"
- D: 3

answer: C

explaination: 

Here, sum function take 2 parameter and return the summation of two parameter. But we gave the parameter as 1 number and 1 string type so the sum function will return string type value.


3.const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError

answer: A

explaination: 

Here, we initailly create an array which containing 4 food emojis.also we create an object info and set its favoriteFood property to the 1st element of the food array. Then we update the info.favouriteFood property by assigning it the value. this change only affects the info object and is doesnot modify the orginal food array.


.function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

answer: B

explaination: 

Here sayHi function is defined to take one parameter 'name'. When we call sayHi() without providing any arguments it uses the default value of undefined for the name parameter.


5. let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4

answer: C

explaination:

Here, we declare array that contain 4 numbers and initially is 0 then use foreach loop and check the numbers is truthy or falsy. The number 3 is truthy so the count is incremented by 1 and answer is 3.






