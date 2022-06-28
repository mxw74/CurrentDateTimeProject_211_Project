// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const numToString = () => {

  let convertNum = 10;

  let text = convertNum.toString()

  document.getElementById("numToString").innerHTML = text

  return text 

}


// Write a JavaScript program to convert a string to the number.
const stringToNum =() => {

    //var to hold a string
    let newString = "28"

    //another variable to hold the number converted from the string
    let convString = parseInt(newString)

    //console.log to check my work and see if it returns right
    console.log(convString)
    //return the number

    document.getElementById("stringToNum").innerHTML = convString
    return(convString)

}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  

  
// Write a JavaScript program that adds 2 numbers together.
const addition = () => {

    const num1 = (10) //define first number

    const num2 = (10) //define second number

    let sum = num1 + num2; //create the function

    document.getElementById("addition").innerHTML = sum

    return sum //return the results
}


// Write a JavaScript program that runs only when 2 things are true.
const twoTrues = () => {
  //make variable to be determined true or not
  const firstNum = (10);

  const secondNum = (5);

  if (firstNum===10 && secondNum===5) {
      document.getElementById("twoTrues").innerHTML = response = "Run Program";
  } else {
    document.getElementById("twoTrues").innerHTML = response = "Don't Run";
  }
}


  //if 2+ are true then run program else dont run program



// Write a JavaScript program that runs when 1 of 2 things are true.

  //make variables to be checked for true or not

  //make js count how many are true or not

  //make it run if 1 of 2 items is true



// Write a JavaScript program that runs when both things are not true.  

  //make variables to be checked for true or not

  //make js check how many true and how many false

  //if there are no true then make it run

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
