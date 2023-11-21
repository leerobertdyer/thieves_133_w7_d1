     //==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/

let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max","HAS","PuRple","dog"]

const findDogs = (aString, anArray) => {
    ans = []
    for (dog of anArray){
        if (aString.toLowerCase().includes(dog.toLowerCase())) {
            ans.push(dog)
        } else {
            ans.push(`No Match for ${dog}`)
        }
    } return ans
}

//toLowerString (or toUpperString) is the equivilent of pythons .lower() .upper(),
//.includes is similar to saying "if dog is in aString"...
//.push is javascripts version of append. It also lets you push more than one element to the end of the list 

//Call method here with parameters
console.log(findDogs(dogString, dogNames))



 
    //============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let myArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

const removeEvenInd = (anArray) => {
    for (word in anArray) {
        if (word % 2 === 0) {
            anArray[word] = "even index"
        }
    }
    return anArray
}

console.log(removeEvenInd(myArr))

//used modulo and for in loop

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


//Codewars 

//                  Q1:

                /* COUNT BY X:
Create a function with two arguments that will return an array of the first n multiples of x.

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array or list ( depending on language ).
*/


//Python Solution:
/* 
def count_by(x, n):
    ans = []
    counter = 1
    while counter < n+1:
        ans.append(x * counter)
        counter += 1
    return ans
*/

function countBy(x, n) {
    ans = []
    counter = 1
    while (counter < n+1){
        ans.push(x * counter)
        counter ++
    }
    return ans
}

console.log(countBy(1.1, 5))
//note the 3.3000000000000003 in the logs... javascript bad at math lol


/*              Q2:

        Multiples of 3 or 5:

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
    let ans = []
    let answer = 0
    for (let i= 1; i < number; i++){
      if (i % 3 === 0 || i % 5 == 0) {
        ans.push(i)
      }
    }
    for (num of ans){
      answer += num
    }
    return answer
  }

  console.log(solution(10))

  //the || is javascript version of 'or' 

/* Python solution:
def solution(number):
    x = range(1, number)
    answer = 0
    for i in x:
        if i % 3 == 0 or i % 5 == 0:
            answer += i
    return answer
*/